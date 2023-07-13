import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CoinxDetails.css";

const CoinxDetails = () => {
  const navigate = useNavigate();

  const emailRef = useRef("");
  const CNXIDRef = useRef("");

  const onBlockstampIDClick = useCallback(() => {
    //TODO: will add logic for connecting to wallet as web3 provider,and then call smart contract, and pay fees
    //navigate("/upload-success");

    const email = emailRef.current.value;
    const CNXID = CNXIDRef.current.value;

    console.log(email, CNXID);
    localStorage.setItem("email", email);
    localStorage.setItem("CNXID", CNXID);

    const userDetails = {
      email: email,
      CNXID: CNXID,
      documentType: "",
      CountryofIssue: "",
      DocFrontSide: localStorage.getItem("frontSide"),
      DocBackSide: localStorage.getItem("backSide"),
      Selfie: localStorage.getItem("selfie"),
    };

    console.log(userDetails);
  }, [emailRef]);

  return (
    <div className="coinx-details">
      <b className="fill-in-your-container">
        <p className="fill-in-your">Fill in your CoinX miner account</p>
        <p className="fill-in-your">details</p>
      </b>

      <input
        className="emailinput"
        type="email"
        placeholder="Email"
        required={true}
        ref={emailRef}
      />

      <input
        className="cnxidinput"
        type="text"
        placeholder="CNX ID"
        ref={CNXIDRef}
        required={true}
      />
      <div className="you-can-find">{`You can find your CNX-ID in: Settings > Copy ID`}</div>
      <button className="blockstampid" onClick={onBlockstampIDClick}>
        <div className="blockstampid-child" />
        <b className="blockstamp-my-anonymous">
          Blockstamp my anonymous NFT-ID
        </b>
      </button>
      <div className="important-in-order-container">
        <p className="fill-in-your">{`Important: In order to fulfill the KYC process through `}</p>
        <p className="fill-in-your">{`blockchain BlockStamping, a gas fee is necessary for the `}</p>
        <p className="fill-in-your">{`generation of an anonymous NFT-ID. This NFT-ID will be `}</p>
        <p className="fill-in-your">{`linked with your CNX account and is essential for `}</p>
        <p className="fill-in-your">claiming your CNX.</p>
      </div>
    </div>
  );
};

export default CoinxDetails;
