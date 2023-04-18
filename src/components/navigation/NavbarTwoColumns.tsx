/* eslint-disable react/no-unknown-property */
import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Logo } from "../hero/Logo";

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

export function NavbarTwoColumns(props: INavbarProps) {
  const router = useRouter();

  return (
    <h1 className="flex flex-full w-full justify-between dark:invert">
      <Logo></Logo>
      <div className="flex items-center justify-center opacity-60">
        {props.children}
      </div>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </h1>
  );
}
