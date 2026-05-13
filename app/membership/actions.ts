"use server";

import { randomBytes } from "crypto";

export type MembershipRegistrationState =
    | { ok: true; memberId: string }
    | { ok: false; message: string };

function generateMemberId(): string {
    const year = new Date().getUTCFullYear();
    const yy = String(year % 100).padStart(2, "0");
    const suffix = randomBytes(4).toString("hex").toUpperCase();
    return `GCS-${yy}-${suffix}`;
}

function trim(formData: FormData, key: string): string {
    const v = formData.get(key);
    return typeof v === "string" ? v.trim() : "";
}

export async function submitMembershipRegistration(
    formData: FormData
): Promise<MembershipRegistrationState> {
    const firstName = trim(formData, "firstName");
    const lastName = trim(formData, "lastName");
    const email = trim(formData, "email");
    const phone = trim(formData, "phone");
    const institution = trim(formData, "institution");
    const membershipType = trim(formData, "membershipType");
    const consent = formData.get("consent") === "on";

    if (!firstName || !lastName) {
        return { ok: false, message: "Please enter your first and last name." };
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { ok: false, message: "Enter a valid email address." };
    }
    if (!phone || phone.replace(/\D/g, "").length < 9) {
        return { ok: false, message: "Enter a reachable phone number." };
    }
    if (!institution) {
        return { ok: false, message: "Institution or employer is required." };
    }
    if (!membershipType) {
        return { ok: false, message: "Select a membership category." };
    }
    if (!consent) {
        return { ok: false, message: "Confirm the declaration to continue." };
    }

    // Operational: replace with DB insert, CRM, or email to secretariat.
    await new Promise((r) => setTimeout(r, 450));

    return { ok: true, memberId: generateMemberId() };
}
