<template>
    <div class="navbar">
        <div>
            <button class="btn" @click="$router.push(`/`)" >Главная страница</button>
        </div>
        <div>
            <input v-model="blockNumberOrHash" placeholder="Введите номер или хеш блока"/>
            <button class="btn" @click="goToBlock">Открыть</button>
        </div>
        <div>
            <input v-model="txHash" placeholder="Введите хеш транзакции"/>
            <button class="btn" @click="goToTx">Открыть</button>
        </div>
    </div>
</template>


<script>
export default{
    name: "navbar",
    data(){
        return{
            blockNumberOrHash: "",
            txHash: ""
        }
    },
    methods:{
        goToBlock(){
            if(this.blockNumberOrHash === ""){
                alert("Please enter a block number")
            }else{
                this.$router.push(`/block/${this.blockNumberOrHash}`)
                this.blockNumberOrHash = ""
            }
        },
        goToTx(){
            if(this.txHash === ""){
                alert("Please enter a transaction hash")
            }else{
                this.$router.push(`/transaction/${this.txHash}`)
                this.txHash = ""
            }
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

input{
    padding: 10px 15px;
    margin-top: 15px;
    width: 550px;
}
.navbar{
    background-color: white;
    align-items: center;
    padding: 0 15px;
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
