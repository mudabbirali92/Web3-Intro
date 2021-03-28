/*
THE CONSOLE VERSION...
In this tutorial we will just call simple smart contract that will use the function which perfroms a transaction 
that was written on remix IDE
So this program will send ethers from one address to another...
Before that we were using a wallet (metamask) or through smart contract to send ethers from one account to another now this time we will be sending ethers from web3...
For that following steps must be followed:

1. You need to insatll another package of web3 that will allow us to execute those functions in smart contract that contains some transactions.
2. Use following command in CMD prompt in order to install the required package: "npm install ethereumjs-tx" for more info please visit: https://github.com/ethereumjs/ethereumjs-tx
3. NOW YOU HAVE TO ESTABLISH A BLOCKCHAIN OR access existanat blockchain so in our case we have used ganache
4. Now follow the code I have written...
*/

const EthereumTx = require('ethereumjs-tx').Transaction;// here we hae imported the transaction library...
const Web3=require("web3");// just for checking in the console if its working  otherwise for web browser no need for this
const targetUrl="HTTP://127.0.0.1:7545"
const Web3Isnt=new Web3(targetUrl);//connected...
console.log("Connected to:", Web3Isnt);

// this time we need private keys along with address cuz it will confrim that the target address has signed this contract
const sender="0xD63197CB46d193D192e544be0DaBEB57D1997437";// the initiater..
const senderPrivateKey="f656331205fcbf71cb98d234066725a4094acc25ab1e6f40cd72c9153c376d9d"

const receiver="0x05A17aAB3598d316F6b7a405890ecfDf346e5629";// the receiver...

const priavetKey1Buffer=Buffer.from(senderPrivateKey,'hex');// this will actually convert your hexadecimal key to binary representation...


// we can also check the fromat here:
console.log("The Key ",senderPrivateKey," has been conveted to ",priavetKey1Buffer);
console.log("end here...")

// Now here we will be using the method of web3 that will perform transactions
Web3Isnt.eth.getTransactionCount(sender, (err,txCount)=>
{
    //here we need to consider the architecture of the transaction i.e. when we send ethers we need nounce, the reciever address, the amount, gas price and the gas limit..
    // as the metamask do that for us....
    const txObject={
    nonce: Web3Isnt.utils.toHex(txCount),//as you can see we have assigned "txCount" which is transaction count to "nounce" in order to calculate the number of transactions
    to: receiver,
    value: Web3Isnt.utils.toHex(Web3Isnt.utils.toWei("4", 'ether')), 
    gasLimit: Web3Isnt.utils.toHex(21000),
    gasPrice: Web3Isnt.utils.toHex(Web3Isnt.utils.toWei("10",'gwei'))
}// dictionary decalred....
const tx= new EthereumTx(txObject);// the we have intatitated "ethereumjs-tx" 's package here in order to use its methods... 
// previously tarnsaction was initiated now time to sign it so that it can be executed succesully...
tx.sign(priavetKey1Buffer);// the sender address will signed it to perform transaction successfully

const serliaziedTx=tx.serialize();
const raw = '0x' + serliaziedTx.toString('hex');
// Now it has been signed
// Now we have to send the signed transaction to desired address
Web3Isnt.eth.sendSignedTransaction(raw,(err,txHash)=>
{
console.log("The Hash of Transaction is :", txHash);
}
)// this will return the hash of signedtransaction so if transaction's hash generated means tranaction has been successful...
}
//for more info about such transaction mechanism follow: https://github.com/ethereumjs/ethereumjs-tx
)