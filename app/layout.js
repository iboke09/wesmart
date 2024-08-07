import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
// import { Gabarito } from "next/font/google";
import Navbar from "./_component/Navbar/Navbar";
import {Lato } from 'next/font/google';
// const gabarito = Gabarito({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-gabarito",
// });

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300','900'],
  display: 'swap',
  variable:'--lato-font'
});
export const metadata = {
  title: "Wesmart For Technology",
  description: "Wesmart Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      {/* <link rel="icon" type="icon" href="./favicon.png"/> */}
      <body className={lato.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
