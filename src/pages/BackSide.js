import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./BackSide.css";
import Webcam from "react-webcam";
const BackSide = () => {
  const navigate = useNavigate();

  const videoConstraints = {
    //facingMode: { exact: "environment" },
    facingMode: "user",
  };

  let imageSrc = null;

  const webcamRef = useRef(null);
  const capture = () => {
    imageSrc = webcamRef.current.getScreenshot();
    localStorage.setItem("backSide", imageSrc);
    nextPage();
    //console.log(imageSrc);
  };

  const nextPage = useCallback(() => {
    navigate("/photo-confirmation-back");
  }, [navigate]);

  return (
    <div className="back-side">
      <Webcam
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        audio={false}
        ref={webcamRef}
        className="camliveview-icon2"
      />
      <div className="back-side-child" />
      <b className="back-side-of">Back side of ID</b>
      <div className="take-a-photo3">
        Take a photo of the back side of your document
      </div>
      <button onClick={capture} className="shutter2">
        <div className="shutter-child1" />
        <div className="shutter-child2" />
      </button>
    </div>
  );
};

export default BackSide;
