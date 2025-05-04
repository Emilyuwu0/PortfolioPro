"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import SlideUpSection from "@/components/Util";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="mb-60">
      <div className="w-full max-w-4xl">
        <div className="mt-40 mb-4">
          <SlideUpSection>
            <button className="meet-button mb-4 text-sm sm:text-base">
              <span>⋆ </span>
              Contactame
            </button>
          </SlideUpSection>{" "}
        </div>
        <SlideUpSection delay={200}>
        <h4 className=" text-2xl sm:text-3xl lg:text-3xl font-semibold leading-tight sm:leading-tight lg:leading-tight mb-12">
          ¡Hagamos algo increíble juntos!
        </h4>
        </SlideUpSection>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
        <SlideUpSection delay={400}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu Nombre"
                className="w-full bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-purple-300"
              />
                      </SlideUpSection>
            </div>

            <div>
            <SlideUpSection delay={600}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu Email"
                className="w-full bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-purple-300"
              /> </SlideUpSection>
            </div>
          </div>

          <div className="mt-8">
          <SlideUpSection delay={800}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribeme tu mensaje"
              rows={4}
              className="w-full bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-purple-300 resize-none"
            /> </SlideUpSection>
          </div>

          <div className="mt-12">
          <SlideUpSection delay={100}>
            <button
              onClick={handleSubmit}
              className="button-profile text-gray-900 px-6 py-3 rounded-full  transition duration-300 flex items-center space-x-2 "
            >
              <span className=" flex items-center font-medium ">
                Enviar mensaje
                <Send size={18} className="ml-2" />
              </span>
            </button></SlideUpSection>
          </div>

        </div>
      </div>
    </div>
  );
}
