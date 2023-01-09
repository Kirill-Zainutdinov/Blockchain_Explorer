<template>
    <div> Хеш транзакции: {{tx.hash}}</div>
    <div> Отправитель транзакции: {{tx.from}}</div>
    <div> Получатель транзакции: {{tx.to}}</div>
    <div> Пересланный эфир: {{tx.value }}</div>
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
    methods:{
        async getTransaction(){
            this.tx = await getTransaction(this.txHash);
        }
    }

}
</script>

<style>

</style>
