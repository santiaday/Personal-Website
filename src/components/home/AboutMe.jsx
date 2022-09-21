import React, {useState} from "react";

import axios from "axios";
import { Jumbotron } from "./migration";
import "./styles.scss"
import fileDownload from 'js-file-download'

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  const [isHovering, setIsHovering] = useState(false);


  return (
    <Jumbotron id="aboutme" className="m-0" style={{backgroundColor: "rgba(255,255,255, 0.6)"}}>
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="rounded-circle"
              src={link}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-2 mb-5 text-center gradientText">{heading}</h2>
          <p className="lead text-center" style={{fontSize: "1.4rem", fontWeight: "300"}}>{message}</p>
          <br/>
          {resume && (
            <p className="lead text-center">
              <a href="https://santiagoaday.com/Santiago_Aday_Resume.pdf" download="MyExampleDoc" target='_blank'>
                    <button class="btn btn-primary send-button customSendBtn" id="submit resumeBtnTex" style={{maxWidth: "400px" , width: "70vw"}}>
        <div class="alt-send-button" style={{maxWidth: "400px" , width: "70vw"}}>
        <span class="send-text" style={{paddingBottom: "4px", transform: "translateY(-5px)", maxWidth: "400px" , width: "70vw"}}><a href="https://santiagoaday.com/Santiago_Aday_Resume.pdf" download style={{textDecoration: "none", color: "white", textAlign: "center"}}>RESUME</a></span><i class="fa fa-download"><a href="https://santiagoaday.com/Santiago_Aday_Resume.pdf" download></a></i>
        </div>
      
      </button>
      </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;

