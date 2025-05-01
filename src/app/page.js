import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import LoveStoryGallerySection from "./components/LoveStoryGallerySection";
import DateLocationSection from "./components/DateLocationSection";
import DressCodeSection from "./components/DressCodeSection";
import RSVPSection from "./components/RSVPSection";
import FAQSection from "./components/FAQSection";
import GiftsSection from "./components/GiftsSection";
import Footer from "./components/Footer";
import GuestMessagesSection from './components/GuestMessagesSection';  // Importando la nueva sección
import { messages } from './data/messages';  // Importando los mensajes

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-8 max-w-4xl mx-auto font-sans space-y-16">
        <WelcomeSection />
        <GuestMessagesSection messages={messages} />
        <LoveStoryGallerySection />
        <DateLocationSection />
        <DressCodeSection />
        <GiftsSection />
        <RSVPSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
