
//THE CONSOLE VERSION...
var Web3=require("web3");// just like an import
// If you dont want to be imported here and want to access it on client side e.g on browser you need to follow the "Excercise_2.js"
//like " import Web3 from 'web3' ";

const rpcURL="HTTP://127.0.0.1:7545";// we need this cuz to ensure that we have address of functional blockchain in this case we have ganche's blocchain...
let Web3Isnt=new Web3(rpcURL);// Now this will allow you to talk with local or remote blockchain if connected succesfully...
console.log("rpc",Web3Isnt);
/*
Now we are connected to ganache local blockchain
Now wwewill check the balnce of required address in present blockchain...
*/
let address="0xdcCFbf09784000e6b593BfF1cA6E8776882940A0";
//this will be the method you can access the balance of desired address...
console.log("Start");

//alternate of code given below is mentioned in "Excercise_2.js"
// Moreover if you want to show the value of below to your web page insead of console see "Excercise_2.js"
Web3Isnt.eth.getBalance(address, (err, amount) => {
    console.log("balance in wei",amount);
    balance = Web3Isnt.utils.fromWei(amount, 'ether')
    console.log("balance in ether is: ",balance);
  })
// The above uses callback function means the request we have made to get balnce for address, if it finds desired addresss(node) on blockchain
// That arrow function or that function in 2nd parameter will execute and if not found then error will be prompted...
// That callback means that JS will not wait for particular function it will execute the next line and will continue its execution
// So for that we have writeern console.log(start) then console.log(start) just to show that it will execute no matter how long that get balance will
// will take to execute it will go to next step...
console.log("end");