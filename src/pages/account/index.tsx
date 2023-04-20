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
import { Authenticator } from "@aws-amplify/ui-react";
import { useUser } from "@/context/AuthContext";

export default function Home() {
  const { user, setUser } = useUser();
  const [links, setLinks] = useState(<div></div>);

  const router = useRouter();

  return (
    <Authenticator>
      <main className="flex min-h-screen flex-col justify-between items-center">
        <NavBar />
        <div className="flex flex-row text-center text-3xl font-bold">
          {user && user.username && <div>Hello {" " + user.username}</div>}
        </div>
        <UserUpdateForm />
        <Footer></Footer>
      </main>
    </Authenticator>
  );
}
