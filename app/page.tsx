import {ModeToggle} from "@/components/ModeToggle";
import React from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen  flex-col items-center justify-between p-20">
            <div>
                DMS NEXT TESTING SETUP.
                <ModeToggle/>
            </div>
        </main>
    );
}
