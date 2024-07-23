"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [dropToggle, setDropToggle] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div className="relative z-40 lg:top-0">
      <header className="flex w-full justify-between items-start gap-10 lg:pl-4 lg:py-4">
        <div className="flex pl-2 font-extrabold  ">
          <Link href="/">
            <Image
              className="object-cover min-w-[10rem]"
              src="/assets/tsf-logo.png"
              alt="tsf logo"
              width={300}
              height={50}
            />
          </Link>
        </div>
        <nav className="hidden lg:flex p-7 relative gap-5 text-[1.2rem] opacity-80 font-bold tracking-[1px] ">
          <Link
            href="/"
            className="relative px-4 pb-2 text-gray-800 after:content-[''] after:bg-[#153448]  after:h-[4px] after:w-[0%]  after:left-3 after:bottom-1 after:rounded-xl after:absolute  after:duration-100 after:ease-in hover:scale-105 after:hover:w-[90px]"
          >
            Acceuil
          </Link>
          <div className="relative inline-block group transition-all ease-in-out delay-150 duration-300">
            <button className="px-4 pb-2 text-gray-800 after:content-[''] after:bg-[#153448]  after:h-[4px] after:w-[0%]  after:left-3 after:bottom-1 after:rounded-xl after:absolute  after:duration-100 after:ease-in hover:scale-105 after:hover:w-[150px]">
              TSF foundation
            </button>
            <div className="hidden group-hover:block hover:transition-all ease-in-out delay-150 duration-300 absolute min-w-[278px] z-10 pb-4 bg-white rounded-lg shadow-lg">
              {subHeaderLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-[#948979] hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <FontAwesomeIcon
              className="hover:cursor-pointer animate-bounce relative -left-2"
              icon={faCaretDown}
              size="1x"
            />
          </div>
          <Link
            href="/contact"
            className=" relative px-4 pb-2 text-gray-800 after:content-[''] after:bg-[#153448] after:h-[4px] after:w-[0%]  after:left-3 after:bottom-1 after:rounded-xl after:absolute  after:duration-100 after:ease-in hover:scale-105 after:hover:w-[90px]"
          >
            Contact
          </Link>
          {/* <div className="flex bg-red-900 xl:ml-48 justify-center items-center pt-2 text-white rounded-lg">
            <Link
              href="/login"
              className=" relative px-4 pb-2 after:content-[''] after:bg-red-900  after:h-[4px] after:w-[0%]  after:left-3 after:bottom-1 after:rounded-xl after:absolute  after:duration-100 after:ease-in hover:scale-105 after:hover:w-[90px]"
            >
              SE CONNECTER
            </Link>
          </div> */}
        </nav>

        <div className="lg:hidden flex w-full justify-end pr-5 ">
          {toggle ? (
            <FontAwesomeIcon
              className="hover:cursor-pointer relative z-50 top-5"
              icon={faClose}
              color="#black"
              size="2x"
              onClick={() => {
                setToggle(false), toggleMenu(), setAnimateMenu(!animateMenu);
              }}
            />
          ) : (
            <FontAwesomeIcon
              className="hover:cursor-pointer opacity-80 relative top-5"
              icon={faBars}
              color="#black"
              size="2x"
              onClick={() => {
                setToggle(true), toggleMenu(), setAnimateMenu(!animateMenu);
              }}
            />
          )}
          {toggle && (
           <div
           ref={menuRef}
           className={`bg-slate-700 bg-opacity-50 pt-10 md:pt-0 absolute w-screen h-screen top-0 pl-9 md:pl-0 right-0 z-40 flex justify-around items-center backdrop-blur-xl 
            ${toggle ? "animate-open-toggle-menu" : "animate-close-toggle-menu"}`
           }>
              <div className="flex flex-col z-10 gap-4 md:gap-10 text-white">
                <div className="text-2xl py-3 pr-14 pt-10 font-extrabold drop-shadow-lg">
                  TRINATIONAL SCIENTIFIQUE FOUNDATION
                </div>
                <Link
                  href="/"
                  className="font-mono font-bold text-xl hover:text-anchor"
                  onClick={() => {
                    setToggle(false), toggleMenu();
                  }}
                >
                  Acceuil
                </Link>
                <div
                  className="relative z-10 font-mono font-bold text-xl hover:text-anchor hover:cursor-pointer"
                  onClick={() => setDropToggle(!dropToggle)}
                >
                  TSF foundation
                  {dropToggle ? (
                    <FontAwesomeIcon
                      className="hover:cursor-pointer animate-bounce relative left-2"
                      icon={faCaretUp}
                      size="1x"
                      onClick={() => setDropToggle(false)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="hover:cursor-pointer animate-bounce relative left-2"
                      icon={faCaretDown}
                      size="1x"
                      onClick={() => setDropToggle(true)}
                    />
                  )}
                </div>
                {dropToggle && (
                  <div className="relative w-fit bg-white bg-opacity-30 rounded-lg p-2 md:p-6 flex flex-col">
                    {subHeaderLinks.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="hover:text-anchor p-3"
                        onClick={() => {
                          setToggle(false), toggleMenu();
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/contact"
                  className="font-mono font-bold text-xl hover:text-anchor"
                  onClick={() => {
                    setToggle(false), toggleMenu();
                  }}
                >
                  Contact
                </Link>
                {/* <div className="flex w-3/4 bg-anchor  justify-center items-center py-2 text-darkerBg rounded-lg">
                  <Link
                    href="/login"
                    className=" relative px-4 after:duration-100 after:ease-in hover:scale-105 after:hover:w-[90px]"
                    onClick={() => {
                      setToggle(false), toggleMenu();
                    }}
                  >
                    SE CONNECTER
                  </Link>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

const subHeaderLinks = [
  {
    name: "Qui sommes Nous?",
    href: "/tsf/aboutus",
  },
  // {
  //   name: "Organisation",
  //   href: "/tsf/organisation",
  // },
  {
    name: "Gouvernance",
    href: "/tsf/gouvernance",
  },
  {
    name: "Nos actualités",
    href: "/tsf/news",
  },
];

const headerLinks = [
  {
    name: "Acceuil",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
