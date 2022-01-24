import "./contact.css";
import Phone from "./images/phone.svg";
import Email from "./images/email.png";
import Git from "./images/icons8-github.svg"
import Lid from "./images/linkedin.svg"
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import emailjs from "emailjs-com";


const Contact = () => {
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_xfx44o8', form.current, 'user_QnDDfZ2JAIYwnocapg4b9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +234 90 3019 5547
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              chinenyeobasi503@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Lid} alt="" /><a className="clink" href="https://www.linkedin.com/in/chinenye-obasi-984429194">Linkedin</a>
              
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Git} alt="" /><a className="clink" href="https://github.com/nenyezz">Github</a>
             
            </div>
          </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="name" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
            <input type="submit" value="Send" className="ccb" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
