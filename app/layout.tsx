import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "goey-toast/styles.css";
import { AppToaster } from "@/components/app-toaster";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Ghana Chemical Society (GCS)",
  description:
    "The Ghana Chemical Society advances chemistry education, research, innovation, and scientific collaboration in Ghana and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        {children}
        <AppToaster />
      </body>
    </html>
  );
}
