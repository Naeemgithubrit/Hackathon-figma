import ContactForm from "@/components/Contactform";
import ContactPage from "@/components/ContactDetail";
import ContactTalkPage from "@/components/talkpage";
import Footer from "@/components/Footer";
import AboutHeader from "@/components/AboutHeader";

export default function Contact(){
    return(
        <div>
            <AboutHeader/>
            <ContactForm />
            <ContactPage />
            <ContactTalkPage />
            <Footer/>
            
        </div>

    )
}
