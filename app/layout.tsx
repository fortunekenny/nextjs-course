import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500']
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="winter" lang="en">
      <GoogleAnalyticsScript/>
      <body className={roboto.className}>
      <AuthProvider>
        <NavBar/>
        <main className="p-5">
          {children}
        </main>
      </AuthProvider>
      </body>
    </html>
  );
}
