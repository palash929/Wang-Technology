import React from "react";
import "tailwindcss";

export default function Home() {
  // scroll handlers
  const handleGetStarted = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="bg-slate-50 py-24 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/slider-3.jpeg')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white underline">
          Wang Technology Solutions
        </h2>

        <p className="mt-4 text-white max-w-2xl mx-auto text-xl text-left md:text-justify font-bold">
          Welcome to Wang Technology your premier source for Geotechnical and Structural solutions. At Wang Technology, our mission is to support you in meeting the requirements of your project. We are committed to meeting the individual needs of each client and to delivering the highest quality of service. <br /> <br />

          For more than 35 years, Wang Technology has continually advanced the industry by delivering stellar performances on critical high-profile projects; thus setting the standard for Geotechnical and Structural Instrumentation in the Greater New York Metropolitan area. <br /> <br />

          We help businesses transform digitally by delivering reliable,
          scalable and modern software solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button onClick={handleGetStarted}
          className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 active:bg-blue-700">
            Get Started
          </button>
          <button onClick={handleLearnMore}
          className="px-6 py-2 cursor-pointer border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 active:bg-blue-50">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

