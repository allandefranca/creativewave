'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./Header";

export default function Menu() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2 && sectionTop > -section.offsetHeight / 2) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="fixed h-full w-10">
        <div className="flex flex-row w-full mt-10 p-2 rotate-90 font-thin">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className={`pr-3 rotate-180 ${activeSection === "home" ? "text-black" : "text-white"} hover:text-cyan-300`}
          >
            Home
          </a>
          <a
            href="#digitalArt"
            onClick={(e) => handleScroll(e, "digitalArt")}
            className={`pr-3 rotate-180 ${activeSection === "digitalArt" ? "text-black" : "text-white"} hover:text-cyan-300`}
          >
            DigitalArt
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleScroll(e, "gallery")}
            className={`pr-3 rotate-180 ${activeSection === "gallery" ? "text-black" : "text-white"} hover:text-cyan-300`}
          >
            Gallery
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className={`pr-3 rotate-180 ${activeSection === "about" ? "text-black" : "text-white"} hover:text-cyan-300`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className={`pr-3 rotate-180 ${activeSection === "contact" ? "text-black" : "text-white"} hover:text-cyan-300`}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
