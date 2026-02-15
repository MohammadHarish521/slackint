import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intelligence from "@/components/Intelligence";
import MobileApp from "@/components/MobileApp";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import ScrollObserver from "@/components/ScrollObserver";
import Testimonials from "@/components/Testimonials";
import AuraBackground from "@/components/ui/AuraBackground";

import TweetEmbed from "@/components/TweetEmbed";

export default function Home() {
  return (
    <div className="antialiased overflow-x-hidden selection:bg-primary selection:text-black min-h-screen">
      <AuraBackground />
      <Navbar />
      <main className="flex flex-col z-10 pt-28 md:pt-40 px-4 md:px-6 relative gap-x-3 items-center justify-center">
        <Hero />
        <section className="z-10 w-full max-w-7xl mt-16 md:mt-32 mr-auto mb-24 ml-auto relative space-y-12 md:space-y-20">
          <Intelligence />
          <MobileApp />
          <TweetEmbed />
          <Testimonials />
          <Pricing />
        </section>
      </main>
      <Footer />
      <ScrollObserver />
    </div>
  );
}
