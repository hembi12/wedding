import { Playfair_Display, Lora } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Boda de Héctor y Michelle",
  description: "Sistema interno para la organización de la boda",
  icons: {
    icon: "/favicon_io/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <html lang="es" className={`${playfair.variable} ${lora.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/favicon_io/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>

      <body className="antialiased bg-white text-gray-900">
        {/* Google Maps API Script */}
        {mapsApiKey ? (
          <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&libraries=marker`}
            strategy="afterInteractive"
            async
            defer
          />
        ) : (
          <div className="bg-red-100 text-red-700 text-center p-4 font-medium">
            ⚠️ Falta la clave de Google Maps API. Agrega <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> en tu entorno.
          </div>
        )}

        {/* Contenido principal */}
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
        </div>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
