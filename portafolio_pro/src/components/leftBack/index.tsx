import Image from "next/image";
import Kitty from "@/assets/cat.png";
import Profile from "@/assets/profile.jpg";
import Linkedin from "@/assets/linkedin.png";
import Instagram from "@/assets/ig.png";
import "../../app/globals.css";

export default function LeftBack() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.linkedin.com/in/emily-tatiana-orduz-barrera-75968b152/",
      img: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://www.instagram.com/im_emi.o/",
      img: Instagram,
    },
  ];

  return (
    <div className="flex flex-col items-start justify-center h-full max-w-sm mx-auto">
      <div className="flex flex-col items-start justify-center w-full h-full">
        <div className="w-full rounded-lg p-6 backgroundSecondary radius">
          <div className="flex items-center justify-start mb-4">
            <Image src={Kitty} alt="Kitty" className="w-12 h-12" />
            <h2 className="text-2xl font-bold ml-2 leading-tight">
              Emily
              <br />
              Orduz
            </h2>
          </div>

          <div className="radius mx-auto mb-6">
            <Image src={Profile} alt="Profile" className="w-full h-auto rounded-md" />
          </div>

          <div className="text-sm">
            <h5 className="font-medium">Especialización:</h5>
            <h6 className="font-bold mb-4">UI/UX designer<br />Frontend developer</h6>
            <h5 className="font-medium">Localización:</h5>
            <h6 className="font-bold mb-4">Bogotá - Colombia</h6>
          </div>

          <div className="flex mb-6">
            {socialLinks.map((social) => (
              <a
                className="button-elegant mr-2"
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={social.img} alt={social.name} className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="mt-4">
            <button className="button-profile w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm">
              ¡Trabajemos juntos!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
