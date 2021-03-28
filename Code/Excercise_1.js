// THE CLIENT VERSION
// see No importing anything about web3 this is cuz we have added the line <script src="./node_modules/web3/dist/web3.min.js"></script> in index.html file
const rpcURL="HTTP://127.0.0.1:7545";// we need this cuz to ensure that we have address of functional blockchain in this case we have ganche's blocchain...
let Web3Isnt=new Web3(rpcURL);// Now this will allow you to talk with local or remote blockchain if connected succesfully...
console.log("Connected to: ",Web3Isnt);
/*
Now we are connected to ganache local blockchain
Now wwewill check the balnce of required address in present blockchain...
*/
let address="0xdcCFbf09784000e6b593BfF1cA6E8776882940A0";
//this will be the method you can access the balance of desired address...

Web3Isnt.eth.getBalance(address, function(err, amount) {
  if(err)
  {
    console.log("Value not found",err);
  }
  else{
    //console.log("balance in wei",amount);
    balanceInEther = Web3Isnt.utils.fromWei(amount, 'ether')
    //console.log("balance in ether is: ",balance);
    document.getElementById("ethValue").innerHTML=`The value in ether ${balanceInEther}`
  }
}
)
