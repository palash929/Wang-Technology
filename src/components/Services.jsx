import React from "react";
import "tailwindcss";

const services = [
  {
    title: "Web Development and setup industry standards",
    desc: "Modern, responsive and scalable web applications.To lead the industry in advancing geotechnical monitoring and set the industry standard for monitoring solutions that protect communities and infrastructure for generations to come.We are transparent and build trust through honest communication, ethical practices, and clear reporting at every stage of the project."
  },
  {
    title: "UI / UX Design and Innovation",
    desc: "Intuitive designs focused on user experience.To provide innovative and reliable geotechnical instrumentation and monitoring services that ensure the safety and sustainability of critical infrastructure projects.We embrace continuous improvement to provide advanced solutions for complex infrastructure challenges thru state-of-the-art systems and smart solutions"
  },
  {
    title: "Software Consulting and Quality Assurance",
    desc: "Expert guidance on architecture and technology choices.Quality is our foundation; we deliver exceptional service and reliable results with a relentless focus on accuracy and excellence.  Our clients trust our instrumentation and monitoring services to meet the highest industry standards.We listen our clients; we provide tailored solutions as a trusted partner in every project."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/slider-4.jpg')",
      }}>
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-5xl font-semibold text-center text-white underline">
          Our Services
        </h3>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-yellow-500 p-8 rounded-xl transform transition duration-300 ease-in-out hover:-translate-y-2 active:-translate-y-2"
            >
              <h4 className="text-xl font-semibold text-white underline">
                {service.title}
              </h4>
              <p className="mt-2 text-white text-md">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
