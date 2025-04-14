"use client";

import { useState, useEffect } from "react";
import {
  Home,
  Heart,
  MapPin,
  Shirt,
  Gift,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

const links = [
  { label: "Inicio", href: "#welcome-title", icon: <Home size={20} /> },
  { label: "Historia", href: "#love-story", icon: <Heart size={20} /> },
  {
    label: "Ubicación",
    href: "#date-location-title",
    icon: <MapPin size={20} />,
  },
  { label: "Vestimenta", href: "#dress-code-title", icon: <Shirt size={20} /> },
  { label: "Regalos", href: "#gifts-title", icon: <Gift size={20} /> },
  { label: "RSVP", href: "#rsvp-title", icon: <CheckCircle size={20} /> },
  { label: "FAQ", href: "#faq-title", icon: <HelpCircle size={20} /> },
];

export default function DockNavbar() {
  const [activeSection, setActiveSection] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);
  const [hasFadedIn, setHasFadedIn] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 100;

          if (window.scrollY > 0 && !showNavbar) {
            setShowNavbar(true);
            setTimeout(() => setHasFadedIn(true), 100); // Delay para que el fade se note
          }

          for (let i = links.length - 1; i >= 0; i--) {
            const section = document.querySelector(links[i].href);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(links[i].href);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNavbar]);

  if (!showNavbar) return null;

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100%-2rem)] sm:max-w-sm md:max-w-md lg:max-w-md bg-white/80 backdrop-blur-md border border-[#B18A50] rounded-full shadow-lg px-3 sm:px-4 py-2 flex justify-center gap-2 sm:gap-3 md:gap-5 transition-opacity duration-700 ease-out ${
        hasFadedIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {links.map(({ label, href, icon }) => (
        <div key={label} className="relative group">
          <a
            href={href}
            aria-label={label}
            className={`flex flex-col items-center justify-center transition-all duration-300 ${
              activeSection === href
                ? "scale-125 text-[#4a2f1a] drop-shadow-[0_0_8px_rgba(74,47,26,0.6)]"
                : "text-[#6F5129] hover:scale-110"
            }`}
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
              {icon}
              {activeSection === href && (
                <span className="absolute -bottom-0 w-1 h-1 rounded-full bg-[#8F6B36]" />
              )}
            </div>
          </a>
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#6F5129] text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
            {label}
          </div>
        </div>
      ))}
    </nav>
  );
}
