import Link from "next/link";

import CenteredFooter from "../footer/CenteredFooter";
import { Logo } from "../hero/Logo";

const Footer = () => (
  <div className="flex w-full dark:invert">
    <CenteredFooter logo={<Logo />}>
      <li>
        <Link href="/">
          <div>Home</div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div>About</div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div>Docs</div>
        </Link>
      </li>
      <li>
        <Link href="/sisu">
          <div>Sign In/Sign Up</div>
        </Link>
      </li>
    </CenteredFooter>
  </div>
);

export { Footer };
