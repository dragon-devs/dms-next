import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import RoundedCorners from "@/app/roundedCorners";
import {ThemeProvider} from "@/components/providers/ThemeProvider";
import React from "react";
import dynamic from "next/dynamic";
import {WindowTitleBarSkeleton} from "@/app/windowTitleBar";

const WindowTitleBar = dynamic(() => import('@/app/windowTitleBar'),
    {ssr: false, loading: loadingProps => <WindowTitleBarSkeleton />}
);

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "DMS NEXT",
    description: "Distribution management system",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <WindowTitleBar/>
        <RoundedCorners>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </RoundedCorners>
        </body>
        </html>
    );
}
