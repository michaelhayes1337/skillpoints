import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "michael hayes",
  description: "created by me for me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} pt-24 px-6`}
        style={{
          backgroundColor: "#EBE2CA",
          minHeight: "100vh",
        }}
      >
        <div className="navbar fixed top-0 left-0 bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl" style={{ color: "#0C0C0C" }}>
              michaelhayes
            </a>
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
