<template>
    <main class="main-content">
        <div class="container">
            <Filters @onSearch="onSearchFn"/>
        </div>
        <div class="container">
            <ul class="grid">
                <li class="character" v-for="character in store.characters" :key="character.id">
                    
                    <img :src="character.card_images[0].image_url_cropped" alt="">
                    <h3 class="name">{{ character.name }}</h3>
                    <h4 class="archetype">{{ character.archetype }}</h4>
                    
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import store from '../store'
import Filters from './Filters.vue'
export default{
    components:{
        Filters,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        fetchCharacters(){
            const search = this.store.search
            console.log('search:', search);

            console.log('fetch');
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&fname=${search}`)
            .then((res)=>{
                console.log(res.data.data);
                console.log(store);
                this.store.characters = res.data.data;
            }).catch((error)=>{
                this.store.characters=[];
                console.log(this.store.characters);
            })

        },
        onSearchFn(){
            console.log('on search function');
            this.fetchCharacters()

        }
    },
    created(){
        this.fetchCharacters()
    }



}

</script>

<style lang="scss" scoped>
.main-content{
background-color: orange;
    .grid{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        padding: 20px;
        gap: 40px;
        background-color: orange;
        .character{
            text-align: center;
            background-color: aqua;
            img{
                display: block;
                aspect-ratio: 1/1;
                object-fit: cover;
                margin: 0 auto;
            }
            .archetype{
                padding-top: 20px;
            }
        }
    }
}

</style>