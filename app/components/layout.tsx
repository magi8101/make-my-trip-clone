import type { ReactNode } from "react";
import Head from "next/head";
import CursifiyCursor from "./components/CursifiyCursor";
import "../styles/global.css";

export const metadata = {
  title: "MakeMyTrip - Explore & Book Travel",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <body className="bg-home">
        <CursifiyCursor />
        {children}
      </body>
    </html>
  );
}

