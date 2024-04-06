'use client';

import React from 'react';
import {appWindow} from "@tauri-apps/api/window";

const WindowTitleBar = () => {
    return (
        <div data-tauri-drag-region className="titlebar flex justify-end fixed top-0 left-0 right-0 p-2 user-select-none">
            <div onClick={() => appWindow.minimize()} className="titlebar-button hover:bg-slate-800 inline-flex justify-center items-center w-12 h-12">
                <img src="https://api.iconify.design/mdi:window-minimize.svg" alt="minimize" />
            </div>
            <div onClick={() => appWindow.toggleMaximize()} className="titlebar-button hover:bg-slate-800  inline-flex justify-center items-center w-12 h-12">
                <img src="https://api.iconify.design/mdi:window-maximize.svg" alt="maximize" />
            </div>
            <div onClick={() => appWindow.close()} className="titlebar-button inline-flex hover:bg-slate-800  justify-center items-center w-12 h-12">
                <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
            </div>
        </div>
    );
};

export default WindowTitleBar;