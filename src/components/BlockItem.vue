<template>
    <div class="block_info">
        <div class="block_val"><strong>Номер блока:</strong> {{block.number}}</div>
        <div class="block_val"><strong>Хеш блока:</strong> {{block.hash}}</div>
        <div class="block_val"><strong>Использовано газа:</strong> {{block.gasUsed}}</div>
        <div class="block_val"><strong>Стоимость газа:</strong> {{block.baseFeePerGas }}</div>
        <div class="block_val"><strong>Список транзакций:</strong></div>
        <router-link
            v-for="hash in block.transactions"
            :to="`/transaction/${hash}`"
        >
            <div class="block_val">
                {{hash}}
            </div>
        </router-link>
    </div>

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
    watch:{
        blockNumber(){
            this.getBlock()
        }
    },
    methods:{
        async getBlock(){
            this.block = await getBlock(this.blockNumber)
        }
    }

}
</script>

<style>
.block_info{
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
.block_val{
    margin-top: 5px;
}
</style>
