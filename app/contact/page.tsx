import ContactForm from "@/components/Contactform";
import ContactPage from "@/components/ContactDetail";
import ContactTalkPage from "@/components/talkpage";
import Footer from "@/components/Footer";

export default function Contact(){
    return(
        <div>
            <ContactForm />
            <ContactPage />
            <ContactTalkPage />
            <Footer/>
            
        </div>

    )
}