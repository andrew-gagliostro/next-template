import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { Auth, Hub } from 'aws-amplify';
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';


function Index() {

    let [isSignedIn, setIsSignedIn] = useState(false);
    const router = useRouter();

    Hub.listen('auth', (data) => {
        const event = data.payload.event;
        console.log('event:', event);
        if (event === "signIn") {
            router.back()
        }
    });

    useEffect(() => {
        async function checkAuthState() {
            try {
                if (isSignedIn) router.push('/')
                await Auth.currentAuthenticatedUser();
                setIsSignedIn(true);
                router.back();
            } catch (err) {
                setIsSignedIn(false);
            }
        }

        checkAuthState();
    }, []);


    return (<Authenticator></Authenticator>)
}

export default Index;
