import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3391896246Ea0F1839B7a2a13556c67f408E432C' // Hash deploy
    // '0xd05D1D8B66be28DBa6D66AB43a2fa6be9ea46dEc'
);

// console.log(instance);

export default instance;
