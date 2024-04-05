import { Inter, Titillium_Web } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "AceleAfrica",
  description:
    "Renewable Energy for a Sustainable World. We produce high quality and long lasting batteries. Our goal is to create a greener, cheaper source of energy for homes and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${titillium.className} overflow-x-hidden`}>
        <Nav className="z-20" />
        <main className="bg-[#F1F1F1]">{children}</main>
        {/* <Footer className="hidden"/> */}
      </body>
    </html>
  );
}
