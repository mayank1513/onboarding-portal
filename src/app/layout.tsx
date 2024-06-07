import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { LoaderContainer } from "react18-loaders";
import { Bars1 } from "react18-loaders/dist/server/bars/bars1";
import "react18-loaders/dist/client/index.css";
import "react18-loaders/dist/server/bars/bars1/index.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        {children}
        <LoaderContainer>
          <Bars1 color="red" />
        </LoaderContainer>
      </body>
    </html>
  );
}
