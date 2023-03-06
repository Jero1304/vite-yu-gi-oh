<template>
    <div class="container">
        <input 
        @keyup.enter="$emit('onSearch')"
        class="search" 
        type="text" 
        v-model="store.search"
        placeholder="Search Character"
        >
    </div>
</template>

<script>
import store from '../store';
export default{
    data(){
        return{
            store,
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
.search{
    border: 1px solid black;
    margin: 10px 20px;
    padding: 10px;
    font-size: 0 10px;
    border-radius: 15px;
}
</style>