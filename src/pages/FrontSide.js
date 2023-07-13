import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

import "./FrontSide.css";

const FrontSide = () => {
  const navigate = useNavigate();

  const videoConstraints = {
    //facingMode: "user",
    facingMode: { exact: "environment" },
  };

  let imageSrc = null;

  const webcamRef = useRef(null);
  const capture = () => {
    imageSrc = webcamRef.current.getScreenshot();
    localStorage.setItem("frontSide", imageSrc);
    nextPage();
    //console.log(imageSrc);
  };

  useEffect(() => {
    console.log(imageSrc);
  }, [navigate]);

  const nextPage = useCallback(() => {
    navigate("/photo-confirmation");
  }, [navigate]);

  return (
    <div className="front-side">
      <Webcam
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        audio={false}
        ref={webcamRef}
        className="camliveview-icon1"
      />

      <div className="front-side-child" />
      <b className="front-side-of">Front side of ID</b>
      <div className="take-a-photo2">
        Take a photo of the front side of your document
      </div>
      <button className="shutter1" onClick={capture}>
        <div className="shutter-child1" />
        <div className="shutter-child2" />
      </button>
    </div>
  );
};

export default FrontSide;
