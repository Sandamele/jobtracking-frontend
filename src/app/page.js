import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Navigation from "@/components/home/Navigation";
import StartTracking from "@/components/home/StartTracking";
import WhyChooseJobTrek from "@/components/home/WhyChooseJobTrek";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
        <Navigation />
        <Hero />
        <WhyChooseJobTrek />
        <HowItWorks />
        <StartTracking />
        <Footer />
    </div>
  );
}
