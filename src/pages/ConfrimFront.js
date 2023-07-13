import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmFront.css";
const PhotoConfirmation = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/back-side");
  }, [navigate]);

  const onRetakePictureFrontClick = useCallback(() => {
    localStorage.setItem("frontSide", null);
    navigate("/front-side");
  }, [navigate]);

  return (
    <div className="photo-confirmation">
      <img
        className="captureddoc-front-icon"
        alt=""
        src={localStorage.getItem("frontSide")}
      />
      <button className="docisreadable-front" onClick={onRectangleClick}>
        <div className="docisreadable-front-child" />
        <b className="document-is-readable">Document is readable</b>
      </button>
      <button
        className="retakepicture-front"
        onClick={onRetakePictureFrontClick}
      >
        <div className="retakepicture-front-child" />
        <b className="retake-picture1">Retake picture</b>
      </button>
      <div className="front-of-driver-license-parent">
        <b className="front-of-driver">Front of Driver license</b>
        <div className="make-sure-that-container">
          <p className="make-sure-that">
            Make sure that all the information on the
          </p>
          <p className="make-sure-that">document is visible and easy to read</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoConfirmation;
