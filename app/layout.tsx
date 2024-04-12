import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import RoundedCorners from "@/app/roundedCorners";
import {ThemeProvider} from "@/components/providers/ThemeProvider";
import React from "react";
import WindowTitleBar from "@/app/windowTitleBar";
import {Toaster} from "@/components/ui/sonner";
import {Command} from "@tauri-apps/api/shell";

// const WindowTitleBar = dynamic(() => import('@/app/windowTitleBar'),
//     {ssr: false, loading: loadingProps => <WindowTitleBarSkeleton/>}
// );

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "DMS NEXT",
    description: "Distribution management system",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <RoundedCorners>
        <WindowTitleBar/>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex max-h-96 flex-col min-h-screen p-5">
                        {children}
                    </div>
                    <Toaster />
                </ThemeProvider>
        </RoundedCorners>
        </body>
        </html>
    );
}
