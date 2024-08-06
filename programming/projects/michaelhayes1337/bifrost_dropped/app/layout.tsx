import type { Metadata } from "next";
import { Inter, Kanit, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/display/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });

const lexend = Lexend({ weight: "300", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "skillpointz",
  description: "the start of a journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
