async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Data = await ethers.getContractFactory("paymentRouter");
    const data = await Data.connect(deployer).deploy();
    await data.deployed();
    console.log("PaymentRouter Deployed~!")
    console.log("PaymentRouter Contract address:", data.address);

  } 
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
    //npx hardhat run scripts/deploy.js --network scroll
    

    //npx hardhat verify --network <network> <contract address> <constructor parameters>

    //npx hardhat verify --network scroll 0x318b6ab1cbC3258a083c77a6FBC9a1215FfdDeA4 