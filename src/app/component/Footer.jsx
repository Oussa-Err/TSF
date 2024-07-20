import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-around w-full bg-[#DFD0B8] ">
      <footer className="flex text-sm flex-col gap-6 text-start pb-4 sm:p-5 lg:flex-row md:py-6">
        <div className="self-center">
          <Image
            className="object-cover "
            src="/assets/tsf-logo.png"
            alt="adf logo"
            width={400}
            height={200}
          />
        </div>
        <div className="p-2 flex flex-col md:flex-row gap-10 ">
          <div className="flex flex-1 flex-col gap-3">
            <h2 className="font-extrabold text-2xl">Adresse</h2>
            <hr className="bg-black h-1" />
            <p>Rabat - 81, Avenue Allal Ben Abdellah Hassane</p>
            <p>Sefrou - 199, Av. Ibn Sina, 31000</p>
            <p>Paris - 55, Bd Vincent Auriol, 75013</p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="font-extrabold text-2xl">Horaires d’ouverture</h2>
            <hr className="bg-black h-1" />
            <p>Du lundi au vendredi: de 8h30 à 17h30</p>
            <p>samedi: de 8h30 à 12h30</p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="font-extrabold text-2xl">Contact</h2>
            <hr className="bg-black h-1" />
            <p>Rabat: +212 661-178118</p>
            <p>Paris: +33 6 52 80 61 34</p>
            <p>Academy.sciences.tsf@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
