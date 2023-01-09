<template>
    <block-item
        :blockNumber="$route.params.blockNumber"
    />
</template>

<script>

export default{
    name: "block",
    props:{
        blockNumber:{
            type: [Number , String],
            required: true
        }
    }
}
</script>

<style>

</style>
