import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <form className="max-w-lg mx-auto mt-8">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded mb-4" rows={5}></textarea>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
