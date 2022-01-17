import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import WaveHeader from './components/WaveHeader';
import Footer from './components/Footer';
import ConnectWalletButton from './components/ConnectWalletButton';
import WaveMessages from './components/WaveMessages';
import './App.css';
import abi from './utils/WavePortal.json';


export default function App() {

  const [currentAccount, setCurrentAccount ] = useState('');
  const [totalWaves, setTotalWaves] = useState([]);
  const contractAddress = "0x64766003bcE1bEb53d5D6B7eEED8306E082501Ef";
  const contractABI = abi.abi;
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if(!ethereum){
        console.log('You need to install metamask for you to be able to use this website')
      } else {
        console.log('Metamask is connected ', ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts"});
      if(accounts.length !== 0){
        const account = accounts[0];
        console.log("Found an authorized account: ", account);
        setCurrentAccount(account);
        getTotalNumberOfWaves();
      } else {
        console.log("No authorized accounts found")
      }
    } catch(error){
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try{
      const { ethereum } = window;
      if(!ethereum){
        alert("You need to install Metamask!");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_requestAccounts"});
      console.log("Connected: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } 
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const getTotalNumberOfWaves = async() => {
    try{
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
          const waves = await wavePortalContract.getAllWaves();

          let wavesCleaned = [];
          waves.forEach(wave => {
            wavesCleaned.push({
              waver: wave.waver,
              message: wave.message,
              timestamp: new Date(wave.timestamp * 1000),
            })
          });

          setTotalWaves(wavesCleaned);
        } else {
          console.log("Ethereum object doesnt exist")
        }
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <ConnectWalletButton connectWallet={connectWallet} currentAccount={currentAccount}/>
      <WaveHeader/>
      <WaveMessages waves={totalWaves}/>
      <Footer />
    </div>
  );
}
