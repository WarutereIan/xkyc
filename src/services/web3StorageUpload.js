import { File, Web3Storage } from "web3.storage";
import { Blob } from "web3.storage";

const token = process.env.REACT_APP_WEB3STORAGE_TOKEN;

export const uploadToWeb3 = async (userDetails) => {
  const storageClient = new Web3Storage({ token: token });

  const obj = userDetails;

  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });

  const file = [new File([blob], `${userDetails.CNXID}`)];

  const cid = await storageClient.put(file);

  return cid;
};
