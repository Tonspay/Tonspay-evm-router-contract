async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const data = await ethers.getContractAt("paymentRouter","0x4d978743B36B7F8A72B8C2CD77DD24B33D9E2D9b");

    await data.transfer("0x511416Cf874099A43ed8361B156b6fc35cf95B55","10000000000000000",'daaaf6068dc8058fdc1ce0b439f5da92',10,{
        value: "10000000000000000"
    })

  } 
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
    //npx hardhat run scripts/deployTest.js --network bsc