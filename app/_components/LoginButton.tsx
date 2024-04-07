import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";

const LoginButton = () => {
    return (
        <div>
            <Link href="/users/login">
                <Button>Login</Button>
            </Link>
        </div>
    );
};

export default LoginButton;