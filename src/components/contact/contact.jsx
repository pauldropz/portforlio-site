import "./contact.css"
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsapp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact () {
    return (
       
        <div className="contact-container">

            <h1>contact</h1>
           
                <div className="contact-links">

                    <a href="#">contact youtube</a>
                        <AiOutlineYoutube className="icon" />
                        <h2>youtube<span>Creative Ambition</span></h2>
                </div>
        </div>
    )
}





