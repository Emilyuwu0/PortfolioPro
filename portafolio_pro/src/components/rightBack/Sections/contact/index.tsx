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

  const [alert, setAlert] = useState<{
    show: boolean;
    type: "success" | "error" | "";
    message: string;
  }>({ show: false, type: "", message: "" });

  const showError = (message: string) => {
    setAlert({ show: true, type: "error", message });
    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
  };

  const showSuccess = (message: string) => {
    setAlert({ show: true, type: "success", message });
    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string) => {
    const regex =
      /^[a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail|yahoo|icloud)\.[a-zA-Z]{2,}$/;

    const blocked = [
      "ejemplo@gmail.com",
      "example@gmail.com",
      "test@gmail.com",
      "correo@gmail.com",
      "fake@gmail.com",
      "nadie@yahoo.com",
    ];

    if (!regex.test(email)) return false;
    if (blocked.includes(email.toLowerCase())) return false;

    return true;
  };

  const verifyEmail = async (email: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      return data.isValid;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      showError("Ingresa un correo válido ✉️");
      return;
    }

    const isReal = await verifyEmail(formData.email);

    if (!isReal) {
      showError("El correo no existe o es temporal 🚫");
      return;
    }

    try {
      await emailjs.send(
        "service_t97ts06",
        "template_sdl3951",
        formData,
        "wbVplkvciII0N5QT_"
      );

      showSuccess("Mensaje enviado correctamente 🤍");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      showError("Hubo un error al enviar el mensaje ✖");
    }
  };

  return (
    <div>
       <SlideUpSection delay={200}>
  
    <div className="scroll-mt-44 mb-60 mt-14 sm:mt-8 xl:mt-10 border-b bg-[#060010] border border-[#271e37] rounded-[15px] justify-center items-center overflow-hidden pt-4 pb-8 px-9 gap-8" id="contact">

      <div className="w-full max-w-4xl ">
        <div className="sm:mt-6  mb-4 ">
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
          <h4 className="text-2xl sm:text-3xl lg:text-3xl font-semibold mb-4">
            ¡Hagamos algo increíble juntos!
          </h4>
        </SlideUpSection>
        <p className="text-[#a194b8e6] mb-8">  ¿Tienes una idea, proyecto o colaboración en mente?
          Cuéntame un poco sobre ti y te responderé lo antes posible.</p>
        {/* Alerta */}
        {alert.show && (
          <div
            className={`mb-6 px-4 py-3 rounded-lg text-sm transition-all duration-300 ${alert.type === "success"
              ? "bg-violet-400 text-white"
              : "bg-fuchsia-300 text-white"
              }`}
          >
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideUpSection delay={400}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu Nombre"
                required
                className="w-full  border-b bg-[#060010] border border-[#271e37] rounded-[15px] 0 p-4 text-white focus:outline-none focus:border-purple-300"
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
                className="w-full  border-b bg-[#060010] border border-[#271e37] rounded-[15px]  p-4 text-white focus:outline-none focus:border-purple-300"
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
                className="w-full  border-b bg-[#060010] border border-[#271e37] rounded-[15px] p-4 text-white focus:outline-none focus:border-purple-300 resize-none"
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
    </div> </SlideUpSection> </div>
  );
}
