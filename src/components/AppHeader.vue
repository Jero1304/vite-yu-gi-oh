<template>
    <header class="main-header">
        <div class="container">
            <img :src="logo" alt="">
            <h1>{{ title }}</h1>   
        </div>
    </header>
</template>

<script>
export default{
    data(){
        return{
            title:'Yu-Gi-Oh API',
            logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg'
        }
    }

}

</script>

<style lang="scss" scoped>
.main-header{
    text-align: center;
    font-size: 18px;
    padding: 20px;
    .container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;

        img{
            max-width: 70px;
        }
        h1{
            padding-left: 15px;
        }
    }

}
</style>