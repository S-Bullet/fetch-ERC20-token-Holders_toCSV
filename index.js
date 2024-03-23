// const { fetch } = require('undici');
require('dotenv').config();

// Chainbase API getTokenHolders takes the chain id and the contract address of a certain ERC20 token
fetch(`https://api.chainbase.online/v1/token/holders?chain_id=${process.env.network_id}&contract_address=${process.env.token_addr}&page=1&limit=20`, {
    method: 'GET',
    headers: {
        'x-api-key': process.env.CHAINBASE_API_KEY, // Replace the field with your API key.
        'accept': 'application/json',
    }
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
