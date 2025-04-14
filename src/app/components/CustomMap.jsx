"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const customMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#fcfaf9" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#5c3a21" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f5f0eb" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#d7c1ae" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6e4f3a" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9d5d8" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#e4d4c3" }],
  },
];

export default function CustomMap() {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        typeof window !== "undefined" &&
        window.google &&
        window.google.maps &&
        mapRef.current &&
        !mapLoaded
      ) {
        const center = { lat: 19.317058454469244, lng: -99.21233605179005 };

        const map = new window.google.maps.Map(mapRef.current, {
          center,
          zoom: 18,
          styles: customMapStyle,
          disableDefaultUI: false,
        });

        const { AdvancedMarkerElement } = window.google.maps.marker;

        const marker = new AdvancedMarkerElement({
          map,
          position: center,
          title: "Centro Cultural Pedregal",
        });        

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="font-family: sans-serif; padding: 6px 10px; max-width: 240px;">
              <h2 style="margin: 0; font-size: 14px; font-weight: bold;">Centro Cultural Pedregal</h2>
              <p style="margin: 4px 0;">Av. de Las Fuentes 557<br>Jardines del Pedregal, Álvaro Obregón</p>
              <p style="margin: 4px 0;">CDMX, 01900</p>
              <a
              href="https://maps.app.goo.gl/u7YyfPTrtAZgTypk8"
              target="_blank"
              rel="noopener"
              style="color: #3367d6; font-weight: bold;"
              >
              Cómo llegar →
              </a>
            </div>
          `,
        });

        infoWindow.open(map, marker);
        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });

        setMapLoaded(true);
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [mapLoaded]);

  return (
    <motion.div
      className="relative mx-auto mt-6 w-full max-w-md sm:max-w-lg md:max-w-3xl rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 ring-2 ring-[#B18A50]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <div
        ref={mapRef}
        className="w-full aspect-[4/3] h-auto"
      />
    </motion.div>
  );
}
