import Image from "next/image";
import Link from "next/link";
import news from "../../public/data/news.json";
import Slide from "./component/Swiper";

export default function Home({}) {
  return (
    <main className="bg-gradient-to-b from-heroBg to-white md:rounded-tr-lg md:rounded-tl-lg  overflow-hidden">
      <div className="flex flex-col">
        <div className="xl:flex-row  flex  flex-col">
          <div className="bg-[#3C5B6F] w-full flex flex-col flex-1 justify-center py-10">
            <h1 className="font-extrabold text-2xl sm:text-3xl pt-4 lg:pt-0 lg:text-4xl px-5  text-white">
              Fondation TSF: <br />
              <span className="text-white">
                Pionniers de l'Innovation et de la Collaboration Globale
              </span>
            </h1>
            <p className="p-5  text-white">
              Rejoignez-nous dans notre quête pour un Maroc plus fort grâce à la
              science et à l'expertise internationale.
            </p>
          </div>
          <Image
            className="object-cover self-center flex-1"
            src="/assets/photo-vec-ministre.jpeg"
            alt="adf logo"
            width={500}
            height={200}
          />
        </div>

        <div>
          <p className="md:text-center p-7 bg-slate-50 text-gray-700 pb-8 px-4">
            <span className="text-[#FF7F3E]">
              La Fondation des Scientifiques Marocains et à l'Etranger,
            </span>
            &nbsp; Ce sont les chercheurs, les professeurs, les experts, les
            bâtisseurs et les entrepreneurs qui répondent aux formidables défis
            du Maroc et de l'Afrique, les défis de l'Excellence Éducative et de
            l'innovation dans toutes les activités humaines, ainsi que de la
            ville durable, connectée et accessible. La Fondation TSF des
            Scientifiques Marocains à l'étranger est au service de cette
            excellence!
            <br />
            🇲🇦 🇦🇺 🇨🇦 🇫🇷 🇧🇸 🇺🇸 🇪🇺 🇧🇷 🇮🇹 🇩🇪 🇯🇵 🇨🇳 🇷🇺 🇬🇧
          </p>
          <div className="h-3 bg-[#DFD0B8]"></div>
        </div>
      </div>

      <div className="px-2 sm:px-4">
        <h1 className="text-slate-900 font-extrabold text-2xl pt-11">
          Nos actualités
        </h1>
        <div className="bg-[#153448] h-1 w-full rounded-md mt-2"> </div>
        <div className="my-4">
          <ul className="gap-5 py-10 grid grid-cols-1 md:grid-cols-2 justify-center">
            {news.map((news) => (
              <li key={news.id}>
                <Link
                  href={"/tsf/news/" + news.id}
                  className="flex flex-row gap-7 py-4 backdrop-blur-md"
                >
                  <Image
                    className="max-w-[7rem] max-h-[5rem] flex-1 rounded-md transition-all duration-200 hover:scale-105 hover:opacity-50 ease-in-out"
                    src={news.images[0]}
                    width={800}
                    height={500}
                    alt="f"
                  />
                  <div className="flex-1">
                    <p className="text-slate-600 font-mono pb-4">{news.date}</p>
                    <p className="pr-3 font-bold text-blue-950 hover:text-[#948979] transition-all duration-200 ">
                      {news.title}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Slide />
      </div>
    </main>
  );
}
