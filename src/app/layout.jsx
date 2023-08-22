import "./globals.css";
import { Transition } from "./component/Transition";
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

export const metadata = {
  title: "TSF FOUNDATION",
  description: "best foundation ever",
};

const poppins = Poppins({ subsets: ["devanagari"], weight: ["600"] });

export default function RootLayout({children}) {

  return (
    <html lang="fr">
      <body className="">
        <div className="lg:flex hidden h-10 bg-veryTop items-center relative z-30">
          <div className="w-screen flex justify-around ">
            <div>
              <FontAwesomeIcon className="px-1" icon={faEnvelopeOpenText} />
              <a href="mailto: Academy.sciences.TSF@gmail.com">
                Academy.sciences.TSF@gmail.com
              </a>
            </div>
            <div>
              <FontAwesomeIcon className="px-1" icon={faWhatsapp} />
              <a href="https://wa.me/33652806134?text=Bonjour,%20Je%20suis%20intéréssé%20">
                Paris: +33 6 52 80 61 34
              </a>
            </div>
            <div>
              <FontAwesomeIcon className="px-1" icon={faPhone} />
              <a href="tel:0539395140">Rabat: 05 39 39 51 40 </a>
            </div>
          </div>
          <div className="flex justify-end">
            <FontAwesomeIcon className="px-5" icon={faFacebook} />
            <FontAwesomeIcon className="px-5" icon={faYoutube} />
            <FontAwesomeIcon className="px-5" icon={faLinkedin} />
          </div>
        </div>
        <Header />

        <div
          className={`${poppins.className} pb-10 pt-10 sm:p-16 md:p-24  lg:px-32 text-gray-500 tex`}
        >
        {children}
        </div>

        <NewsLetter />
        <Footer />

        <div className="flex h-14 text-center items-center justify-center bg-slate-600">
          <small>
            Copyright &copy; 2023. All rights reserved by
            <span className="text-blue-400">TSF foundation</span>
          </small>
        </div>
      </body>
    </html>
  );
}
