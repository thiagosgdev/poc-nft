const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
require("dotenv").config()


export const listNFTsByAddress = async (address: string) => {
   const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
     address,
     chain,
  });

  return response
}

export const ownersByAddress = async (address: string, cursor: any) => {
    const chain = EvmChain.ETHEREUM;
    
    
    const params = {
        address,
        chain
    }
    
    if(cursor){
        Object.assign(params, { cursor})
    }
  
    const response = await Moralis.EvmApi.nft.getNFTOwners(params);
  
    return response
  }

