import "./contact.scss"
import {useState} from "react";
import{ init} from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_oS91syJxkTS29MS4NuAyQ");

export default function Contact() {
        const [message, setMessage] = useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        setMessage(true)
        
            emailjs.sendForm('service_wddg5xl', 'template_c1jkh3a', e.target, 'user_oS91syJxkTS29MS4NuAyQ')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          e.target.reset()
    }

    
     return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt=""/>
                </div>
                <div className="right">
                    <h2>Get In Touch.</h2>
                    <form onSubmit={handleSubmit}>
                        <input name="email" placeholder="Email"/>
                        <textarea name="message" placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                        {message && <span>Thank you! I'll reply ASAP :)</span>}
                    </form>
            </div>
        </div>
    )
}
