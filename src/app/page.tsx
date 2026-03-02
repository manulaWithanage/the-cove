import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/layout/StickyCTA";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Cabanas from "@/components/sections/Cabanas";
import Gallery from "@/components/sections/Gallery";
import Experiences from "@/components/sections/Experiences";
import Testimonials from "@/components/sections/Testimonials";
import LocationFAQ from "@/components/sections/LocationFAQ";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/constants";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rikillagaskada",
      "addressCountry": "LK"
    },
    "image": `${siteConfig.url}/images/hero.jpg`,
    "priceRange": "$$"
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Highlights />
        <Cabanas />
        <Gallery />
        <Experiences />
        <Testimonials />
        <LocationFAQ />
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
