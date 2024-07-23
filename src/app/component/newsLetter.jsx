"use client";
import { useState } from "react";
import axios from "axios";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
  });

  const handleServerResponse = (ok) => {
    if (ok) {
      setSubscribed(true);
      setStatus({
        submitted: true,
        submitting: false,
      });
    } else {
      setErrorMsg("Veuiller entrer un email valide");
      setStatus({
        submitted: false,
        submitting: false,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      submitted: false,
      submitting: true,
    });
    const response = await axios
      .post("/api/newsLetter", { email })
      .then((data) => {
        if (data.data.status === "success") {
          handleServerResponse(true);
        }
      })
      .catch((error) => {
        handleServerResponse(false);
      });
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
    setStatus({
      submitted: false,
      submitting: false,
    });
  };

  return subscribed ? (
    <div className="flex flex-col md:flex-row bg-[#40813f] p-2 gap-4 justify-around items-center text-center text-white font-extrabold">
      <h1>Merci de votre intérêt pour la Fondation TSF !</h1>
    </div>
  ) : (
    <div className="flex flex-col md:flex-row bg-[#948979] p-5 gap-4 justify-around items-center">
      <div>
        <h1 className="font-extrabold text-[1.5rem] text-white text-center">
          <span className="text-[#153448]">S'inscrire à notre newsletter</span>
          <br />
          pour rester informé des avancées et initiatives de la Fondation TSF
        </h1>
      </div>
      <form
        className="flex md:flex-row flex-col items-center gap-5"
        action="post"
        onSubmit={handleSubmit}
      >
        <input
          className="border-2 focus:outline-none"
          type="email"
          name="your-email"
          placeholder="email@domain.tld"
          value={email}
          onChange={handleOnChange}
          required
          autoComplete="given-email"
        />
        <button
          type="submit"
          disabled={status.submitting}
          className={`bg-[#DFD0B8] text-slate-600 ${
            status.submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#948979] hover:bg-[#cab593] hover:text-slate-900"
          } px-4 py-2 rounded font-semibold transition-all duration-200`}
        >
          {!status.submitting
            ? !status.submitted
              ? "Souscrire"
              : "Souscrit"
            : "Submitting..."}
        </button>
      </form>
      <div className="text-red-700">{errorMsg}</div>
    </div>
  );
};

export default NewsLetter;
