<template>
    <block
        v-for="block in $store.state.blocks"
        :block="block"
    />
</template>

<script>
import {  mapActions } from "vuex"
export default{
    data(){
        return{
            blockNumbers: [],
        }
    },
    mounted(){
        this.newBlockHeaders()
    },
    methods:{
        ...mapActions({
            newBlockHeaders: 'newBlockHeaders'
        })
    }
}
</script>

<style>

</style>
