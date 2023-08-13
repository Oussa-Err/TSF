import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      <form
        action="netlify"
        method="post"
        className="p-10 grid lg:px-24 md:grid-cols-4 gap-3 md:gap-6 justify-around"
      >
        <label for="full">Nom*:</label>
        <input type="text" id="first" name="first" />
        <label for="email">Email*:</label>
        <input type="text" id="last" name="last" />
        <label for="num">Téléphone*:</label>
        <input type="text" id="last" name="last" />
        <label for="num">Objet*:</label>
        <input type="textArea" id="last" name="last" />
        <label for="last">Message*:</label>
        <input type="text" id="last" name="last" />
        <button
          type="submit"
          className="h-8 w-28 rounded-lg bg-orange-400 text-black hover:scale-105 hover:bg-opacity-80 hover:text-gray-800 justify-center"
        >
          Submit
        </button>
      </form>

      <div className="flex justify-center items-center h-14  m-28 bg-green-200">
        <FontAwesomeIcon className="px-5 text-lg hover:scale-125 hover:text-blue-800 hover:cursor-pointer" icon={faFacebook} />
        <FontAwesomeIcon className="px-5 text-lg hover:scale-125 hover:text-red-800 hover:cursor-pointer" icon={faYoutube} />
        <FontAwesomeIcon className="px-5 text-lg hover:scale-125 hover:text-blue-800 hover:cursor-pointer" icon={faLinkedin} />
      </div>
    </div>
  );
};

export default Contact;
