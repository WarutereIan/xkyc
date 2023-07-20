import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EthereumProvider } from "@walletconnect/ethereum-provider";
import "./CoinxDetails.css";
import * as ethers from "ethers";
import XKYC from "../contracts/XKYC.json";
import { uploadToWeb3 } from "../services/web3StorageUpload";

const CoinxDetails = () => {
  const navigate = useNavigate();

  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();

  const submitDetails = async (kycDetails) => {
    try {
      const provider = await EthereumProvider.init({
        projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID, //turn into process.env key
        chains: [11155111],
        showQrModal: true,
      });
      await provider.connect();

      const library = new ethers.BrowserProvider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      const signer = await library.getSigner();

      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setNetwork(network);
      //console.log(XKYC.networks);
      const contract = new ethers.Contract(
        "0xf5065aDf223e81C3205f8144b9A6360151f10E78",
        XKYC.abi,
        signer
      );

      await contract.submitDetails(
        kycDetails,
        { value: ethers.parseEther("0.0001") } //the tx charge
      );
    } catch (err) {}
  };

  const emailRef = useRef("");
  const CNXIDRef = useRef("");

  const onBlockstampIDClick = useCallback(async () => {
    //TODO: will add logic for connecting to wallet as web3 provider,and then call smart contract, and pay fees
    //navigate("/upload-success");
    try {
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

      const kycDetails = {
        cnxid: userDetails.CNXID,
        email: userDetails.email,
        kycDocCID: cid,
        verificationStatus: "pending",
      };

      await submitDetails(kycDetails);
    } catch (err) {
      console.log(err);
    }
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
