import { Tilt } from "react-tilt";
import "./TiltPhoto.scss";
import { useState, useEffect } from "react";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 45, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const TiltPhoto = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const counter = setTimeout(() => {
      setIsLoading(false);
    }, 7000);
    return () => {
      clearTimeout(counter);
    };
  }, []);

  return (
    <div className="image-container">
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
        {isLoading && (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

        <img
          src={require("../../images/me.avif")}
          className="tilt"
          alt="Myself"
        />

        <div className="effect effect-1-1"></div>
        <div className="effect effect-5-1"></div>
        <div className="effect effect-7-1"></div>
        <div className="effect effect-8-1"></div>
        <div className="effect effect-8-2"></div>
      </Tilt>
    </div>
  );
};
export default TiltPhoto;
