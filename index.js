// const { fetch } = require('undici');
require('dotenv').config();

// See https://docs.chainbase.com/reference/supported-chains to get the id of different chains for network_id

// // Chainbase API: get Token Holders takes the chain id and the contract address of a certain ERC20 token
// fetch(`https://api.chainbase.online/v1/token/holders?chain_id=${process.env.network_id}&contract_address=${process.env.token_addr}&page=1&limit=20`, {
//     method: 'GET',
//     headers: {
//         'x-api-key': process.env.CHAINBASE_API_KEY, // Replace the field with your API key.
//         'accept': 'application/json',
//     }
// }).then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// Chainbase API: get a holder's ERC20 token balances
wallet_addr = '0xffffff55fc62fac0f1cdb23628cc9c367a7f1090'; // Take Vitalik's wallet address as an example.
fetch(`https://api.chainbase.online/v1/account/tokens?chain_id=${process.env.network_id}&address=${wallet_addr}&limit=5&page=1`, {
    method: 'GET',
    headers: {
        'x-api-key': process.env.CHAINBASE_API_KEY, // Replace the field with your API key.
        'accept': 'application/json',
    }
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// const axios = require('axios');
// const options = {
//     url: `https://api.chainbase.online/v1/account/tokens?chain_id=${process.env.network_id}&address=${wallet_addr}&limit=5&page=1`,
//     method: 'GET',
//     headers: {
//         'x-api-key': process.env.CHAINBASE_API_KEY, // Replace the field with your API key.
//         'accept': 'application/json'
//     }
// };
// axios(options)
//     .then(response => console.log(response.data.data))
//     .catch(error => console.log(error));