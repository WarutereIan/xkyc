import { Button } from "@mui/material";
import "./Home.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate("/document-selection-page");
  }, [navigate]);

  return (
    <div className="home">
      <img
        className="icon-ionic-ios-close"
        alt=""
        src="/icon-ioniciosclose.svg"
      />
      <b className="verify-your-identity-container">
        <p className="verify-your-identity">{`Verify your identity into the `}</p>
        <p className="verify-your-identity">BNB Smart Chain</p>
      </b>
      <div className="it-will-only">It will only take 2 minutes</div>
      <div className="home-child" />
      <img
        className="icon-awesome-id-card"
        alt=""
        src="/icon-awesomeidcard.svg"
      />
      <b className="identity-documentation">Identity documentation</b>
      <div className="take-a-photo">Take a photo of your ID</div>
      <div className="home-item" />
      <img
        className="icon-awesome-id-card1"
        alt=""
        src="/icon-awesomeidcard.svg"
      />
      <b className="profile-details">Profile details</b>
      <div className="verify-and-complete-container">
        <p className="verify-your-identity">
          Verify and complete your personal
        </p>
        <p className="verify-your-identity">information.</p>
      </div>
      <Button
        onClick={onClick}
        className="continue"
        sx={{ width: 357 }}
        variant="contained"
        color="primary"
      >
        Continue
      </Button>
      <div className="by-tapping-continue-container">
        <p className="verify-your-identity">
          By tapping Continue, you consent to processing your
        </p>
        <p className="verify-your-identity">
          <span>{`personal data according to our Consent to `}</span>
          <span className="personal-data">Personal data</span>
        </p>
        <p className="processing-document">{`processing document `}</p>
      </div>
      <div className="powered-by-cnx">Powered by CNX</div>
    </div>
  );
};

export default Home;
