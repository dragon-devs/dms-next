'use client';

import React from 'react';
import {appWindow} from "@tauri-apps/api/window";

const WindowTitleBar = () => {
    return (
            <div data-tauri-drag-region className="titlebar flex gap-2 justify-end fixed top-0 left-0 right-0 p-2 duration-500 transition-all rounded-t-xl user-select-none hover:bg-muted-foreground/30">
                <div onClick={() => appWindow.minimize()} className="titlebar-button bg-amber-400 hover:bg-amber-400/50 transition-all rounded-full inline-flex justify-center items-center w-5 h-5">
                </div>
                <div onClick={() => appWindow.toggleMaximize()} className="titlebar-button inline-flex justify-center items-center bg-green-400 hover:bg-green-400/50 transition-all rounded-full w-5 h-5">
                </div>
                <div onClick={() => appWindow.close()} className="titlebar-button inline-flex justify-center items-center bg-rose-400 hover:bg-rose-400/50 transition-all rounded-full w-5 h-5">
                </div>
            </div>
    );
};

export default WindowTitleBar;