async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const data = await ethers.getContractAt("paymentRouter","0x263aD853F020075De3FC1D3e24e9d8E88BcD9182");

    await data.transfer("0x511416Cf874099A43ed8361B156b6fc35cf95B55","100000000000000",'daaaf6068dc8058fdc1ce0b439f5da92',{
        value: "200000000000000"
    })

  } 
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
    //npx hardhat run scripts/deployTest.js --network bsc