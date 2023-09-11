import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractData } from "~~/components/example-ui/ContractData";
import { ContractInteraction } from "~~/components/example-ui/ContractInteraction";

const ExampleUI: NextPage = () => {
  return (
    <>
     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <p>address:</p>
        <input placeholder="wallet address" id="addr" style={{color: "black", width: '200px'}}/>
        <br></br>
        <p>amount</p>
        <input placeholder="NNN token amount" id="amount" style={{color: 'black', width: '200px'}}/>
        <br></br>

        <button style={{color: 'white', width: '50px', backgroundColor: 'purple', borderRadius: '10px', padding: '5px'}}

        >Mint</button>
      </div>
    </>
  );
};

export default ExampleUI;
