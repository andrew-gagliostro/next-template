import Link from 'next/link';

import { Auth } from 'aws-amplify';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@aws-amplify/ui-react';

function AccountLinks() {
    let [isSignedIn, setIsSignedIn] = useState(false);
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

    if (!isSignedIn) {
        return (
            <Link href="/sisu">
                <a>Sign In/Sign Up</a>
            </Link>
        )
    }
    else {
        return (
            <a>
                <Button onClick={() => { router.push('/account') }}>
                    <a>Account Info</a>
                </Button>
                <Button onClick={async () => {
                    await Auth.signOut()
                    router.push("/");
                    setIsSignedIn(false)
                }}><a>Sign Out</a></Button>
            </a>
        )
    }
}

export { AccountLinks };