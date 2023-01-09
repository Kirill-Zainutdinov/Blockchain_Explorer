<template>
    <div> Номер блока: {{block.number}}</div>
    <div> Хеш блока: {{block.hash}}</div>
    <div> Использовано газа: {{block.gasUsed}}</div>
    <div> Стоимость газа: {{block.baseFeePerGas }}</div>
    <div> Список транзакций:</div>
    <router-link
        v-for="hash in block.transactions"
        :to="`/transaction/${hash}`"
    >
        <div>
            {{hash}}
        </div>
    </router-link>
</template>

<script>
import {getBlock} from '../../utils/func'
export default{
    name: "block-item",
    props:{
        blockNumber:{
            type: [Number , String],
            required: true
        }
    },
    data(){
        return{
            block :{}
        }
    },
    mounted(){
        this.getBlock()
    },
    methods:{
        async getBlock(){
            this.block = await getBlock(this.blockNumber);
        }
    }

}
</script>

<style>

</style>
