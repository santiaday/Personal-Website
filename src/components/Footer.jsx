import React, {useRef } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from './home/migration';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import emailjs from '@emailjs/browser';

const Footer = (props) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_punuqzo', 'template_gm2dida', form.current, '6MsK5Zi81QJxj24PE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<Jumbotron id="experiences" className="m-0" style={{backgroundColor: "rgba(255,255,255, 0.6)"}}>
<div id="background" style={{maxHeight: "0px", maxWidth: "0px"}}>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
</div>
<h2 className="display-2 pb-5 text-center gradientText" id="contactMeMediaQ">Contact Me</h2>
<section id="contact">
  
  <div class="contact-wrapper">
  
  <div class="direct-contact-container">

<ul class="contact-list">
  <li class="list-item"><i class="fa fa-map-marker fa-2x" id="contactIcons"><span class="contact-text place" id="contactText">Miami, FL</span></i></li>
  
  <li class="list-item"><i class="fa fa-phone fa-2x" id="contactIcons"><span class="contact-text phone" id="contactText"><a href="tel:1-212-555-5555" title="Give me a call">(305) 972-7051</a></span></i></li>
  
  <li class="list-item"><i class="fa fa-envelope fa-2x" id="contactIcons"><span class="contact-text gmail" id="contactText"><a href="mailto:#" title="Send me an email">santiagoaday7@gmail.com</a></span></i></li>
  
</ul>

<hr />
<ul class="social-media-list">
  <li class="socialMediaIcon"><a href="#" target="_blank" >
  <AiOutlineGithub class="contact-icon"/></a>
  </li>
  <li><a href="#" target="_blank" class="contact-icon">
  <AiFillLinkedin class="contact-icon"/></a>
  </li>      
</ul>
<hr />

</div>


<form ref={form} onSubmit={sendEmail} style={{minWidth: "300px" , maxWidth: "400px" , width: "100%"}}>
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" required />
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" required />
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button customSendBtn" id="submit resumeBtnTex" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane ≈"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
    

    
  </div>
  
</section>
</Jumbotron>
  );
};

export default Footer;
