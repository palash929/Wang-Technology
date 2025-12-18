// src/components/ProvideManu.jsx
import React from "react";

export default function Provmanu() {
  return (
    <section id="provide-manu" className="py-20 bg-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/slider-2.jpg')",
      }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h3 className="text-4xl font-semibold text-center underline">
          Product Manufacturing
        </h3>
        <p className="mt-3 text-center text-slate-800 max-w-2xl mx-auto text-lg font-bold">
          We provide a wide range of certified Personal Protective Equipment (PPE)
          and Fall Protection solutions designed to ensure safety at workplaces.
        </p>

        {/* Two-column layout */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* PPE */}
          <div className="rounded-xl p-6 bg-slate-400 transform transition duration-300 ease-in-out hover:-translate-y-2 active:-translate-y-2">
            <h4 className="text-xl font-semibold mb-4 text-blue-700 underline">
              Personal Protective Equipment (PPE)
            </h4>
            <ul className="space-y-2 text-slate-700 text-md list-disc list-inside">
              <li>Respiratory Protection</li>
              <li>Head Protection</li>
              <li>Eye Protection</li>
              <li>Ear Protection</li>
              <li>Face Protection</li>
              <li>Workwear</li>
              <li>Hand Protection</li>
              <li>Foot Protection</li>
              <li>Safety Kits</li>
            </ul>
          </div>

          {/* Fall Protection */}
          <div className="rounded-xl p-6 bg-slate-400 transform transition duration-300 ease-in-out hover:-translate-y-2 active:-translate-y-2">
            <h4 className="text-xl font-semibold mb-4 text-blue-700 underline">
              Fall Protection
            </h4>
            <ul className="space-y-2 text-slate-700 text-md list-disc list-inside">
              <li>Full Body Harnesses</li>
              <li>Connectors</li>
              <li>Lanyards</li>
              <li>Anchorages</li>
              <li>Temporary Flexible Anchorage Lines</li>
              <li>Retractable Blocks</li>
              <li>Confined Space Entry & Exit Systems</li>
              <li>Rope Access & Rescue</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
