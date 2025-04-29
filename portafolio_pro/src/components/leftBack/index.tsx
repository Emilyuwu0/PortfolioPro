import Image from "next/image";
import Kitty from "@/assets/cat.png";
import Profile from "@/assets/profile.jpg";
import "../../app/globals.css";
export default function LeftBack() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.linkedin.com/in/emily-tatiana-orduz-barrera-75968b152/",
      icon: "../../assets/linkedin.png",
    },
    { name: "Twitter", url: "https://www.instagram.com/im_emi.o/", icon: "../../assets/ig.png" },
  ];
  return (
    <div className="flex flex-col items-start justify-center h-full  p-6 ">
      <div className="flex flex-col items-start justify-center w-full h-full">
        <div className="w-full h-full  rounded-lg p-10 backgroundSecondary radius">
          <div className="flex items-center justify-start mb-4 ">
            <Image src={Kitty} alt="Kitty" className="w-20 h-20" />
            <h2 className="text-4xl font-bold">
              Emily
              <br />
              Orduz
            </h2>
          </div>
          <div className="radius m-auto mb-10">
            <Image
              src={Profile}
              alt="Kitty"
              className="w-full h-full radius "
            />
          </div>
          <div>
            <h5 className="text-sm">Especialización:</h5>
            <h6 className="font-bold text-lg mb-8">
              UI/UX designer <br />
              Frontend developer
            </h6>
            <h5 className="text-sm">Localización:</h5>
            <h6 className="font-bold text-lg mb-8">Bogotá - Colombia</h6>
          </div>
          <div>

              <div className="flex">
                {socialLinks.map((social) => (
                  <a
                    className="button-elegant "
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-5 h-5"
                    />
                  </a>
                ))}
            
            </div>
          </div>
          {/*   <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 p-4 ">
            <div>
              <Image
                src={Kitty}
                alt="Kitty"
 
                className="m-auto max-w-full h-auto"
              />
            </div>
            <div>Emily Orduz</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
