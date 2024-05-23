import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
})

export const metadata = {
  title: "Wesmart For Technology",
  description: "Wesmart Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel='icon' href='/favicon/favicon.ico' />
      </head>
      {/* <link rel="icon" type="icon" href="./favicon.png"/> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}


// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required


