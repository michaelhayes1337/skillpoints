import React from "react";
import { Gloria_Hallelujah, Kanit } from "next/font/google";
import Link from "next/link";
const gloria = Gloria_Hallelujah({ subsets: ["latin"], weight: "400" });
const kanit = Kanit({ subsets: ["latin"], weight: "500" });
const NavBar = () => {
  return (
    <nav className="flex justify-between px-20 py-10 items-center">
      <h1 className={`text-xl text-accent font-bold ${kanit.className}`}>
        <Link href="/blogs" className="font-semibold text-gray-700">
          michaelhayes1337
        </Link>
      </h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/blogs" className="font-semibold text-gray-700">
              blogs
            </Link>
          </li>
          <li>
            <Link href="/projects" className="font-semibold text-gray-700">
              projects
            </Link>
          </li>
          <li>
            <Link href="/resume" className="font-semibold text-gray-700">
              resume
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-semibold text-gray-700">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
