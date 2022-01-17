import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";

import { WaveCardContainer, WaveCardTitle, WaveCardSpan, InputContainer, Input, Button, SendingMessageSpan, NumberOfWaves } from './WaveHeader.styled';
import abi from '../../utils/WavePortal.json';

const WaveHeader = () => {
  const [message, setMessage] = useState("");
  const [isMinningTx, setIsMinningTx] = useState(false);
  const contractAddress = "0x64766003bcE1bEb53d5D6B7eEED8306E082501Ef";
  const contractABI = abi.abi;

  const wave = async () => {
      try {
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);

          // Send message
          if(message === ''){
            alert('You need to enter a message!')
          } else {
            const waveTxn = await wavePortalContract.wave(message);
            console.log("Minning...", waveTxn.hash);
            setMessage("");
            setIsMinningTx(true);
            await waveTxn.wait();
            console.log("Minned...", waveTxn.hash);
          }
          setIsMinningTx(false);
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <WaveCardContainer>
      <WaveCardTitle>WavePortal 👋</WaveCardTitle>
      <WaveCardSpan> Wave at me! Your message will be saved in the Ethereum Blockchain! </WaveCardSpan>
      <InputContainer>
        <Input 
          type="text"
          value={message} 
          placeholder="Type your message ❤️"
          onChange={e => setMessage(e.target.value)}
        />
        {
          isMinningTx 
          ? (
            <SendingMessageSpan>Sending Message...</SendingMessageSpan>
          )
          : (            
            <Button 
              type='submit'  
              onClick={wave}
            >Send</Button>
          )
        }
      </InputContainer>
    </WaveCardContainer>
  )
}

export default WaveHeader;