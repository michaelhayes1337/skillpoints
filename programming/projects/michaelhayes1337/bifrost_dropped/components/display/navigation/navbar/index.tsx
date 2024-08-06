import React from "react";
import { Kanit } from "next/font/google";
import Link from "next/link";
import styles from "./Navbar.module.css";
const kanit = Kanit({ weight: "700", subsets: ["latin"] });

type Props = {};

const Navbar = (props: Props) => {
  const containerClassName = `${styles.NavbarContainer}`;
  const menuClassName = `${styles.Menu}`;
  const logoClassName = `${styles.Logo}`;
  const zClassName = `${styles.Z}`;
  return (
    <div className={containerClassName}>
      <menu className={menuClassName}>
        <li className={logoClassName}>
          <Link href="/" className={`${kanit.className}`}>
            skillpoint<span className={zClassName}>z</span>
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
