import type { Metadata } from "next";
import localFont from "next/font/local";
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';  // Import Head từ next/head
import Header from './header/page'
import Footer from "./footer/page";


export const metadata: Metadata = {
  title: "NgonMaki Website",
  description: "Website of NgonMAKI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
