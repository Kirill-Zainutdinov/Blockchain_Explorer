const Web3 = require('web3');
const web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/R9QqWMg1ORMnOE9RwIaMwwfNVrgBNN4J')

export const getBlockNumber = async () => {
    return await web3.eth.getBlockNumber()
}

export const newBlockHeaders = async () => {
    let subscribe = web3.eth.subscribe('newBlockHeaders')
    .on('data', block => {
        return block
    })
}

export const getBlock = async (blockNumberOrHash) => {
    return await web3.eth.getBlock(blockNumberOrHash)
}

export const getTransaction = async (txHash) => {
    return await web3.eth.getTransaction(txHash)
}
