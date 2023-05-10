import { ethers } from "ethers";

export const GenerateSecretPhrase = async () => {
  const entropy = ethers.utils.randomBytes(16);
  const mnemonic = ethers.utils.entropyToMnemonic(entropy);
  
  // Derive a BIP32 HDNode from the mnemonic
  const hdnode = ethers.utils.HDNode.fromMnemonic(mnemonic);
  
  // Generate the private key from the HDNode
  const privateKey = hdnode.privateKey;
  
  // Get the public key from the private key
  const publicKey = ethers.utils.computePublicKey(privateKey);
  
  // Get the address from the public key
  const address = ethers.utils.computeAddress(publicKey);
  
  // Prepare phrases for display in the frontend
  const mnemonicToShow = mnemonic.trim().split(/\s+/g);

  // *** CONSOLES FOR TESTING *** ///
  console.log("Mnemonic", mnemonic);
  console.log("Private Key", privateKey);
  console.log("Public Key", publicKey);
  console.log("Address", address);
  console.log("Entropia", ethers.utils.hexlify(entropy));
  console.log("mnemonicToShow", mnemonicToShow);

  return { 
    mnemonicToShow, privateKey, publicKey, address };
};

// export const GenerateSecretPhraseRandom = async () => {
//   const mnemonic = await GenerateSecretPhrase();
//   const shuffledMnemonic = mnemonic.sort(() => Math.random() - 0.5);
//   console.log("Shuffled Mnemonic", shuffledMnemonic);
//   return shuffledMnemonic;
// };
