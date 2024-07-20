"use client";
import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Map from "../component/Map";

export default function Contact({}) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });

      setInputs({
        name: "",
        email: "",
        message: "",
        tel: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();

    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    const response = await axios
      .post("/api/contact", inputs)
      .then((response) => {
        handleServerResponse(true, "Merci, votre message a été soumis.");
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center pt-4 sm:p-0 h-14  mx-28">
        <FontAwesomeIcon
          className="px-5 text-2xl hover:scale-125 hover:text-blue-800 hover:cursor-pointer"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          className="px-5 text-2xl hover:scale-125 hover:text-red-800 hover:cursor-pointer"
          icon={faYoutube}
        />
        <FontAwesomeIcon
          className="px-5 text-2xl hover:scale-125 hover:text-blue-800 hover:cursor-pointer"
          icon={faLinkedin}
        />
      </div>
      <div className="bg-[#3C5B6F] drop-shadow-2xl">
        <h1 className="text-3xl pb-4 text-white text-center shadow-xl font-semibold pl-4 pt-4">
          Contactez nous
        </h1>
      </div>

      <div className="bg-slate-100 md:p-10  flex flex-col lg:flex-row">
        <div className="flex-1">
          <form
            onSubmit={handleOnSubmit}
            className="grid gap-y-4 px-4 max-w-3xl pt-4"
          >
            <label
              htmlFor="tel"
              className="text-gray-600  font-semibold uppercase"
            >
              Nom et Prénom
            </label>
            <input
              id="name"
              type="name"
              name="name"
              maxLength={50}
              onChange={handleOnChange}
              autoComplete="given-name"
              required
              value={inputs.name}
              className="border border-gray-300 rounded px-2 py-1 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto"
            />
            <label
              htmlFor="tel"
              className="text-gray-600  font-semibold uppercase"
            >
              Téléphone
            </label>
            <input
              id="tel"
              type="tel"
              autoComplete="tel-national"
              name="tel"
              onChange={handleOnChange}
              required
              value={inputs.tel}
              className="border border-gray-300 rounded px-2 py-1 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto"
            />
            <label
              htmlFor="email"
              className="text-gray-600  font-semibold uppercase"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              maxLength={80}
              autoComplete="given-email"
              name="email"
              onChange={handleOnChange}
              required
              value={inputs.email}
              className="border border-gray-300 rounded py-1 px-2 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto"
            />
            <label
              htmlFor="message"
              className="text-gray-600  font-semibold uppercase"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
              className="border border-gray-300 rounded px-2 py-1 transition-all duration-100 focus:outline-none focus:border-blue-500 w-full md:w-auto"
            />
            <button
              type="submit"
              disabled={status.submitting}
              className={`${
                status.submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#948979] hover:bg-[#DFD0B8] hover:text-slate-600"
              } text-white px-4 py-2 rounded font-semibold transition-all duration-200`}
            >
              {!status.submitting
                ? !status.submitted
                  ? "Envoyer"
                  : "Submitted"
                : "Submitting..."}
            </button>
          </form>
          {status.info.error && (
            <div className="error bg-red-600 text-white text-center py-2 mt-4 max-w-3xl">
              Error: {status.info.msg}
            </div>
          )}
          {!status.info.error && status.info.msg && (
            <p className="mt-2">{status.info.msg}</p>
          )}
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-3 pt-5 px-3 md:px-0">
            <h2 className="text-2xl font-extrabold text-gray-600">Location</h2>
            <div className="bg-slate-600 rounded-md font-extrabold h-[2px] hidden sm:block"></div>
            <p>Rabat - 81, Avenue Allal Ben Abdellah Hassane</p>
            <p>Sefrou - 199, Av. Ibn Sina, 31000</p>
            <p>Paris - 55, Bd Vincent Auriol, 75013</p>
          </div>
          <div className="flex-1">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}
