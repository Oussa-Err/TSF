"use client";
import React, { useState } from "react";
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Restore scrolling when the menu is closed
    }
  };

  return (
    <div className="relative z-40 lg:top-0 ">
      <header className="flex w-full items-start gap-10 lg:pl-4 lg:py-4">
        <div className="flex  pl-2 font-extrabold  ">
          <Link href="/">
            <Image
              className="object-cover min-w-[10rem]"
              src="/assets/tsf-logo.png"
              alt="adf logo"
              width={300}
              height={50}
            />
          </Link>
        </div>
        <nav className="hidden lg+:flex items-center justify-center relative gap-5 text-[1.2rem] opacity-40 font-bold tracking-[1px] ">
          <Link
            href="/"
            className="relative px-4 pb-2 text-gray-800 after:content-[''] after:bg-red-900  after:h-[4px] after:w-[0%]  after:left-3 after:bottom-1 after:rounded-xl after:absolute  after:duration-100 after:ease-in hover:scale-105 after:hover:w-[90px]"
          >
            Acceuil
          </Link>

          <div
            className="relative inline-block group transition-all ease-in-out 
          delay-150 duration-300"
          >
            <button className="px-4 pb-2 text-gray-800 after:content-[''] after:bg-red-900  after:h-[4px] after:w-[0%]  after:left-3 after:bottom-1 after:rounded-xl after:absolute  after:duration-100 after:ease-in hover:scale-105 after:hover:w-[150px]">
              TSF foundation
            </button>
            <div className="hidden group-hover:block hover:transition-all ease-in-out delay-150 duration-300 absolute min-w-[278px] z-10 pb-4 bg-white rounded-lg shadow-lg">
              <Link
                href="/tsf/aboutus"
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              >
                Qui sommes Nous?
              </Link>
              <Link
                href="/tsf/organisation"
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              >
                Organisation
              </Link>
              <Link
                href="/tsf/gouvernance"
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              >
                Gouvernance
              </Link>
              <Link
                href={`/tsf/news`}
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              >
                Nos actualités
              </Link>
            </div>
            <FontAwesomeIcon
              className="hover:cursor-pointer animate-bounce relative -left-2"
              icon={faCaretDown}
              size="1x"
            />
          </div>
          <Link
            href="/contact"
            className=" relative px-4 pb-2 text-gray-800 after:content-[''] after:bg-red-900  after:h-[4px] after:w-[0%]  after:left-3 after:bottom-1 after:rounded-xl after:absolute  after:duration-100 after:ease-in hover:scale-105 after:hover:w-[90px]"
          >
            Contact
          </Link>
          <div className="flex bg-red-900 xl:ml-48 justify-center items-center pt-2 text-white rounded-lg">
            <Link
              href="/login"
              className=" relative px-4 pb-2 after:content-[''] after:bg-red-900  after:h-[4px] after:w-[0%]  after:left-3 after:bottom-1 after:rounded-xl after:absolute  after:duration-100 after:ease-in hover:scale-105 after:hover:w-[90px]"
            >
              SE CONNECTER
            </Link>
          </div>
        </nav>

        <div className="lg+:hidden flex w-full justify-end pr-5 ">
          {toggle ? (
            <FontAwesomeIcon
              className="hover:cursor-pointer relative z-50 "
              icon={faClose}
              color="#black"
              size="2x"
              onClick={() => {
                setToggle(false), toggleMenu();
              }}
            />
          ) : (
            <FontAwesomeIcon
              className="hover:cursor-pointer opacity-25 relative top-5"
              icon={faBars}
              color="#black"
              size="2x"
              onClick={() => {
                setToggle(true), toggleMenu();
              }}
            />
          )}
          {toggle && (
            <div className="bg-slate-700 bg-opacity-50 pt-10 md:pt-0 absolute w-screen h-screen top-0 items-start pl-9 md:pl-0 right-0 z-40 flex md:justify-around md:items-center backdrop-blur-xl">
              <div className="flex flex-col text-slate-900 z-10 gap-10   ">
                <div className="text-2xl py-3 pr-14 pt-10 font-extrabold text-white drop-shadow-lg">
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
                  <>
                    <div
                      onClick={() => setDropToggle(false)}
                      className="fixed w-screen h-screen inset-0 bg-black bg-transparent"
                    ></div>
                    <div className="relative w-fit bg-white bg-opacity-30 rounded-lg p-2 md:p-6 flex flex-col transition-all ease-in-out duration-200">
                      <Link
                        href="/tsf/aboutus"
                        className="hover:text-anchor p-3"
                        onClick={() => {
                          setToggle(false), toggleMenu();
                        }}
                      >
                        Qui sommes Nous?
                      </Link>
                      <Link
                        href="/tsf/organisation"
                        className="hover:text-anchor p-3"
                        onClick={() => {
                          setToggle(false), toggleMenu();
                        }}
                      >
                        Organisation
                      </Link>
                      <Link
                        href="/tsf/gouvernance"
                        className="hover:text-anchor p-3"
                        onClick={() => {
                          setToggle(false), toggleMenu();
                        }}
                      >
                        Gouvernance
                      </Link>
                      <Link
                        href={`/tsf/news`}
                        className="hover:text-anchor p-3"
                        onClick={() => {
                          setToggle(false), toggleMenu();
                        }}
                      >
                        Nos actualités
                      </Link>
                    </div>
                  </>
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
                <div className="flex bg-red-900 justify-center items-center py-2 text-white rounded-lg">
                  <Link
                    href="/login"
                    className=" relative px-4 bg-anchor after:duration-100 after:ease-in hover:scale-105 after:hover:w-[90px]"
                  >
                    SE CONNECTER
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
