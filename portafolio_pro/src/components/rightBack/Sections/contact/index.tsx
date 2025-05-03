export default function Contact() {
  return (
    <section className="py-6 px-4 mt-20" id="contact">
           <button className="meet-button mb-4 text-sm sm:text-base">
        <span>⋆ </span>
        Contacto
      </button>

      <h3 className="text-xl sm:text-2xl lg:text-2xl font-medium leading-tight sm:leading-tight lg:leading-tight mb-8">
        Si tienes alguna pregunta o simplemente deseas saludarme, por favor no dudes en enviarme un mensaje.
      </h3>
      <form className="flex flex-col space-y-4">
        <label className="text-xl sm:text-xl lg:text-xl font-medium" htmlFor="name">Nombre</label>
        <input type="text" id="name" className="px-4 py-2 border-2 border-gray-300 rounded-lg" />
        <label className="text-xl sm:text-2xl lg:text-2xl font-medium" htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" className="px-4 py-2 border-2 border-gray-300 rounded-lg" />
        <label className="text-xl sm:text-2xl lg:text-2xl font-medium" htmlFor="message">Mensaje</label>
        <textarea id="message" rows={5} className="px-4 py-2 border-2 border-gray-300 rounded-lg"></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Enviar</button>
      </form>
    </section>
  );
}
