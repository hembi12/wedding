"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  {
    src: "/images/story1.webp",
    caption: "Nos gusta viajar juntos 🌲",
  },
  {
    src: "/images/story2.webp",
    caption: "Primer viaje juntos a la playa 🏖️",
  },
  {
    src: "/images/story3.webp",
    caption: "¡La propuesta de matrimonio! 💍",
  },
  {
    src: "/images/story4.webp",
    caption: "Nuestro viaje a Colombia 🇨🇴",
  },
  {
    src: "/images/story5.webp",
    caption: "Un día más en nuestra vida juntos ☺️",
  },
];

function CustomNextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-[#5c3a21] p-2 rounded-full shadow-md hover:bg-white transition"
      aria-label="Siguiente imagen"
    >
      ❯
    </button>
  );
}

function CustomPrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-[#5c3a21] p-2 rounded-full shadow-md hover:bg-white transition"
      aria-label="Imagen anterior"
    >
      ❮
    </button>
  );
}

export default function LoveStoryGallerySection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    cssEase: "ease-in-out",
    fade: true,
  };

  return (
    <motion.section
      id="love-story"
      aria-labelledby="love-story-title"
      className="px-4 sm:px-6 md:px-12 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2
        id="love-story-title"
        className="text-4xl sm:text-5xl md:text-5xl font-bold font-titles text-[#4a2f1a] leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Nuestra Historia de Amor
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-[#6F5129] font-text mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Momentos que nos marcaron, historias que nos unieron.
      </motion.p>

      <motion.div
        className="mx-auto mt-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-2xl overflow-hidden ring-2 ring-[#B18A50] aspect-square shadow-md hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Slider {...settings}>
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative aspect-square">
              <Image
                src={img.src}
                alt={`Foto ${idx + 1}: ${img.caption}`}
                fill
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm text-[#5c3a21] font-semibold text-sm sm:text-base p-2">
                {img.caption}
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
}
