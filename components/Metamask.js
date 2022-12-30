import Web3 from 'web3';

const { abi } = require('../build/contracts/Retailing.json');
const contractAddress = '0xa24cc613Ecd1be73B474b12EEb9592388e8509b2';
const reciever = '0x57102EB7596D54cE2C139C7b047024286ca8Ba54';


async function connectWallet() {

    if (window.ethereum && window.ethereum.chainId == '0x61') {
       window.ethereum.request({ method: "eth_requestAccounts" });
       window.web3 = new Web3(window.ethereum);
       const account = web3.eth.accounts;
       const walletAddress = account.givenProvider.selectedAddress;
       console.log(`Wallet: ${walletAddress}`);
       const contract = new web3.eth.Contract(abi,contractAddress);
       const chainId = web3.utils.toHex(97);
       console.log(`Chain ID: ${chainId}`);
       console.log(abi)
       contract.methods.paid(walletAddress)
       .send({
             from: walletAddress,
             gas: 0x00,
             gasPrice: 0x00
       }).then(receipt=> {console.log(receipt)})
       
    if (typeof window.ethereum !== 'undefined') {
      ethereum.request({ method: 'eth_requestAccounts' });
  } else {
      alert('Please install metamask')
  };
  }

}


  


export default connectWallet;