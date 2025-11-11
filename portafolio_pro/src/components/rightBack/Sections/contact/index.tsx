"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import SlideUpSection from "@/components/Util";
import emailjs from "@emailjs/browser";
import ShinyText from "@/components/Ui/RBits/ShinyText";
import AnimatedContent from "@/components/Ui/RBits/AnimatedContent";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    emailjs
      .send(
        "service_t97ts06",
        "template_sdl3951",
        formData,
        "wbVplkvciII0N5QT_"
      )
      .then(() => {
        setAlert({
          show: true,
          type: "success",
          message: "Mensaje enviado correctamente! 🤍",
        });
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        setAlert({
          show: true,
          type: "error",
          message: "Hubo un error. Intenta de nuevo. ✖",
        });

        setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
      });
  };

  return (
    <div className="mb-60 mt-14 sm:mt-8 xl:mt-10" id="contact">
      <div className="w-full max-w-4xl">
        <div className="sm:mt-6 xl:mt-40 mb-4">
           <SlideUpSection>
        <AnimatedContent blur duration={800} easing="ease-out" initialOpacity={0}>
          <ShinyText
            text="⋆ Contáctame"
            disabled={false}
            speed={3}
            className="shiny-button text-base sm:text-lg mb-6"
          />
        </AnimatedContent>
      </SlideUpSection>
        </div>

        <SlideUpSection delay={200}>
          <h4 className="text-2xl sm:text-3xl lg:text-3xl font-semibold mb-12">
            ¡Hagamos algo increíble juntos!
          </h4>
        </SlideUpSection>

        {/* Alerta */}
        {alert.show && (
          <div
            className={`mb-6 px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
              alert.type === "success"
                ? "bg-violet-400 text-white"
                : "bg-fuchsia-300 text-white"
            }`}
          >
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideUpSection delay={400}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu Nombre"
                required
                className="w-full bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-purple-300"
              />
            </SlideUpSection>

            <SlideUpSection delay={600}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu Email"
                required
                className="w-full bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-purple-300"
              />
            </SlideUpSection>
          </div>

          <div className="mt-8">
            <SlideUpSection delay={800}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escríbeme tu mensaje"
                rows={4}
                required
                className="w-full bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-purple-300 resize-none"
              />
            </SlideUpSection>
          </div>

          <div className="mt-12">
            <SlideUpSection delay={100}>
              <button
                type="submit"
                className="button-profile text-gray-900 px-6 py-3 rounded-full transition duration-300 flex items-center space-x-2"
              >
                <span className="flex items-center font-medium">
                  Enviar mensaje
                  <Send size={18} className="ml-2" />
                </span>
              </button>
            </SlideUpSection>
          </div>
        </form>
      </div>
    </div>
  );
}
