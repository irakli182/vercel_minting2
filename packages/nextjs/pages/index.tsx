import React, { useState } from "react";
import type { NextPage } from "next";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {

  const test = process.env.YARN_ENABLE_IMMUTABLE_INSTALLS;

  // Initialize the state variables with default values
  const [addr, setAddr] = useState<string>("");
  const [amount, setAmount] = useState<string>("0"); // Set a default value of '0'

  const handleAddrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddr(event.target.value);
  };
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "NNNToken", // Replace with the actual contract name
    functionName: "mint", // Replace with the actual minting function name
    args: [addr, BigInt(0)], // Provide default values for addr and amount as BigInt(0)
    // Additional configuration options if needed
  });

  const mintTokens = async () => {
    alert(test)
    console.log("MINT NNN Token!");
    const IntAmount = Number(amount);
    const weiAmount = IntAmount * 10 ** 18;
    const weiAmountBigInt = BigInt(weiAmount);
    // Call the minting function with the updated arguments
    await writeAsync({
      args: [addr, weiAmountBigInt], // Provide the recipient's address and weiAmount as bigint
      // Additional configuration options if needed
    });
  };

  return (
    <>
      <div className="wrapper">
          
          <div className="mainDiv" >
              <div>
                  <p className="text" >address:</p>
                  <input
                      placeholder="wallet address"
                      id="addr"
                      className='input'
                      onChange={handleAddrChange}
                  />
                  <p className="text" >amount:</p>
                  <input
                      placeholder="NNN token amount"
                      id="amount"
                      className='input'
                      onChange={handleAmountChange}
                  />
                  <br/>
                  <button
                      className="button"
                      onClick={mintTokens}
                      >
                     💵 mint
                  </button>
              </div>
          </div>
      </div>
    </>
  );
};

export default Home;
