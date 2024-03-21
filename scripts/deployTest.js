async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const data = await ethers.getContractAt("paymentRouter","0x318b6ab1cbC3258a083c77a6FBC9a1215FfdDeA4");

    await data.transfer("0x32926206eDDCe8acE8DAC45E25Bdbb7f65Feb3d2","100000000000000",'daaaf6068dc8058fdc1ce0b439f5da92',{
        value: "200000000000000"
    })

    await data.withdraws("0x32926206eDDCe8acE8DAC45E25Bdbb7f65Feb3d2","100000000000000");

  } 
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
    //npx hardhat run scripts/deployTest.js --network bsc