import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Build. Dream. Repeat.",
    description: "I build websites, mobile apps, UI/UX designs, marketing, and technical solutions for startups, small businesses, and entrepreneurs.",
    keywords: [
        "freelance web developer",
        "web design",
        "app development",
        "UI/UX design",
        "full-stack developer",
        "frontend developer",
        "technical solutions",
        "mobile app developer",
        "digital marketing",
        "responsive websites",
        "startup websites",
        "freelance software engineer",
        "Chicago web developer",
        "creative portfolio",
        "custom websites"
    ],
    metadataBase: new URL("https://johnathanthedev.com"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                {children}
            </body>
        </html>
    );
}
