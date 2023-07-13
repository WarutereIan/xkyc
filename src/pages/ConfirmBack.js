import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmBack.css";
const PhotoConfirmationBack = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/take-selfie");
  }, [navigate]);

  const onRetakeClick = useCallback(() => {
    localStorage.setItem("backSide", null);
    navigate("/back-side");
  }, [navigate]);

  return (
    <div className="photo-confirmation-back">
      <img
        className="captureddoc-back-icon"
        alt=""
        src={localStorage.getItem("backSide")}
      />
      <button className="docisreadable-back" onClick={onRectangleClick}>
        <div className="docisreadable-back-child" />
        <b className="document-is-readable1">Document is readable</b>
      </button>
      <button className="retakepicture-back" onClick={onRetakeClick}>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <b className="retake-picture2">Retake picture</b>
        </div>
      </button>
      <div className="back-of-driver-license-parent">
        <b className="back-of-driver">Back of Driver license</b>
        <div className="make-sure-that-container1">
          <p className="make-sure-that1">
            Make sure that all the information on the
          </p>
          <p className="make-sure-that1">
            document is visible and easy to read
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoConfirmationBack;
