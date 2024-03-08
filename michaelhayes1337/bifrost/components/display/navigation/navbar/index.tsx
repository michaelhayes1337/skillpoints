import React from "react";
import { Kanit } from "next/font/google";
import Link from "next/link";

const kanit = Kanit({ weight: "700", subsets: ["latin"] });

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <menu>
        <li>
          <Link href="/" className={`${kanit.className}`}>
            skillpointz
          </Link>
        </li>
        <li>
          <Link href="/blogs">blogs</Link>
        </li>
        <li>
          <Link href="/showcases">showcases</Link>
        </li>
        <li>
          <Link href="/me">about me</Link>
        </li>
      </menu>
    </div>
  );
};

export default Navbar;
