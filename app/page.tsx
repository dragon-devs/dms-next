import NavBar from "@/app/NavBar";
import {ModeToggle} from "@/components/ModeToggle";
import React from "react";
import prisma from "@/prisma/client";
import LoginButton from "@/app/_components/LoginButton";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default async function Home() {
    const distribution = await prisma.distribution.findMany();
    const users = await prisma.user.findMany({include: {distribution: true}});

    return (
        <main className="">
            <div className="flex justify-center gap-3 items-center h-screen">
                <Link href="/users/login">
                    <Button>Login</Button>
                </Link>
                <ModeToggle/>
                <h1 className="text-2xl font-bold">Home</h1>
                <div>
                    {distribution!.map(m => <p key={m.id}>{m.name}</p>)}
                </div>
                <div>
                    {users!.map(m => (
                        <div key={m.id}>
                            <p>{m.name}</p>
                            <p className="text-muted-foreground text-xs">{m.distribution!.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
