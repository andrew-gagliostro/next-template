import { ReactNode } from "react";

import { FooterCopyright } from "./FooterCopyright";
import { FooterIconList } from "./FooterIconList";
import Link from "next/link";
import { useRouter } from "next/router";

type ICenteredFooterProps = {
  logo: ReactNode;
  children: ReactNode;
};

export default function CenteredFooter(props: ICenteredFooterProps) {
  const router = useRouter();
  return (
    <div className="text-center flex flex-col w-full hwq-max-fit bg-gray-200 pt-3 pb-5">
      <div className="max-h-fit">{props.logo}</div>
      <nav>
        <ul className="navbar flex flex-row w-full px-15 pb-5 justify-around font-medium text-xl text-gray-800">
          {props.children}
        </ul>
      </nav>
      <div className="text-sm">
        <FooterCopyright />
      </div>
    </div>
  );
}
