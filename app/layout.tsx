import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import WindowTitleBar from "@/app/windowTitleBar";
import RoundedCorners from "@/app/roundedCorners";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "DMS NEXT",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <WindowTitleBar />
            <body className={`${inter.className}`}>
                <RoundedCorners>
                    {children}
                </RoundedCorners>
            </body>
        </html>
    );
}
