import * as React from "react";
import { TypeAnimation } from "react-type-animation";
import AboutApp from "./aboutApp";

function Profile() {
  return (
    <>
      <div className="col-11">
        <span style={{ fontSize: "2em" }}>
          <span className="h1">Github</span>{" "}
          <span className="display-2"> </span>
          <TypeAnimation
            sequence={["Profile Finder", 1000, " ", 1000]}
            repeat={Infinity}
          />
        </span>
      </div>
      <div className="col-11">
        <AboutApp />
      </div>
    </>
  );
}

export default React.memo(Profile);
