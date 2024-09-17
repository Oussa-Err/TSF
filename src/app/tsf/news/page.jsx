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
    if (no > 0 && no <= Math.round(newsItem.length / 4) && no !== page)
      setPage(no);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sm:pr-4 ">
      <div className="h-28 bg-titlesBg drop-shadow-2xl relative w-full  md:w-4/5 top-4 sm:-left-16  md:-left-24 lg:-left-32 flex items-center justify-center">
        <h1 className="text-zinc-700 md:text-center font-extrabold text-[2rem] md:text-[3rem] lg:text-[4rem]">
          Nos actualités
        </h1>
      </div>

      <div className="my-4">
        <ul className="gap-3 py-10 flex flex-col   items-center">
          {newsItem.slice(page * 4 - 4, page * 4).map((news) => (
            <li
              key={news.id}
              className="w-full sm:w-3/4  flex flex-col gap-7 pt-4 bg-white rounded-xl  items-center justify-center"
            >
              <Link href={`/tsf/news/${news.id}`}>
                <Image
                  className="lg:px-20 bg-no-repeat w-full h-full rounded-md transition-all duration-200 hover:scale-105 hover:opacity-50 ease-in-out"
                  src={news.images[0]}
                  width={300}
                  height={50}
                  alt="f"
                />
              </Link>
              <div className="flex-1 w-full flex flex-col items-start py-4 px-3 bg-stone-300">
                <small className="text-slate-600 font-mono pb-4 lg:px-20">
                  {news.date}
                </small>
                <p className="lg:px-20 mt-5 font-bold text-blue-950 text-xl">
                  {news.title}
                </p>
                <p className="lg:px-20 my-5 text-sm font-thin text-slate-600">
                  {news.description[0].split(":")[1].slice(0, 100) + "...."}
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
          <ul className=" flex justify-center item  -space-x-px text-sm">
            <li
              className={
                page === 1
                  ? "hidden"
                  : ` cursor-pointer flex items-center justify-center px-3 h-8 ml-0 leading-tight border-gray-300 rounded-l-lg bg-[#948979]  hover:bg-gray-700 text-white`
              }
              onClick={() => {
                setPageHandler(page - 1), scrollToTop();
              }}
            >
              précédent
            </li>

            {[...Array(Math.round(newsItem.length / 4))].map((_, i) => {
              return (
                <li
                  aria-current={page}
                  className={
                    page === i + 1
                      ? `flex items-center justify-center px-3 h-8 border-gray-300 bg-[#DFD0B8] text-blue-700`
                      : " cursor-pointer flex items-center justify-center px-3 h-8 leading-tight  bg-[#948979] hover:bg-gray-700 text-white"
                  }
                  key={i}
                  onClick={() => {
                    setPageHandler(i + 1), scrollToTop();
                  }}
                >
                  {i + 1}
                </li>
              );
            })}
            <li>
              <li
                className={
                  page === Math.round(newsItem.length / 4)
                    ? "hidden"
                    : ` cursor-pointer flex items-center justify-center px-3 h-8 leading-tight bg-[#948979] hover:bg-gray-700 text-white`
                }
                onClick={() => {
                  setPageHandler(page + 1), scrollToTop();
                }}
              >
                suivant
              </li>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
