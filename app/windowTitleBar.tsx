'use client';

import React from 'react';
import {appWindow} from "@tauri-apps/api/window";
import {Skeleton} from "@/components/ui/skeleton";
import delay from "delay";
import {Cross1Icon, EnterFullScreenIcon, MinusIcon} from "@radix-ui/react-icons";
import {CrossIcon, FullscreenIcon} from "lucide-react";

export const WindowTitleBarSkeleton = () =>{
    return (
        <div data-tauri-drag-region className="titlebar cursor-grab z-50 flex gap-2 justify-end fixed top-0 left-0 right-0 p-2 transition-all rounded-t-xl user-select-none">
            <div className="flex gap-2">
                <Skeleton className="h-5 w-5 bg-amber-400 rounded-full" />
                <Skeleton className="h-5 w-5 bg-green-400 rounded-full" />
                <Skeleton className="h-5 w-5 bg-rose-400 rounded-full" />
            </div>
        </div>
    )
}
const WindowTitleBar = async () => {

    return (
        <div data-tauri-drag-region
             className="titlebar z-50 flex gap-2 justify-end fixed top-0 cursor-grab left-0 right-0 p-2 transition-all rounded-t-xl user-select-none">
            <div className="flex gap-2">
                <div onClick={() => appWindow.minimize()}
                     className="titlebar-button dark:bg-amber-400 bg-amber-500 cursor-pointer hover:bg-amber-400/50 transition-all rounded-full inline-flex justify-center items-center w-5 h-5">
                    <MinusIcon className="text-background p-0.5"/>

                </div>
                <div onClick={() => appWindow.toggleMaximize()}
                     className="titlebar-button inline-flex cursor-pointer justify-center items-center dark:bg-green-400 bg-green-500 hover:bg-green-400/50 transition-all rounded-full w-5 h-5">
                    <EnterFullScreenIcon className="text-background p-0.5"/>

                </div>
                <div onClick={() => appWindow.close()}
                     className="titlebar-button inline-flex cursor-pointer justify-center items-center dark:bg-rose-400 bg-rose-500 hover:bg-rose-400/50 transition-all rounded-full w-5 h-5">
                    <Cross1Icon className="text-background p-0.5"/>

                </div>
            </div>
        </div>
    );
};


export default WindowTitleBar;

