import news from "../../../../../public/data/news.json";
import Image from "next/image";

export default async function New({ params: { id } }) {
  return (
    <>
      <div>
        <section>
          <div className=" bg-titlesBg drop-shadow-2xl relative w-full  md:w-4/5 top-4 sm:-left-16  md:-left-24 lg:-left-32 flex items-center">
            <h1 className="text-zinc-700 md:text-center font-extrabold text-[1rem] p-4 sm:p-8 md:pl-14  md:text-[1rem] lg:text-[2rem]">
              {news[id].title}
            </h1>
          </div>
          <ul
            key={id}
            className="flex flex-col justify-center md:px-4 pb-10 mt-32 md:p-0 items-center gap-4"
          >
            <li>
              <div className="image-gallery grid grid-cols-1 m-auto w-full  gap-4 items-center justify-center">
                {news[id].images.map((image, index) => (
                  <div key={index} className="">
                    <Image
                      className="border-8 border-white"
                      src={image}
                      alt={`Image ${index}`}
                      width={600}
                      height={400}
                    />
                  </div>
                ))}
              </div>
            </li>
            <li className="text-center">
              <small >{news[id].date}</small>
            </li>
            <li className="px-3 md:text-center">
              <p>{news[id].description}</p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
