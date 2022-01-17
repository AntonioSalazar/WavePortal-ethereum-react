import React from 'react';

import { MessagesContainer } from './WaveMessages.styled';
import WaveCard from '../WaveCard'

const WaveMessages = ({waves}) => {
  return (
    <MessagesContainer>
      {
        waves.map((wave, index )=> (
          <WaveCard key={index} wave={wave}/>
        ))
      }
    </MessagesContainer>
  )
}

export default WaveMessages;