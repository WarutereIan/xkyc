import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmSelfie.css";
const SelfieConfirmation = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/coinx-details");
  }, [navigate]);

  const onRetakePictureSelfieClick = useCallback(() => {
    localStorage.setItem("selfie", null);
    navigate("/take-selfie");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/take-selfie");
  }, [navigate]);

  return (
    <div className="selfie-confirmation">
      <img
        className="captureddoc-selfie-icon"
        alt=""
        src={localStorage.getItem("selfie")}
      />
      <button className="perfectlyvisible" onClick={onRectangleClick}>
        <div className="perfectlyvisible-child" />
        <b className="im-perfectly-visable">I’m perfectly visible</b>
      </button>
      <button
        className="retakepicture-selfie"
        onClick={onRetakePictureSelfieClick}
      >
        <div
          className="retakepicture-selfie-child"
          onClick={onRectangle1Click}
        />
        <b className="retake-picture">Retake picture</b>
      </button>
      <div className="selfie-parent">
        <b className="selfie1">Selfie</b>
        <div className="make-sure-nothing-container">
          <p className="make-sure-nothing">
            Make sure nothing is covering your face,
          </p>
          <p className="make-sure-nothing">bright light and clear picture</p>
        </div>
      </div>
    </div>
  );
};

export default SelfieConfirmation;
