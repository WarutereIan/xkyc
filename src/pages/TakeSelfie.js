import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import "./TakeSelfie.css";
const TakeSelfie = () => {
  const navigate = useNavigate();

  const videoConstraints = {
    //facingMode: { exact: "environment" },
    facingMode: "user",
  };

  let imageSrc = null;

  const webcamRef = useRef(null);
  const capture = () => {
    imageSrc = webcamRef.current.getScreenshot();
    localStorage.setItem("selfie", imageSrc);
    nextPage();
    //console.log(imageSrc);
  };

  const nextPage = useCallback(() => {
    navigate("/selfie-confirmation");
  }, [navigate]);

  return (
    <div className="take-selfie">
      <Webcam
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        audio={false}
        ref={webcamRef}
        mirrored={true}
        className="camliveview-icon"
      />
      <div className="take-selfie-child" />
      <b className="selfie">Selfie</b>
      <div className="take-a-photo1">Take a photo of you</div>
      <button onClick={capture} className="shutter">
        <div className="shutter-child" />
        <div className="shutter-item" />
      </button>
    </div>
  );
};

export default TakeSelfie;
