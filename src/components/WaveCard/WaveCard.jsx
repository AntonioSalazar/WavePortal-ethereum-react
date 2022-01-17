import React from 'react';

import { CardContainer, AddressAndMessage } from './WaveCard.styled';

const WaveCard = ({wave}) => {
  const date = wave.timestamp.toLocaleDateString();

  return (
    <CardContainer>
      <AddressAndMessage>
        <span>Account: {wave.waver}</span>
        <span>{wave.message}</span>
      </AddressAndMessage>
      <div>
        <span>date: {date}</span>
      </div>
    </CardContainer>
  )
}

export default WaveCard;