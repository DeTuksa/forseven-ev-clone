"use client";


import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CraftingForever() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    const section = document.getElementById("crafting-forever");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      id="crafting-forever"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white to-gray-100"
    >
      <motion.div
        className="absolute top-20 w-px bg-gray-300"
        initial={{ height: "40px", opacity: 0.5 }}
        animate={{
          height: inView ? "120px" : "40px",
          opacity: inView ? 1 : 0.5,
          backgroundColor: inView ? "#333" : "#ccc",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-light text-gray-700">
          Crafting forever
        </h2>
        <p className="mt-4 text-gray-500 max-w-lg mx-auto">
          Creating exceptional cars that blend British elegance
          with ferocious intelligence to forge a new legacy, forever.
        </p>
        <a
          href="#"
          className="inline-block mt-6 text-sm text-gray-600 border-b border-gray-600 tracking-wide"
        >
          DISCOVER MORE
        </a>
      </div>
    </div>
  );
}
