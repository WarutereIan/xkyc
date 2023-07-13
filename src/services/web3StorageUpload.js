import { File, Web3Storage } from "web3.storage";
import { Blob } from "buffer";
import * as dotenv from "dotenv";
dotenv.config();

const token = process.env.WEB3STORAGE_TOKEN;

export const upload = async () => {
    
}
async function main() {
  const storageClient = new Web3Storage({ token: token });

  const obj = { hello: "world" };

  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });

  const file = [new File([blob], "hello2.json")];

  const cid = await storageClient.get(
    "bafybeigk5mujo4lpdhmraxwsjaopfqfha7gad3sktlrgtxgeffbaw2s53i"
  );

  const unpacked = await cid.files();
  return unpacked;
}

main().then((res) => {
  console.log(res);
});
