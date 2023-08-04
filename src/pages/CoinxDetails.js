import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import "./CoinxDetails.css";
import XKYC from "../contracts/XKYC.json";
import { uploadToWeb3 } from "../services/web3StorageUpload";
import * as ethers from "ethers";

const CoinxDetails = () => {
  const navigate = useNavigate();

  const [KycDetails, setKycDetails] = useState({});

  //const contractAddress = "0xDF9826F83BF6848bd82BEB307b03379253bfaBDE";

  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

  const { contract } = useContract(contractAddress, XKYC.abi);

  console.log(contract);

  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "submitDetails"
  );

  const emailRef = useRef("");
  const CNXIDRef = useRef("");

  const onBlockstampIDClick = useCallback(async () => {
    //TODO: will add logic for connecting to wallet as web3 provider,and then call smart contract, and pay fees
    //navigate("/upload-success");

    const email = emailRef.current.value;
    const CNXID = CNXIDRef.current.value;

    localStorage.setItem("email", email);
    localStorage.setItem("CNXID", CNXID);

    const userDetails = {
      email: email,
      CNXID: CNXID,
      documentType: localStorage.getItem("documentType"),
      CountryofIssue: localStorage.getItem("countryOfIssue"),
      DocFrontSide: localStorage.getItem("frontSide"),
      DocBackSide: localStorage.getItem("backSide"),
      Selfie: localStorage.getItem("selfie"),
    };

    const cid = await uploadToWeb3(userDetails);

    let _kycDetails = {
      cnxid: CNXID,
      email: email,
      kycDocCID: cid,
      verificationStatus: "pending",
      isInitialized: true,
    };

    return _kycDetails;

    /*  mutateAsync({
      args: [kycDetails],
    }); */
  }, [emailRef, CNXIDRef]);

  /* const complete = useCallback(() => {
    navigate("/upload-success");
  }, [navigate]); */

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
      <Web3Button
        className="blockstampid"
        contractAddress={contractAddress}
        contractAbi={XKYC.abi}
        action={async (contract) => {
          let details = await onBlockstampIDClick();

          mutateAsync({
            args: [details],
            overrides: { value: ethers.utils.parseEther("0.0044") },
          }).then(() => {
            navigate("/upload-success");
          });

          console.log(KycDetails);
        }}
      >
        {/* <div className="blockstampid-child" />
        <b className="blockstamp-my-anonymous">
          Blockstamp my anonymous NFT-ID
        </b> */}
        Continue
      </Web3Button>
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
