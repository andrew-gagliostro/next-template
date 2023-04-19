import Link from "next/link";

import { HeroOneButton } from "./HeroOneButton";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import { Button } from "../button/Button";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

import { DropDown } from "../navigation/DropDown";
import { useRouter } from "next/router";
import { NavBar } from "../navigation/NavBar";

function Hero() {
  const router = useRouter();

  const [user, setUser] = useState(undefined);

  async function getUser() {
    try {
      const tempUser = await Auth.currentAuthenticatedUser();
      setUser(tempUser);
    } catch (e) {
      console.log("No user signed in");
    }
  }

  useEffect(() => {
    getUser();
  });

  return (
    <>
      <NavBar />
      {user ? (
        <div className="text-center hero lg:mt-1 dark:invert flex flex-col items-center justify-between box-border">
          <div className="text-7xl font-bold text-gray-500 pb-1 mb-1 z-10 simple">
            MyLysts
          </div>
          <div className="text-6xl font-bold rotating-text pb-10 min-h-fit">
            Create. Connect. Style. Share.
          </div>
          <h2 className="text-2xl font-semibold ">
            A simple and personalized way to keep track of your favorite
            products or services and share them with others
          </h2>
        </div>
      ) : (
        <div className="text-center hero lg:mt-1 dark:invert flex flex-col items-center justify-around box-border px-3 pb-10">
          <div className="text-7xl font-bold text-gray-500 mb-10">
            MyLysts
            <div className="text-6xl font-bold rotating-text pb-10 pt-4 min-h-fit">
              Create. Connect. Style. Share.
            </div>
          </div>

          <h2 className="text-2xl font-semibold pb-5">
            A simple and personalized way to keep track of your favorite
            products or services and share them with others
          </h2>
          <a
            onClick={() => {
              router.push("/sisu");
            }}
          >
            <Button xl={true}>Create An Account Now</Button>
          </a>
        </div>
      )}
    </>
  );
}

export { Hero };
