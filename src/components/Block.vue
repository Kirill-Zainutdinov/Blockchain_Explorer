<template>
    <div class="block">
        <div style="display:inline-block;">
            <div><strong>Номер блока:</strong> {{block.number}}</div>
            <div><strong>Хеш блока:</strong> {{block.hash}}</div>
        </div>
        <div class="btns">
            <button class="btn" @click="$router.push(`/block/${block.number}`)">Открыть</button>
        </div>
    </div>
    
    
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.block{
    padding: 15px;
    border: 2px solid darkblue;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}


.btn{
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: darkblue;
    border: 2px solid darkblue;
    margin-left: auto;
}
</style>
