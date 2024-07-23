import "./globals.css";
// import { Transition } from "./component/Transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NewsLetter from "./component/newsLetter";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function RootLayout({ children }) {
  return (
    <html lang="fr" style={{ scrollBehavior: "smooth" }}>
      <body>
        <div className="lg:flex hidden h-10 bg-[#948979] text-white items-center relative z-30">
          <div className="w-screen flex justify-around ">
            <div>
              <FontAwesomeIcon
                className="px-1 text-slate-800 h-5"
                icon={faEnvelopeOpenText}
              />
              <a href="mailto: Academy.sciences.TSF@gmail.com">
                &nbsp; Academy.sciences.tsf@gmail.com
              </a>
            </div>
            <div>
              <FontAwesomeIcon
                className="px-1 text-green-900 h-5"
                icon={faWhatsapp}
              />
              <a href="https://wa.me/33652806134?text=Bonjour,%20Je%20suis%20intéréssé%20">
                &nbsp; +33 6 52 80 61 34
              </a>
            </div>
            <div>
              <FontAwesomeIcon
                className="px-1 h-5 text-slate-800"
                icon={faPhone}
              />
              <a href="tel:0539395140">&nbsp; 05 39 39 51 40 </a>
            </div>
          </div>
          <div className="flex items-center ">
            <FontAwesomeIcon
              className="px-5 text-xl hover:scale-125 hover:text-blue-800 hover:cursor-pointer"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="px-5 text-xl hover:scale-125 hover:text-red-800 hover:cursor-pointer"
              icon={faYoutube}
            />
            <FontAwesomeIcon
              className="px-5 text-xl hover:scale-125 hover:text-blue-800 hover:cursor-pointer"
              icon={faLinkedin}
            />
          </div>
        </div>
        <Header />
        <div
          className={`${poppins.className} pb-10 pt-4 sm:p-16 md:p-24 md:pt-5  lg:px-32 text-gray-500 tex`}
        >
          {children}
        </div>
        <NewsLetter />
        <Footer />
        <div className="flex h-8 text-center items-center justify-center text-white bg-[#3C5B6F]">
          <small>
            Copyright &copy; 2024. All rights reserved by
            <span className="text-blue-400">&nbsp;TSF foundation</span>
          </small>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://www.scientifiquesaletranger.org/"),
  title: {
    default: "TSF foundation",
    template: "%s | TSF foundation",
  },
  description:
    "Trinational Scientifique Foundation ce sont les chercheurs, les professeurs, les experts, les bâtisseurs et les entrepreneurs qui répondent aux formidables défis du Maroc et de l'Afrique et de l'Afrique",
  openGraph: {
    title: "Acceuil",
    description:
      "La Fondation TSF ce sont les chercheurs, les professeurs, les experts, les bâtisseurs et les entrepreneurs qui répondent aux formidables défis du Maroc et de l'Afrique et de l'Afrique",
    type: "website",
    local: "fr_FR",
    url: "https://www.scientifiquesaletranger.org/",
    siteName: "Trinational Scientifique Foundation",
    images: [
      {
        url: "https://www.scientifiquesaletranger.org/opengraph-image.jpeg",
        width: 800,
        height: 600,
      },
      {
        url: "https://www.scientifiquesaletranger.org/opengraph-image.jpeg",
        width: 1800,
        height: 1600,
        alt: "Trinational Scientifique Foundation avec le ministre de l'éducation national",
      },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  generator: "Next.js",
  applicationName: "Trinational Scientifique Foundation",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Fondation",
    "Scientifique",
    "Marocains",
    "l'étranger",
    "stationF",
    "ParisTech",
    "Benghali chakir alaoui",
    "sefrou",
    "école des ponts",
    "Maroc",
    "france",
    "collaboration",
    "education",
    "formation",
    "scientific cooperation",
    "international collaboration",
    "trinational scientific foundation",
  ],
  authors: [
    { name: "Alaoui chakir Moustafa" },
    { name: "Abdelkhalek EL HAMI" },
    { name: "Abderrahim Hafidi" },
  ],
  creator: "Benghali chakir alaoui",
  publisher: "StationF",
  publishedTime: "2023-01-01T00:00:00.000Z",
};
