import React from "react";
import { Gloria_Hallelujah, Kanit } from "next/font/google";
import Link from "next/link";
const gloria = Gloria_Hallelujah({ subsets: ["latin"], weight: "400" });
const kanit = Kanit({ subsets: ["latin"], weight: "500" });
const NavBar = () => {
  return (
    <nav className="flex justify-between px-20 py-10 items-center">
      <h1 className={`text-xl text-accent font-bold ${kanit.className}`}>
        michaelhayes1337
      </h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700">home</li>
          <li className="font-semibold text-gray-700">projects</li>
          <li className="font-semibold text-gray-700">blogs</li>
          <li className="font-semibold text-gray-700">resume</li>
          <li className="font-semibold text-gray-700">contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
