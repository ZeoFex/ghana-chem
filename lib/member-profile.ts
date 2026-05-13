export const GCS_MEMBER_STORAGE_KEY = "gcs-member-profile-v1";
export const GCS_MEMBER_AUTH_KEY = "gcs-member-auth-v1";

export type MemberPayment = {
    id: string;
    date: string;
    description: string;
    amountGhs: number | null;
    status: "completed" | "pending" | "failed";
    reference?: string;
};

export type MemberProfile = {
    memberId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    institution: string;
    role: string;
    department: string;
    city: string;
    region: string;
    membershipType: string;
    highestDegree: string;
    fieldOfStudy: string;
    motivation: string;
    registeredAt: string;
    avatarDataUrl?: string;
    payments: MemberPayment[];
};

export function loadMemberProfile(): MemberProfile | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = window.localStorage.getItem(GCS_MEMBER_STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as MemberProfile;
        if (!parsed?.memberId || !parsed?.email) return null;
        return parsed;
    } catch {
        return null;
    }
}

export function saveMemberProfile(profile: MemberProfile) {
    if (typeof window === "undefined") return;
    clearMemberAuthSession();
    window.localStorage.setItem(GCS_MEMBER_STORAGE_KEY, JSON.stringify(profile));
}

export type MemberAuthSession = {
    memberId: string;
    emailLower: string;
    verifiedAt: string;
};

/** Canonical form `GCS-YY-SUFFIX` (two-digit year). Accepts legacy `GCS-YYYY-SUFFIX` for comparison. */
export function normalizeMemberId(raw: string): string {
    const s = raw.trim().replace(/\s+/g, "").toUpperCase();
    const m = /^GCS-(\d{2}|\d{4})-([A-F0-9]+)$/.exec(s);
    if (!m) return s;
    const yPart = m[1];
    const suffix = m[2];
    const yy =
        yPart.length === 4
            ? String(parseInt(yPart, 10) % 100).padStart(2, "0")
            : yPart.padStart(2, "0");
    return `GCS-${yy}-${suffix}`;
}

export function loadMemberAuthSession(): MemberAuthSession | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = window.localStorage.getItem(GCS_MEMBER_AUTH_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as MemberAuthSession;
        if (!parsed?.memberId || !parsed?.emailLower) return null;
        return parsed;
    } catch {
        return null;
    }
}

export function saveMemberAuthSession(profile: MemberProfile) {
    if (typeof window === "undefined") return;
    const session: MemberAuthSession = {
        memberId: normalizeMemberId(profile.memberId),
        emailLower: profile.email.trim().toLowerCase(),
        verifiedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(GCS_MEMBER_AUTH_KEY, JSON.stringify(session));
}

export function clearMemberAuthSession() {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(GCS_MEMBER_AUTH_KEY);
}

/** Portfolio UI is shown only after member login with matching email + member ID on this device. */
export function isMemberPortfolioUnlocked(): boolean {
    const profile = loadMemberProfile();
    const auth = loadMemberAuthSession();
    if (!profile || !auth) return false;
    return (
        normalizeMemberId(profile.memberId) === normalizeMemberId(auth.memberId) &&
        profile.email.trim().toLowerCase() === auth.emailLower
    );
}

export function verifyMemberCredentials(email: string, memberIdInput: string): { ok: true } | { ok: false; message: string } {
    const profile = loadMemberProfile();
    if (!profile) {
        return {
            ok: false,
            message:
                "No membership record found in this browser. Apply on this device first, or sign in where you originally registered.",
        };
    }
    const emailOk = profile.email.trim().toLowerCase() === email.trim().toLowerCase();
    const idOk = normalizeMemberId(profile.memberId) === normalizeMemberId(memberIdInput);
    if (!emailOk || !idOk) {
        return {
            ok: false,
            message: "That email and member ID do not match our record on this device. Check the confirmation screen or your email.",
        };
    }
    return { ok: true };
}

export function clearMemberProfile() {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(GCS_MEMBER_STORAGE_KEY);
    clearMemberAuthSession();
}

export function membershipTypeLabel(value: string): string {
    const map: Record<string, string> = {
        student: "Student",
        early_career: "Early career",
        professional: "Professional",
        corporate: "Corporate / institutional",
    };
    return map[value] ?? value.replace(/_/g, " ");
}

export function readImageAsDataUrl(file: File, maxBytes = 480_000): Promise<string> {
    return new Promise((resolve, reject) => {
        if (!file.type.startsWith("image/")) {
            reject(new Error("Use a JPEG, PNG, or WebP image."));
            return;
        }
        if (file.size > maxBytes) {
            reject(new Error(`Please choose an image under ${Math.round(maxBytes / 1000)} KB.`));
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            const r = reader.result;
            if (typeof r === "string") resolve(r);
            else reject(new Error("Could not read the image."));
        };
        reader.onerror = () => reject(new Error("Could not read the image."));
        reader.readAsDataURL(file);
    });
}
