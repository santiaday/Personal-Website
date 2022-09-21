import React from "react";
import { Jumbotron } from './migration';

const GetInTouch = ({ heading, message, email }) => {
  return (
    <Jumbotron id="experiences" className="m-0" style={{backgroundColor: "rgba(255,255,255, 0.7)"}}>
        <h2 className="display-2 gradientText pb-5 text-center">
          {heading}
        </h2>

        <div className="container row" style={{justifyContent: "center"}}>
      </div>

    </Jumbotron>
  );
};

export default GetInTouch;
