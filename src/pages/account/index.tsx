import Image from "next/image";
import UserUpdateForm from "../../ui-components/UserUpdateForm";
import React, { Component, useEffect, useState } from "react";
import HomeLinks from "@/components/layout/HomeLinks";
import { Hero } from "@/components/hero/Hero";
import { Typography } from "@material-ui/core";
import { NavbarTwoColumns } from "@/components/navigation/NavbarTwoColumns";
import { DropDown } from "@/components/hero/DropDown";
import { Logo } from "@/components/hero/Logo";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Auth, Hub } from "aws-amplify";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const [links, setLinks] = useState(<div></div>);

  const router = useRouter();

  useEffect(() => {
    const updateUser = async () => {
      try {
        const user = await Auth.currentUserInfo();
        setUser(user.username);
        console.log(user);
      } catch (e) {
        setUser(null);
      }
    };
    Hub.listen("auth", updateUser); // listen for login/signup events
    updateUser();

    // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag
    // check manually the first time because we won't get a Hub event // cleanup
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between items-center">
      <NavBar />
      <div className="flex flex-row text-3xl font-bold">
        {user && <div>{user}</div>}
      </div>
      <UserUpdateForm />
      <Footer></Footer>
    </main>
  );
}
