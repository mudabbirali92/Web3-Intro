// web3 package is already imported so no need to use or import here now
// THE WEB VERSION...
/*
In this tutorial we will just call simple smart contract that will only read the function and will not perfrom
any transaction hat was written on remix IDE
For that following steps must be followed:

1. You need to creata any smart contract in remix IDE or any other IDE
2. Then you need to establish a blockchain in order to deploy that contract
3. In our case we have Ganache setup
4. We will delpoy our smart contract to ganache blockchain
5. Remeber to switch your EVM to ganache from metamask in order to connect your contract to ganache
6. When successfully deployed you will ahave ABI ready and conract's address genereted on ganache's blockchain where it has been delpoyed..
7. Now copy the ABI code which is basically a machine code converted to readable code and is used for calling for server side language.So, it basically work as interface between solidity and JS.

*/
const targetUrl="HTTP://127.0.0.1:7545";
let Web3Isnt=new Web3(targetUrl);
console.log("here is the connection instance",Web3Isnt);

// Now below statement is an ABI that we need to give 
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
const address="0xeD7f1E65Ac4EAce332B7Bacbd88f89bcc5BC70F5";// Now this is the address of our contract that has been delpoyed on ganache blockchain...

const contract = new Web3Isnt.eth.Contract(abi, address);// Now new instance has been created for contract that is going to be executed
// and it contains 2 parameters i.e. abi that we defined earlier and address also defined earlier
console.log("Here is the contract's instance: ",abi,address);

// Now from here we will start using methods written in solidity
// first we need to understand the call method of web3. It means that you are calling those methods that are writtehn slidtu which 
// are just "view" means no fucntions being called that contains any transactions..
contract.methods.getAge().call((err,result)=>
{
    console.log("The age of deployer is",result)
    document.getElementById("message").innerHTML=`The age of deployer is ${result}`;
    
}
)
// > 140245398


