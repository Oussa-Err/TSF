import Link from "next/link";
import news from "../../../../public/data/news.json";
import Image from "next/image";

export default async function News() {
  return (
    <div className="pr-2 sm:pr-4 ">
      <div className="h-28 bg-titlesBg drop-shadow-2xl relative w-screen  md:w-4/5 top-4 sm:-left-16  md:-left-24 lg:-left-32 flex items-center justify-center">
        <h1 className="text-zinc-700 md:text-center font-extrabold text-[2rem] md:text-[3rem] lg:text-[4rem]">Nos actualités</h1>
      </div>

      <div className="my-4">
        <ul className="gap-3 py-10 grid grid-cols-1 md:grid-cols-2 justify-center">
          {news.map((news) => (
            <li key={news.id} className="flex flex-col pl-2 sm:flex-row gap-7 py-4 backdrop-blur-md">
              <Link
                href={`/tsf/news/${news.id}`}                
              >
                <Image
                    className="max-w-[7rem] max-h-[5rem] flex-1 self-center rounded-md transition-all duration-200 hover:scale-105 hover:opacity-50 ease-in-out"
                    src={news.images[0]}
                    width={700}
                    height={100}
                    alt="f"
                  />
              </Link>
              <div className="flex-1">
                <p className="text-slate-600 font-mono pb-4">{news.date}</p>
                <p className="pr-3 font-bold text-blue-950 hover:text-red-500 transition-all duration-200 ">
                  {news.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}