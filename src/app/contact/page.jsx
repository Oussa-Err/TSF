"use client";
import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact({}) {
  const [status, setStatus] = useState({
    submitted: false,

    submitting: false,

    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",

    message: "",

    telephone: "",
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

        message: "",

        telephone: "",
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

      url: "https://formspree.io/[your-formspree-endpoint]",

      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,

          "Thank you, your message has been submitted."
        );
      })

      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <main>
      <div className="flex justify-center items-center h-14  m-28">
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

      <h1 className="text-xl font-semibold">Contactez nous</h1>
      <hr className="border-t border-gray-300 my-6" />

      <form onSubmit={handleOnSubmit} className='grid gap-y-4 px-4'>
        <label htmlFor="tel" className="text-gray-600 text-xs font-semibold uppercase">Téléphone</label>

        <input
          id="telephone"
          type="tel"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.telephone}
          className='border border-gray-300 rounded px-2 py-1 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto'
        />

        <label htmlFor="email" className="text-gray-600 text-xs font-semibold uppercase">Email</label>

        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          className='border border-gray-300 rounded py-1 px-2 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto'
        />

        <label htmlFor="message" className="text-gray-600 text-xs font-semibold uppercase">Message</label>

        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          className='border border-gray-300 rounded px-2 py-1 transition-all duration-200 focus:outline-none focus:border-blue-500 w-full md:w-auto'
        />

        <button type="submit" disabled={status.submitting}  className={`${
            status.submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
          } text-white px-4 py-2 rounded font-semibold transition-all duration-200`}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>

      {status.info.error && (
        <div className="error bg-red-600 text-white text-center py-2 mt-4">Error: {status.info.msg}</div>
      )}

      {!status.info.error && status.info.msg && <p className="mt-2">{status.info.msg}</p>}
    </main>
  );
}

// export default Contact;
