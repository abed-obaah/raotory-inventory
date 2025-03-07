import Footer from "../../components/Footer";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";

export default function Contact() {
    return (
        <main>
            {/* Hero section */}
            <ContactHero />

            {/* Contact card section */}
            <ContactCard />

            {/* Contact form */}
            <ContactForm />

            <Footer />
        </main>
    )
}