import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TopBrands from "../../components/TopBrands";
import AboutFaqSection from "./AboutFaqSection";
import AboutFounderMessage from "./AboutFounderMessage";
import AboutHero from "./AboutHero";
import AboutStatistics from "./AboutStatistics";


export default function About() {
    return (
        <main>
            {/* Navbar section */}
            <div className="md:mt-16">
                <Navbar />
            </div>

            {/* Hero section */}
            <AboutHero />

            {/* Statistics section */}
            <AboutStatistics />

            {/* Founder's message section */}
            <AboutFounderMessage />

            {/* Top brands section */}
            <TopBrands />

            {/* FAQ section */}
            <AboutFaqSection />

            {/* Footer */}
            <Footer />
        </main>
    )
}