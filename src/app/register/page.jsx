"use client";
import axios from "axios";
import Link from "next/link.js";
import React, { useState } from "react";

export default function Register() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    telephone: "",
    password: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });

      setInputs({
        email: "",
        telephone: "",
        name: "",
        password: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    axios({
      method: "POST",
      url: "http://localhost:8080",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "Merci, votre message a été soumis.");
      })

      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div>
      <main>
        <div className="fixed inset-0 bg-slate-600 z-50 overflow-y-hidden">
          <form
            onSubmit={handleOnSubmit}
            className="mt-5 m-auto grid gap-y-4 px-4 max-w-3xl bg-white rounded-xl items-center p-5 justify-center"
          >
            <div>Bonjour</div>
            <label
              htmlFor="name"
              className="text-gray-600 text-xs font-semibold uppercase"
            >
              Nom*
            </label>
            <input
              id="name"
              type="name"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.name}
              className="border border-gray-300 rounded px-2 py-1 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto"
            />

            <label
              htmlFor="tel"
              className="text-gray-600 text-xs font-semibold uppercase"
            >
              Téléphone*
            </label>
            <input
              id="telephone"
              type="tel"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.telephone}
              className="border border-gray-300 rounded px-2 py-1 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto"
            />

            <label
              htmlFor="email"
              className="text-gray-600 text-xs font-semibold uppercase"
            >
              Email*
            </label>
            <input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
              className="border border-gray-300 rounded py-1 px-2 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto"
            />

            <label
              htmlFor="password"
              className="text-gray-600 text-xs font-semibold uppercase"
            >
              Mot de passe*
            </label>
            <input
              id="password"
              name="password"
              onChange={handleOnChange}
              required
              value={inputs.password}
              className="border border-gray-300 rounded px-2 py-1 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto"
            />

            <button
              type="submit"
              disabled={status.submitting}
              className={`${
                status.submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              } text-white px-4 py-2 rounded font-semibold transition-all duration-200`}
            >
              {!status.submitting
                ? !status.submitted
                  ? "Sign up"
                  : "Submitted"
                : "Signing up..."}
            </button>
            <Link className="px-4 py-2 rounded m-auto cursor-pointer font-semibold  text-white bg-blue-400 hover:bg-slate-600 transition-all duration-200"
            href={'/'}> retoutner à la page d'acceuil</Link>
          </form>
        </div>
      </main>
    </div>
  );
}

Register.getLayout = function PageLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
