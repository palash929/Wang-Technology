import React from "react";
import "tailwindcss";

export default function About() {
  return (
    <section id="about" className="py-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/slider-5.jpg')",
      }}>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-4xl font-semibold underline">
            About Wang Technology
          </h3>

          <p className="mt-6 ">
            Wang is a specialized instrumentation and monitoring firm with a long history of providing high-quality services to tunneling, bridge and heavy civil construction projects heavily in the NY/NJ area and CA.  We have a dedicated focus on I&M, offering full services like installation, data acquisition, data management and reporting.  We also maintain a substantial inventory of various sensors allowing us to respond quickly and efficiently to typical construction project needs. 
          </p>

          <p className="mt-3">
            Founded in 1988, Wang Technology has grown into a trusted leader in geotechnical and structural instrumentation, providing dependable monitoring solutions for major infrastructure projects in the New York Metropolitan area. With 35 years of experience and a commitment to client success, we've supported landmark projects such as the World Trade Center Transportation Hub, East Side Access, and Second Avenue Subway. Wang Technology’s expertise and dedication ensure tailored, integrated solutions that empower clients to achieve safe, cost-effective outcomes on complex projects. 
          </p>

          <p className="mt-3 ">
            We are a certified minority-owned business (MBE/DBE).
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <ul className="space-y-3 text-slate-700">
            <li>✔ 10+ years of industry experience</li>
            <li>✔ Client-centric development</li>
            <li>✔ Scalable & secure solutions</li>
            <li>✔ Dedicated support team</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

