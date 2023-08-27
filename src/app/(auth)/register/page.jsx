"use client";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
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
        // userAgent.push('/dashbord')
      })

      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div>
      <div className="bg-footerBg w-full drop-shadow-2xl">
        <h1 className="text-3xl pb-4 text-white text-center shadow-xl font-semibold pl-4 pt-4">
          Inscription
        </h1>
      </div>
      <form
        onSubmit={handleOnSubmit}
        className=" m-auto grid gap-y-2 px-4 bg-white rounded-xl items-center p-5 justify-center"
      >
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
              ? "S'inscrire"
              : "Inscrit!"
            : "Signing up..."}
        </button>
      </form>
    </div>
  );
}



export default Register