import Link from 'next/link';

import { Auth } from 'aws-amplify';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@aws-amplify/ui-react';

function AccountLinks() {
    let [isSignedIn, setIsSignedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();

    useEffect(() => {
        async function checkAuthState() {
            try {
                await Auth.currentAuthenticatedUser();
                setIsSignedIn(true);
            } catch (err) {
                setIsSignedIn(false);
            }
            await Auth.currentAuthenticatedUser().then((user: any) => console.log(user.attributes.email));
            console.log(isSignedIn)
        }
        checkAuthState();
    }, []);

    let links;

    if (!isSignedIn) {
        links = (
            <a className="text-center">
                <div className="hover:bg-violet-300" onClick={async () => {
                    router.push("/sisu");
                }}>Sign In/Sign Up
                </div>
            </a>
        )
    }
    else {
        links = (
            <a className="text-center">
                <div className="hover:bg-violet-300" onClick={async () => {
                    router.push("/account");
                }}>Account Info
                </div>
                <div className="hover:bg-violet-300" onClick={async () => {
                    await Auth.signOut()
                    router.push("/");
                    setIsSignedIn(false)
                }}><a>Sign Out</a></div>

            </a>
        )
    }
    return (
        <div className="relative object-center">
            <button className="object-center text-white bg-violet-500 px-2 py-2 rounded-sm object-right w-1/10"
                onClick={() => setIsOpen(!isOpen)}>
                <div className="object-center">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-violet-200 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {links}
                    </div>
                </div>
            )}
        </div>
    )

}

export { AccountLinks };