import { Inter, Titillium_Web } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";


const titillium = Titillium_Web({subsets:["latin"],weight:["200","300","400","600","700","900"]})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titillium.className} overflow-x-hidden`}>
        <main className="bg-[#F1F1F1]">
          <Nav className="z-10"/>
          {children}</main>
      </body>
    </html>
  );

}
