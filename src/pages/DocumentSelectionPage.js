import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./DocumentSelectionPage.css";
const DocumentSelectionPage = () => {
  const navigate = useNavigate();
  const countryRef = useRef(null);
  const docTypeRef = useRef(null);

  const onDLClick = useCallback(() => {
    navigate("/front-side");
  }, [navigate]);

  const onIDClick = useCallback(() => {
    navigate("/front-side");
  }, [navigate]);

  const onResidencePermitClick = useCallback(() => {
    navigate("/front-side");
  }, [navigate]);

  const onPassportClick = useCallback(() => {
    navigate("/front-side");
  }, [navigate]);

  return (
    <div className="document-selection-page">
      <img
        className="icon-ionic-ios-close1"
        alt=""
        src="/icon-ioniciosclose.svg"
      />
      <b className="select-the-country-container">
        <p className="select-the-country">Select the country where your ID</p>
        <p className="select-the-country">document was issued</p>
      </b>
      <input className="selectcountry" type="text" ref={countryRef} />
      <div className="if-you-have-container">
        <span>{`If you have any issues, then please contact our `}</span>
        <span className="support">support</span>
      </div>
      <img
        className="icon-ionic-ios-arrow-back"
        alt=""
        src="/icon-ioniciosarrowback.svg"
      />
      <b className="select-the-country1">
        Select the type of Document to be used for KYC
      </b>
      <button className="driverslicenseselection" autoFocus>
        <div className="driverslicenseselection-child" onClick={onDLClick} />
        <img
          className="icon-ionic-ios-arrow-back1"
          alt=""
          src="/icon-ioniciosarrowback1.svg"
        />
        <b className="drivers-license">Drivers license</b>
      </button>
      <button className="idcardselection" autoFocus>
        <div className="driverslicenseselection-child" onClick={onIDClick} />
        <img
          className="icon-ionic-ios-arrow-back1"
          alt=""
          src="/icon-ioniciosarrowback1.svg"
        />
        <b className="drivers-license">ID card</b>
      </button>
      <button className="residencepermitselection" autoFocus>
        <div
          className="driverslicenseselection-child"
          onClick={onResidencePermitClick}
        />
        <img
          className="icon-ionic-ios-arrow-back1"
          alt=""
          src="/icon-ioniciosarrowback1.svg"
        />
        <b className="drivers-license">Residence permit</b>
      </button>
      <button className="passportselection" autoFocus>
        <div
          className="driverslicenseselection-child"
          onClick={onPassportClick}
        />
        <img
          className="icon-ionic-ios-arrow-back1"
          alt=""
          src="/icon-ioniciosarrowback1.svg"
        />
        <b className="drivers-license">Passport</b>
      </button>
    </div>
  );
};

export default DocumentSelectionPage;
