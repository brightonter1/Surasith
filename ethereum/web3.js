import Web3 from 'web3';

let web3;



if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    let ethereum = window.ethereum;

    ethereum.enable().then(function (accounts){
        const account = accounts[0];
        console.log(account);
    })
    web3 = new Web3(window.web3.currentProvider);
}else{
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/2e77c089c07846f29ebfb21f803e0ac3"
        // "https://rinkeby.infura.io/7ab9f8a9174e4f0292cae2207f5a5fb1"
        
    );
    web3 = new Web3(provider);
}






export default web3;
