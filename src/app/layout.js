import { Playfair_Display, Lora } from "next/font/google";
import Script from "next/script";
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
  return (
    <html lang="es" className={`${playfair.variable} ${lora.variable}`}>
      <head>
        {/* Viewport y tema */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        {/* Favicons para navegadores modernos */}
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
        {/* Carga optimizada del script de Google Maps */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker`}
          strategy="afterInteractive"
          async
        />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
