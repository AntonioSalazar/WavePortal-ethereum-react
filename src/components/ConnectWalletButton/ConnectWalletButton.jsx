import React from 'react';
import metamaskImg from '../../assets/metamask.ico';

import { Button, Img, Span, AccountSpan } from './ConnectWalletButton.styled';

const ConnecWalletButton = ({connectWallet, currentAccount}) => {
  const firstFive = currentAccount.substring(0, 5);
  const lastFive = currentAccount.substring(currentAccount.length - 5);
  return (
    <div>
    {
      !currentAccount 
      ? (
        <Button
          onClick={connectWallet}
        >
          <Img src={metamaskImg}/> 
          <Span>connect to metamask</Span>
        </Button>
      )
      : <AccountSpan>{firstFive}...{lastFive} Account Connected</AccountSpan>
    }
    </div>
  )
}

export default ConnecWalletButton;