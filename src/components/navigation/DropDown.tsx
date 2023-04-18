import Link from "next/link";

import { Auth, Hub } from "aws-amplify";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@aws-amplify/ui-react";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [links, setLinks] = useState(<div></div>);

  useEffect(() => {
    const updateUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        console.log(user);
        setLinks(
          <a className="min-w-fit">
            <div
              className="hover:bg-violet-300 min-w-fit"
              onClick={async () => {
                "/account" != router.pathname
                  ? router.replace("/account")
                  : router.reload();
              }}
            >
              Account Info
            </div>
            <div
              className="hover:bg-violet-300 min-w-fit"
              onClick={async () => {
                await Auth.signOut();
                router.reload();
                setUser(null);
              }}
            >
              <a>Sign Out</a>
            </div>
          </a>
        );
      } catch {
        setUser(null);
        setLinks(
          <a className="text-center min-w-fit">
            <div
              className="hover:bg-violet-300 min-w-fit"
              onClick={async () => {
                router.push("/sisu");
              }}
            >
              Sign In/Sign Up
            </div>
          </a>
        );
      }
    };
    console.log(router.pathname);
    Hub.listen("auth", updateUser); // listen for login/signup events
    updateUser();

    // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag
    // check manually the first time because we won't get a Hub event // cleanup
  }, []);

  return (
    <div className="relative">
      <button
        className="object-center min-w-fit text-black px-auto pt-3 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="object-center">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-10 mx-2 my-5 text-gray-100 opacity-60 bg-gray-600 rounded-lg border border-transparent">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            className="min-w-fit"
          >
            {links}
          </div>
        </div>
      )}
    </div>
  );
}

export { DropDown };
