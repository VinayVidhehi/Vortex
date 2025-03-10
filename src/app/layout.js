import {
  Archivo,
  Inter,
  Quicksand,
  DM_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dm = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Vortex Media Management",
  description: "Crafted For Impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.className} dark`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
