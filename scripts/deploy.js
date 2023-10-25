async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const MyToken = await hre.ethers.getContractFactory("MyToken");

  const nft = await MyToken.deploy();

  await nft.waitForDeployment();

  console.log("NFT deployed to:", nft.address, JSON.stringify(nft));

  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(await signer0.getAddress(), "ipfs://QmdEimRewkMv88ZcuMh1KKBos55Ecr7y9fjXQ7phc9wNoL");

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });