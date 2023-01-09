<template>
    <div> Номер блока: {{block.number}}</div>
    <div> Хеш блока: {{block.hash}}</div>
    <button @click="$router.push(`/block/${block.number}`)">Открыть</button>
</template>

<script>

export default{
    name: "block",
    props:{
        block:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>
