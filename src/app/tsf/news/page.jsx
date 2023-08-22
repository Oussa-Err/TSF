"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import news from "../../../../public/data/news.json";
import Image from "next/image";

export default async function News() {
  const [newsItem, setNewsItem] = useState(news);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setNewsItem(news);
  }, []);

  const setPageHandler = (no) => {
    if (no>0 && no<=Math.round(newsItem.length/4) && no !== page)
     setPage(no)
  }


  return (
    <div className="pr-2 sm:pr-4 ">
      <div className="h-28 bg-titlesBg drop-shadow-2xl relative w-full  md:w-4/5 top-4 sm:-left-16  md:-left-24 lg:-left-32 flex items-center justify-center">
        <h1 className="text-zinc-700 md:text-center font-extrabold text-[2rem] md:text-[3rem] lg:text-[4rem]">
          Nos actualités
        </h1>
      </div>

      <div className="my-4">
        <ul className="gap-3 py-10 flex flex-col  justify-center items-center">
          {newsItem.slice(page * 4 - 4, page * 4).map((news) => (
            <li
              key={news.id}
              className="flex flex-col gap-7 pt-4 bg-white rounded-xl w-3/4  items-start justify-center"
            >
              <Link href={`/tsf/news/${news.id}`}>
                <Image
                  className="px-2 lg:px-20 bg-no-repeat w-full h-full rounded-md transition-all duration-200 hover:scale-105 hover:opacity-50 ease-in-out"
                  src={news.images[0]}
                  width={300}
                  height={50}
                  alt="f"
                />
              </Link>
              <div className="flex-1 flex flex-col items-start py-4 px-3 bg-stone-300">
                <small className="text-slate-600 font-mono pb-4 lg:px-20">
                  {news.date}
                </small>
                <p className="lg:px-20 mt-5 font-bold text-blue-950 text-xl">
                  {news.title}
                </p>
                <p className="lg:px-24 mt-10 font-mono text-slate-600">
                  {news.description.slice(0, 150) + "...."}
                </p>
                <Link href={`/tsf/news/${news.id}`}>
                  <button
                    className="lg:mx-20 mt-2 bg-btn-red text-white h-16 w-28 hover:bg-slate-600 hover:scale-105
                transition-all duration-200 ease-in-out"
                  >
                    Lire plus
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        {newsItem.length > 0 && (
          <ul className="flex gap-10 items-center justify-center">
            <div
                className={page === 1? 'hidden' : `w-10 h-8 my-auto cursor-pointer hover:bg-slate-600 hover:text-white text-center`}
                onClick={() => setPageHandler(page - 1)}
              >
                &lt;
              </div>

            {[...Array(Math.round(newsItem.length / 4))].map((_, i) => {
              return (
                <button
                  className={page === i+1 ?`flex cursor-pointer w-10 h-8 my-auto bg-anchor text-white text-center`: ''}
                  key={i}
                  onClick={() => setPageHandler(i + 1)}
                >
                  {i + 1}
                </button>
              );
            })}
            <li>
              <div
                className={page === (Math.round(newsItem.length / 4))? 'hidden' : `w-10 h-8 my-auto cursor-pointer hover:bg-slate-600 hover:text-white text-center`}
                onClick={() => setPageHandler(page + 1)}
              >
                &gt;
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
