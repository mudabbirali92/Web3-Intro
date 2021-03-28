/*
Previously in "index3.js" where we have just read the function from the deployed smart contract. We are using the same concept 
here but this time we will be doing some transaction to have more insights about deployement of smart contract using web3.
*/

//import stuff...
var Web3=require("web3");// just like an import
var Tx = require('ethereumjs-tx').Transaction


const targetUrl="HTTP://127.0.0.1:7545";
let Web3Isnt=new Web3(targetUrl);
//console.log("here is the connection instance",Web3Isnt);
// This time we need the deployer's address
const ownerAddress="0xD63197CB46d193D192e544be0DaBEB57D1997437";
const privateKey1="f656331205fcbf71cb98d234066725a4094acc25ab1e6f40cd72c9153c376d9d";

const contractAddress="0xF2ea0E180F51A8a129A28c1041D1956808832Ac6"// contracts address that has been delpoyed on blockchain...

const abi=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "sendEther",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nm",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "showBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Now creating buffer for our private key of owner/delpoyer
const priavetKey1Buffer=Buffer.from(privateKey1,'hex');

// Now we need method for to access contract's method through web3...
const contract = new Web3Isnt.eth.Contract(abi, contractAddress);

//
Web3Isnt.eth.getTransactionCount(ownerAddress, (err1,txCount)=>
{
    if(err1){
        console.log("Could'nt initiate transaction")
    }

    else{
    // Crete Transaction....
    const txObject={
        nonce: Web3Isnt.utils.toHex(txCount),//as you can see we have assigned "txCount" which is transaction count to "nounce" in order to calculate the number of transactions
        gasLimit: Web3Isnt.utils.toHex(100000),
        gasPrice: Web3Isnt.utils.toHex(Web3Isnt.utils.toWei("20",'gwei')),
        to:contractAddress,// this is necessary cuz we will not use any addrress but will broadcast to all network...
        data: contract.methods.setName("Nino").encodeABI(),// this time we need a transactional method and will encode it to ABI
    };

    //Sign the transaction...
    const tx = new Tx(txObject);// If we are using our local blockchain as in this case ganaxhe we dont need extra parameters
    // but if use remote blockchainnlike Inufura's ropsten then we need to have chain id and bla bla
    // see this for more details: 
    tx.sign(priavetKey1Buffer);

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    console.log(txObject);
    // Broadcast the transaction
    Web3Isnt.eth.sendSignedTransaction(raw, (err, txHash) => 
    {
        if(err)
        {
            console.log("Could'nt make transaction!",err)
        }
        else
        {
            console.log('Transaction successfull !! txHash is: ', txHash)
        }
    
    // Now go check etherscan to see the transaction!
    })

}})
/*
Theonly diference between index4.js and this excercise is that this excercise uses data transaction while index4.js used value
transaction...
*/
