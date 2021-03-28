/*
In this excercsie we will be using events...
*/

//import stuff...
var Web3=require("web3");// just like an import
var Tx = require('ethereumjs-tx').Transaction


const targetUrl="HTTP://127.0.0.1:7545";
let Web3Isnt=new Web3(targetUrl);

const ownerAddress="0xD63197CB46d193D192e544be0DaBEB57D1997437"

const contractAddress="0xD4fFeDF637702d06091FBa99522D227aCfEdd85D"

const abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "logString",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "fireEvent",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const contract = new Web3Isnt.eth.Contract(abi, contractAddress);

contract.getPastEvents(
    "AllEvents",
{fromBlock:142,
toBlock:144
},
(err,events)=>{
    console.log("Events are",events)

}
)

