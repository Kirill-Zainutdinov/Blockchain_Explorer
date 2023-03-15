import {createStore} from 'vuex'
const Web3 = require('web3')
const web3 = new Web3('wss://eth-goerli.g.alchemy.com/v2/R9QqWMg1ORMnOE9RwIaMwwfNVrgBNN4J')


export default createStore({
    state:{
        blocks: []
    },
    getters:{
    },
    mutations:{
        addBlock(state, newBlock){
            state.blocks.unshift(newBlock)
        }
    },
    actions:{
        async newBlockHeaders({commit}){
            let subscribe = web3.eth.subscribe('newBlockHeaders')
            .on('data', block => {
                console.log(block)
                let newBlock = {
                    number: block.number,
                    hash: block.hash
                }
                commit('addBlock', newBlock)
            })
        }
    },
    modules:{
    } 
})

