import type { Metadata } from "next";
import { Inter, Gruppo } from "next/font/google";
import "../styles/globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });
const gruppo = Gruppo({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "michaelhayes",
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
        <Navigation />
        <div>{children}</div>
      </body>
    </html>
  );
}
