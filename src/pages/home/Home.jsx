import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Pricing from "../../components/Pricing";
import TestimonialCarousel from "../../components/TestimonialCarousel";
import TopBrands from "../../components/TopBrands";
import HomeCallToAction from "./HomeCallToAction";
import HomeFeatures from "./HomeFeatures";
import HomeHero from "./HomeHero";
import HomeMockup from "./HomeMockup";

export default function Home() {
    return (
        <main>
            {/* Navbar */}
            <div className="md:mt-16">
                <Navbar />
            </div>

            {/* Hero section */}
            <HomeHero />

            {/* Mockup section */}
            <HomeMockup />

            {/* Top brands section */}
            <TopBrands />

            {/* Features section */}
            <HomeFeatures />

            {/* Testimonial section */}
            <TestimonialCarousel />

            {/* Pricing section */}
            <Pricing />

            {/* Call to action section */}
            <HomeCallToAction />

            {/* Footer */}
            <Footer />
        </main>
    )
}