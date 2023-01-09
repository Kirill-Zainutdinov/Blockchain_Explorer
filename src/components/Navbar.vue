<template>
    <div>
        <button @click="$router.push(`/`)">Главная страница</button>
        <input v-model="blockNumber" placeholder="Введите номер блока">
        <button @click="$router.push(`/block/${blockNumber}`)">Открыть</button>
        <input v-model="txHash" placeholder="Введите хеш транзакции">
        <button @click="$router.push(`/transaction/${txHash}`)">Открыть</button>
    </div>

</template>

<script>
export default{
    name: "navbar",
    data(){
        return{
            blockNumber: "",
            txHash: ""
        }
    }
}
</script>

<style>

</style>
