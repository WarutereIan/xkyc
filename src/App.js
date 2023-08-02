import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import { ThirdwebProvider, walletConnect } from "@thirdweb-dev/react";
import { WalletConnect } from "@thirdweb-dev/wallets";
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
import { Mumbai, Binance } from "@thirdweb-dev/chains";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const walletConnectProjectID = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID;
  const thirdWebClientID = process.env.REACT_APP_THIRDWEB_CLIENT_ID;
  const wallet = new WalletConnect({
    projectId: walletConnectProjectID,
  });

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

  return (
    <>
      <ThirdwebProvider
        activeChain={process.env.REACT_APP_ACTIVE_CHAIN}
        clientId={thirdWebClientID}
        supportedWallets={[
          walletConnect({
            projectId: walletConnectProjectID,
          }),
        ]}
      >
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
      </ThirdwebProvider>
    </>
  );
}
export default App;
