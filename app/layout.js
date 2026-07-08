import {Martel_Sans, Montserrat} from "next/font/google";
import "./globals.css";

const martel = Martel_Sans({
  variable: "--font-martel",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const monsterrat = Montserrat({
  variable: "--font-monsterrat",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: "Ryan & Anneline | Save the Date",
  description: "Save the Date for Ryan and Anneline's wedding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${martel.variable} ${monsterrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
