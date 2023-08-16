let account;

if(window.ethereum !== "undefined") {
    
    // Account of user
    const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
  
    account = accounts[0];
    console.log(`Metamask account ${account} connected successfully `);
    window.web3 = await new Web3(window.ethereum);

    // User Address
    const smartContractAddress='0xF516D9Ff45cA573cf3eeBefb2733E9E5e33895D1';
    const contract = await new window.web3.eth.Contract( abi, smartContractAddress); 
    
    const data = await contract.methods.balanceOf(address).call();
    console.log(data);
    } else{
    console.log("Metamask is not connected");
}