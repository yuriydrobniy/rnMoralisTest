import Moralis from 'moralis/react-native';
import {ethers} from 'ethers';
import MyNFT from '../../../utils/MyNFT.json';
// @ts-ignore
import {RINKEBY_CONTRACT} from 'react-native-dotenv';

// todo - type for base64. https://www.npmjs.com/package/js-base64 ?
export const storeContent = async (
  content: string,
  currentId: string,
  nameDescription: any,
): Promise<any[] | undefined> => {
  // return false;
  let path;
  let storedMetadata;

  let contentAbiPath = `${currentId}.jpeg`;
  const contentAbi = {
    abi: [
      {
        path: contentAbiPath,
        content,
      },
    ],
  };
  try {
    // @ts-ignore
    path = await Moralis.Web3API.storage.uploadFolder(contentAbi);
  } catch (e) {
    console.log(e);
    return;
  }

  const metadata = {
    image: path[0].path,
    name: nameDescription.name,
    description: nameDescription.description,
    external_url: path[0].path,
  };
  // todo - remove btoa. https://www.npmjs.com/package/js-base64 ?
  const jsonMetadata = btoa(JSON.stringify(metadata));

  let metadataAbiPath = `${currentId}.json`;
  const metadataAbi = {
    abi: [
      {
        path: metadataAbiPath,
        content: jsonMetadata,
      },
    ],
  };
  try {
    // @ts-ignore
    storedMetadata = await Moralis.Web3API.storage.uploadFolder(metadataAbi);
  } catch (e) {
    console.log(e);
    return;
  }

  return storedMetadata;
};

export const mintContent = async ({
  signer,
  metadataPath,
  quantity,
}: {
  signer: any;
  metadataPath: string;
  quantity: number;
}): Promise<any | undefined> => {
  let mintedContent;
  const contractAddress = RINKEBY_CONTRACT;
  const Contract = new ethers.Contract(contractAddress, MyNFT.abi, signer);

  try {
    mintedContent = await Contract.mintToken(metadataPath, quantity);
  } catch (e) {
    console.log(e);
    return;
  }

  console.log('WOOOOO - minted!', mintedContent);
  return mintedContent;
};
