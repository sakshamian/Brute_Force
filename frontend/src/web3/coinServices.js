import { toast } from 'react-toastify';
import abi from '../web3/tokensABI.json';
import Web3 from 'web3';
import { useDispatch } from 'react-redux';
import { setToken } from '../slices/tokenSlice';

import React from 'react';

const smartContractAddress = '0x42Dfb1f7FAD81f65a613b60DC525d5FB56cCabf8';

const checkConnection = async ()=> {
    let account;
    if(window.ethereum !== "undefined") {
    const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
    account = accounts[0];
    toast.success(`Metamask account ${account} connected successfully `);
    window.web3 = await new Web3(window.ethereum);
    } else{
        toast.error("Metamask is not connected");
    }
};

const GetBalance= async(dispatch) => {
    let account;
    if(window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        window.web3 = await new Web3(window.ethereum);
        const contract = await new window.web3.eth.Contract( abi, smartContractAddress);    
        const address = '0x7FcbE33e3F4acF53dbF345Ba7EC935744752AB05';
        const data = await contract.methods.balanceOf(account).call();
        console.log("data", data);
        console.log(Number(data.toString()));
        dispatch(setToken(Number(data.toString())));
    }
};

const SpendTokens= async(dispatch, num) => {
    console.log(num);
    let account;
    if(window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        window.web3 = await new Web3(window.ethereum);
        console.log("check");
        const contract = await new window.web3.eth.Contract( abi, smartContractAddress);
        const buisnessAddress = '0x08A842834047b9542550af659F8A7315d1839B02';
        console.log(account);
        const data = await contract.methods.transfer(buisnessAddress, num).send({ from: account });
    }
};

export { checkConnection, GetBalance, SpendTokens};