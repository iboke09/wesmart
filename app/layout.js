import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

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
