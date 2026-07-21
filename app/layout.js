import {Martel_Sans, Montserrat} from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

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

const title = "Ryan & Anneline | Save the Date";
const description = "Save the Date for Ryan and Anneline's wedding.";

export const metadata = {
  metadataBase: new URL("https://ryane.twodotsonamap.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    images: [{ url: "/img/savethedate-onryane.jpg", width: 3764, height: 2501 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/img/savethedate-onryane.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${martel.variable} ${monsterrat.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
