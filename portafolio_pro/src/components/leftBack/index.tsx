import Image from "next/image";
import Kitty from "@/assets/crystal.webp";
import Profile from "@/assets/profile.jpg";
import Linkedin from "@/assets/linkedin.webp";
import GitHub from "@/assets/github.webp";
import Button from "@/components/Ui/Button";
import "../../app/globals.css";

export default function LeftBack() {
  const socialLinks = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/emily-tatiana-orduz-barrera-75968b152/",
      img: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/Emilyuwu0",
      img: GitHub,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-4 xl:px-20">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-sm">
        <div className="rounded-lg p-6 backgroundSecondary radius shadow-lg">
          <div className="flex items-center mb-4">
            <Image src={Kitty} alt="Kitty" className="w-12 h-12 object-cover" />
            <h2 className="text-2xl font-bold ml-3 leading-tight">
              Emily
           
              Orduz
            </h2>
          </div>

          <div className="mb-6">
            <Image src={Profile} alt="Profile" className="w-full h-auto rounded-xl" />
          </div>

          <div className="mb-6">
            <h5 className="font-medium text-sm">Especialización:</h5>
            <h6 className="font-bold mb-4">UI/UX designer<br />Frontend developer</h6>
      {/*       <h5 className="font-medium text-sm">Localización:</h5>
            <h6 className="font-bold">Bogotá - Colombia</h6> */}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-elegant  flex items-center justify-center rounded-full"
              >
                <Image src={social.img} alt={social.name} className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div>
            <a href="#contact">
              <Button colorClass="w-full">¡Trabajemos juntos!</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
