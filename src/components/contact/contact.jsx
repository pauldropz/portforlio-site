import "./contact.css"


import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsapp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact () {
    return (
       
        <div className="contact-container">

            <h1>contact</h1>
           
                <div className="contact-links">

                    <a href="#" className="contact youtube">
                        <AiOutlineYoutube className="icon" />
                        <h2>youtube<span>Creative Ambition</span></h2>
                    </a>

                    <a href="#" className="contact Whatsapp">
                        <AiOutlineWhatsapp className="icon" />
                        <h2>Whatsapp<span>+000 000 0000</span></h2>
                    </a>

                    <a href="#" className="contact Instagram">
                        <AiOutlineInstagram className="icon" />
                        <h2>Instagram<span>_Creative _Ambition_</span></h2>
                    </a>


                </div>
        </div>
    )

}

export default Contact;