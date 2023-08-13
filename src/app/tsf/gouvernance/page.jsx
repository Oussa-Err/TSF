import Image from "next/image";
import { GouvernanceSlide } from "../../component/governanceSwiper.jsx";

export default function Gouvernance() {
  return (
    <main>
      <div className="h-28 bg-titlesBg drop-shadow-2xl relative w-screen  md:w-4/5 top-4 sm:-left-16  md:-left-24 lg:-left-32 flex items-center justify-center">
        <h1 className="text-zinc-700 md:text-center font-extrabold text-[2rem] md:text-[3rem] lg:text-[4rem]">
          Gouvernance
        </h1>
      </div>

      <div className="flex flex-col gap-8 mt-32">
        <div className="flex flex-col-reverse xl:flex-row gap-4  justify-center items-center">
          <Image
            className="flex-1 md:w-4/5 border-white border-4"
            src="/assets/benmoussa.jpeg"
            alt="Men"
            width={500}
            height={500}
          />
          <div className="flex-1 p-2 md:px-8 pb-8">
            <h1 className="text-[2rem] font-extrabold py-4">
              Excellence Éducative par Diaspora Marocaine
            </h1>
            <div className="h-2 bg-yellow-400 rounded-lg mb-4"></div>
            <p>
              Dans le cadre d'une entente conclue avec le Ministère de
              l'Éducation Nationale, les Chercheurs Marocains à l'Étranger se
              mobilisent au service de l'excellence éducative, avec une
              attention particulière portée aux élèves du système public
              national au Maroc et en Afrique.
            </p>
          </div>
        </div>

        <div className="py-10">
          <GouvernanceSlide />
        </div>

        <div className="flex flex-col-reverse xl:flex-row gap-4  justify-center items-center">
          <div className="flex-1 p-8">
            <div className="h-2 bg-darkerBg rounded-lg mb-4"></div>
            <p>
              Le Directoire de TSF est formé par les représentants de la stationF
              et de ParisTech. Pour le mandat 2018-2023, il est composé des
              membres suivants :
            </p>
            <ul className="list-disc flex flex-col gap-3 pt-10 pl-3 md:pl-8 items-start">
              <li>
                <p>M. Mostafa Chakir Alaoui – Président TSF</p>
              </li>
              <li>
                <p>M. Abdelkhalek EL HAMI  – Vice Président</p>
              </li>
              <li>
                <p>M. Abderrahim Hafidi – Ambassadeur TSF</p>
              </li>
            </ul>
          </div>
          <Image
            className="flex-1 md:w-4/5 border-white border-4"
            src="/assets/benmoussa.jpeg"
            alt="Men"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
