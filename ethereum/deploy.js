const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'fitness photo crop tonight purchase danger catalog start poet dust enter judge',
    'https://rinkeby.infura.io/v3/2e77c089c07846f29ebfb21f803e0ac3'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });
    
        console.log('Contract deployed to', result.options.address);
    // console.log(result);

    await result.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    contractAddress = await result.methods.getDeployedCampaigns().call();

    console.log(contractAddress);

    
};

deploy();

