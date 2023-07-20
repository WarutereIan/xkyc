import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, sepolia } from "wagmi/chains";

import Home from "./pages/Home";
import DocumentSelectionPage from "./pages/DocumentSelectionPage";
import TakeSelfie from "./pages/TakeSelfie";
import FrontSide from "./pages/FrontSide";
import SelfieConfirmation from "./pages/ConfirmSelfie";
import BackSide from "./pages/BackSide";
import PhotoConfirmation from "./pages/ConfrimFront";
import PhotoConfirmationBack from "./pages/ConfirmBack";
import UploadSuccess from "./pages/UploadSuccess";
import CoinxDetails from "./pages/CoinxDetails";
import { useEffect } from "react";

function App() {
  const chains = [arbitrum, mainnet, polygon, sepolia];
  const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID;
  //const { open } = useWeb3Modal();

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });

  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "";
        break;
      case "/document-selection-page":
        title = "";
        metaDescription = "";
        break;
      case "/take-selfie":
        title = "";
        metaDescription = "";
        break;
      case "/front-side":
        title = "";
        metaDescription = "";
        break;
      case "/selfie-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/back-side":
        title = "";
        metaDescription = "";
        break;
      case "/photo-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/photo-confirmation-back":
        title = "";
        metaDescription = "";
        break;
      case "/upload-success":
        title = "";
        metaDescription = "";
        break;
      case "/coinx-details":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  /* useEffect(() => {
    open();
  }, []); */

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/document-selection-page"
            element={<DocumentSelectionPage />}
          />
          <Route path="/take-selfie" element={<TakeSelfie />} />
          <Route path="/front-side" element={<FrontSide />} />
          <Route path="/selfie-confirmation" element={<SelfieConfirmation />} />
          <Route path="/back-side" element={<BackSide />} />
          <Route path="/photo-confirmation" element={<PhotoConfirmation />} />
          <Route
            path="/photo-confirmation-back"
            element={<PhotoConfirmationBack />}
          />
          <Route path="/upload-success" element={<UploadSuccess />} />
          <Route path="/coinx-details" element={<CoinxDetails />} />
        </Routes>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
export default App;
