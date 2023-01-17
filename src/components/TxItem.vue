<template>
    <div class="tx">
        <div class="tx_item">
            <div class="tx_block"> <strong>Номер блока:</strong> </div>
            <router-link :to="`/block/${tx.blockNumber}`"> {{tx.blockNumber}} </router-link>
        </div>
        <div class="tx_item"> <strong>Хеш транзакции:</strong> {{tx.hash}}</div>
        <div class="tx_item"> <strong>Отправитель транзакции:</strong> {{tx.from}}</div>
        <div class="tx_item"> <strong>Получатель транзакции:</strong> {{tx.to}}</div>
        <div class="tx_item"> <strong>Пересланный эфир:</strong> {{tx.value }}</div>
    </div>

</template>

<script>
import {getTransaction} from '../../utils/func'
export default{
    name: "tx-item",
    props:{
        txHash:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            tx :{}
        }
    },
    mounted(){
        this.getTransaction()
    },
    watch:{
        txHash(){
            this.getTransaction()
        }
    },
    methods:{
        async getTransaction(){
            this.tx = await getTransaction(this.txHash);
            console.log(this.tx)
        }
    }

}
</script>

<style>
.tx{
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
.tx_item{
    margin-top: 5px;
}
.tx_block{
    display: inline-block;
}
</style>
