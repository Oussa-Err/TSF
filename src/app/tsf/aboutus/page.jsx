import Image from "next/image";

const Qui = () => {
  return (
    <>
      <div className="h-28 bg-titlesBg drop-shadow-2xl relative w-screen  md:w-4/5 top-4 sm:-left-16  md:-left-24 lg:-left-32 flex items-center justify-center">
        <h1 className="text-zinc-700 md:text-center font-extrabold text-[2rem]    md:text-[3rem] lg:text-[4rem]">
          Qui somme nous?
        </h1>
      </div>
      <div className="flex flex-col gap-8 mt-32">
        <div className="flex flex-col-reverse xl:flex-row gap-4  justify-center items-center">
          <Image
            className="flex-1 md:w-4/5 border-white border-4"
            src="/assets/membre-tsf.jpeg"
            alt="Men"
            width={500}
            height={500}
          />
          <div className="flex-1 p-8 pt-0">
            <h1 className="text-[2rem] font-extrabold py-4">
              Au cœur de sa mission
            </h1>
            <div className="h-2 bg-yellow-400 rounded-lg mb-4"></div>
            <p>
              La Fondation TSF œuvre pour l'excellence dans tous les domaines de
              la science et de la technologie. Initialement fondée par le Groupe
              Ponts Afrique des ingénieurs des Ponts & Chaussées du Maroc et
              d'Afrique, elle s'est rapidement élargie pour inclure toutes les
              Grandes Écoles ParisTech, en donnant naissance à la S.M.E
              Foundation, une initiative dédiée aux Scientifiques Marocains à
              l'Étranger. Grâce à une mobilisation réussie de trois groupes
              d'envergure - les États-Unis, le Canada et la France - est née la
              Trinational Science Foundation, ou TSF.
            </p>
          </div>
        </div>

        <div className="flex bg-darkerBg flex-col md:my-10 md:py-14 relative sm:-right-16 md:-right-24 lg:-right-[8rem] lg:w-4/5 self-end  text-white font-sans font-light justify-center items-center md:items-start md:pl-8 shadow-2xl">
          <div>
            <h1 className="text-[2rem] text-center font-extrabold pt-4">
              Notre Engagement
            </h1>
            <div className="h-1 bg-titlesBg  rounded-lg mb-4"></div>
          </div>
          <p className="sm:text-center md:text-justify py-4 px-4">
            Nous sommes les gardiens d'une vision audacieuse : celle d'une
            société innovante et durable. Des innovations qui transcendent
            toutes les facettes de l'activité humaine, des sciences
            fondamentales à la technologie de pointe, en passant par les
            sciences sociales. Nous croyons en l'importance cruciale de
            construire une ville à la fois connectée et accessible, où
            l'expertise s'associe à la responsabilité.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row justify-center items-center">
          <div className="flex-1 p-8 pr-9">
            <h1 className="text-[2rem] font-extrabold py-4">
              Notre Expansion et Impact
            </h1>
            <div className="h-2 bg-yellow-400 rounded-lg mb-4"></div>
            <p className="pb-4">
              TSF devient le lien inestimable entre la diaspora scientifique
              marocaine et le développement progressif du pays. Cette fondation
              est bien plus qu'une simple entité ; c'est une passerelle entre la
              connaissance et l'action, entre l'expertise et le progrès. Les
              projets, collaborations et initiatives portés par TSF témoignent
              d'une ambition collective pour élever le potentiel du Maroc et de
              l'Afrique sur la scène internationale.
            </p>
          </div>
          <Image
            className="flex-1 md:w-4/5 border-white border-4"
            src="/assets/alaoui-reunion.jpeg"
            alt="Men"
            width={500}
            height={400}
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-4 ">
          <div className="md:w-2/4 relative bottom-0 bg-white p-8 pt-4 md:rounded-lg">
            <h1 className="text-[1.5rem] md:text-[2rem] text-center font-extrabold pt-4">
              Notre Vision pour l'Avenir
            </h1>
            <div className="h-1 bg-orange-500 rounded-lg mb-4"></div>
            <p className="px-2 md:p-0 font-serif font-bold md:text-center pt-4">
              Au sein de la Fondation TSF, nos membres et partenaires partagent
              une vision commune. Nous aspirons à contribuer à la croissance
              économique, sociale et technologique du Maroc, tout en laissant
              une empreinte positive sur le continent africain dans son
              ensemble. Notre dévouement à l'innovation, à la recherche, à
              l'éducation et à l'impact positif transcende les barrières
              géographiques et disciplinaires. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qui;
