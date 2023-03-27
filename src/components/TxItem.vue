<template>
    <div class="block_info">
        <div>
            <div class="block_val">Номер блока: </div>
            <router-link :to="`/block/${transaction.blockNumber}`">{{ transaction.blockNumber }}</router-link>
        </div>
        <div class="block_val">Хеш транзакциии: {{ transaction.hash }}</div>
        <div class="block_val">Отправитель транзакциии: {{ transaction.from }}</div>
        <div class="block_val">Получатель транзакциии: {{ transaction.to }}</div>
        <div class="block_val">Количество пересланного эфира: {{ transaction.value }}</div>
    </div>
</template>


<script>
import { mapActions } from 'vuex';
export default{
    name: "tx-item",
    data(){
        return{
            transaction: {}
        }
    },
    props:{
        txHash:{
            type: String,
            required: true
        }
    },
    methods:{
        ...mapActions({
            getTransaction: "getTransaction"
        })
    },
    async mounted(){
        this.transaction = await this.getTransaction(this.txHash)
    },
    watch:{
        async txHash(){
            this.transaction = await this.getTransaction(this.txHash)
        }
    }
}

</script>


<style>
.block_info{
    padding: 15px;
    border: 2px solid darkblue;
    margin-top: 15px;
}
.block_val{
    margin-top: 5px;
}
</style>
