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
    <div
      className="relative z-40 lg:top-0 "
    >
      <header className="flex w-full items-start justify-between lg:pl-4 lg:py-4">
        <div className="flex  pl-2 font-extrabold  ">
          <Link href="/">
            <Image
              className="object-cover flex-1"
              src="/assets/tsf-logo.png"
              alt="adf logo"
              width={300}
              height={50}
            />
          </Link>
        </div>
        <nav className="hidden lg:flex relative w-1/2 gap-3 justify-around text-[1.2rem] opacity-40 font-bold">
          <Link
            href="/"
            className="hover:text-violet-950 transition-colors duration-300 ease-in-out"
          >
            Acceuil
          </Link>
          {dropToggle ? (
            <Link
              href=""
              className="hover:text-violet-950 z-41 relative transition-colors duration-300 ease-in-out"
              onClick={() => {
                setDropToggle(false), toggleMenu();
              }}
            >
              TSF foundation
            </Link>
          ) : (
            <Link
              href=""
              className="hover:text-violet-950 z-10 relative transition-colors duration-300 ease-in-out"
              onClick={() => {
                setDropToggle(true), toggleMenu();
              }}
            >
              TSF foundation
              {dropToggle ? (
                <FontAwesomeIcon
                  className="hover:cursor-pointer animate-bounce  relative left-2"
                  icon={faCaretUp}
                  size="1x"
                  onClick={() => {
                    setDropToggle(false), toggleMenu();
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  className="hover:cursor-pointer animate-bounce relative left-2"
                  icon={faCaretDown}
                  size="1x"
                  onClick={() => {
                    setDropToggle(true), toggleMenu();
                  }}
                />
              )}
            </Link>
          )}
          {dropToggle && (
            <>
              <div
                className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 font-thin"
                onClick={() => {
                  setDropToggle(false), toggleMenu(true);
                }}
                ></div>
              <div
                className={`menu ${
                  isMenuOpen ? "active" : ""
                } lg:absolute top-10 drop-shadow-lg bg-gray-200 rounded-lg p-6 flex flex-col transition-all duration-300 transform ${
                  dropToggle ? "scale-y-100" : "scale-y-0"
                } origin-top`}
              >
                <Link
                  href="/tsf/aboutus"
                  className="hover:text-violet-950 text-gray-800 font-serif relative p-3"
                  onClick={() => {
                    setDropToggle(false), toggleMenu(true);
                  }}
                >
                  Qui sommes Nous?
                </Link>
                <Link
                  href="/tsf/organisation"
                  className="hover:text-violet-950 text-gray-800 font-serif relative p-3"
                  onClick={() => {
                    setDropToggle(false), toggleMenu(true);
                  }}
                >
                  Organisation
                </Link>
                <Link
                  href="/tsf/gouvernance"
                  className="hover:text-violet-950  text-gray-800 font-serif relative p-3"
                  onClick={() => {
                    setDropToggle(false), toggleMenu(true);
                  }}
                >
                  Gouvernance
                </Link>
                <Link
                  href={`/tsf/news`}
                  className="hover:text-violet-950  text-gray-800 font-serif relative p-3"
                  onClick={() => {
                    setDropToggle(false), toggleMenu(true);
                  }}
                >
                  Nos actualités
                </Link>
              </div>
            </>
          )}
          <Link href="/contact" className="hover:text-violet-950">
            Contact
          </Link>
        </nav>
        <div className="lg:hidden flex w-1/2 justify-end pr-5 transition-all ease-in-out duration-150">
          {toggle ? (
            <FontAwesomeIcon
              className="hover:cursor-pointer z-50 "
              icon={faClose}
              color="#black"
              size="2x"
              onClick={() =>  {setToggle(false), toggleMenu();}}
            />
          ) : (
            <FontAwesomeIcon
              className="hover:cursor-pointer opacity-25 relative top-10"
              icon={faBars}
              color="#black"
              size="2x"
              onClick={() =>  {setToggle(true), toggleMenu();}}

            />
          )}
          {toggle && (
            <div className="bg-slate-700 bg-opacity-50  absolute w-screen h-screen top-0 items-center pl-9 md:pl-0 right-0 z-49 flex md:justify-around md:items-center backdrop-blur-md">
              <div className="flex flex-col text-slate-900 z-48 gap-10   ">
                <Link
                  href="/"
                  className="text-2xl py-3 pr-14 pt-10 font-extrabold text-gray-900"
                >
                  TRINATIONAL SCIENTIFIQUE FOUNDATION
                </Link>
                <Link
                  href="/"
                  className="font-mono font-semibold text-xl hover:text-anchor"
                  onClick={() => {setToggle(false), toggleMenu()}}
                >
                  Acceuil
                </Link>
                <div
                  className="relative z-10 font-mono font-semibold text-xl hover:text-anchor hover:cursor-pointer"
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
                    <div className="relative bg-white bg-opacity-30 rounded-lg p-2 md:p-6 flex flex-col transition-all ease-in-out duration-200">
                      <Link
                        href="/tsf/aboutus"
                        className="hover:text-anchor p-3"
                        onClick={() => {setToggle(false), toggleMenu()}}
                      >
                        Qui sommes Nous?
                      </Link>
                      <Link
                        href="/tsf/organisation"
                        className="hover:text-anchor p-3"
                        onClick={() => {setToggle(false), toggleMenu()}}
                      >
                        Organisation
                      </Link>
                      <Link
                        href="/tsf/gouvernance"
                        className="hover:text-anchor p-3"
                        onClick={() => {setToggle(false), toggleMenu()}}
                      >
                        Gouvernance
                      </Link>
                      <Link
                        href={`/tsf/news`}
                        className="hover:text-anchor p-3"
                        onClick={() => {setToggle(false), toggleMenu()}}
                      >
                        Nos actualités
                      </Link>
                    </div>
                  </>
                )}
                <Link
                  href="/contact"
                  className="font-mono font-semibold text-xl hover:text-anchor"
                  onClick={() => {setToggle(false), toggleMenu()}}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
