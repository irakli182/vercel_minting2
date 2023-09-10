import type { NextPage } from "next";
import React, { useState } from "react";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";


const ExampleUI: NextPage = () => {


// Initialize the state variables with default values
const [addr, setAddr] = useState<string>('');
const [amount, setAmount] = useState<string>('0'); // Set a default value of '0'

const handleAddrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setAddr(event.target.value);
};
const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setAmount(event.target.value);
};

const { writeAsync, isMining } = useScaffoldContractWrite({
  contractName: "NNNToken", // Replace with the actual contract name
  functionName: "mint", // Replace with the actual minting function name
  args: [addr, BigInt(0)] // Provide default values for addr and amount as BigInt(0)
  // Additional configuration options if needed
});

const mintTokens = async () => {
  console.log('MINT NNN Token!');
  const IntAmount = Number(amount);
  const weiAmount = IntAmount * 10**18;
  const weiAmountBigInt = BigInt(weiAmount);
  // Call the minting function with the updated arguments
  await writeAsync({
    args: [addr, weiAmountBigInt], // Provide the recipient's address and weiAmount as bigint
    // Additional configuration options if needed
  });
}


  return (
    <>
     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <p>address:</p>
        <input placeholder="wallet address" id="addr" style={{color: "black", width: '200px'}} onChange={handleAddrChange}/>
        <br></br>
        <p>amount</p>
        <input placeholder="NNN token amount" id="amount" style={{color: 'black', width: '200px'}} onChange={handleAmountChange} />
        <br></br>

        <button onClick={mintTokens} style={{color: 'white', width: '50px', backgroundColor: 'purple', borderRadius: '10px', padding: '5px'}}

        >Mint</button>
      </div>
    </>
  );
};

export default ExampleUI;
