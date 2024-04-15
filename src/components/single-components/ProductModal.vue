<script>
    export default{

        props:{
            open: {
                type: Boolean,
                default: false,
            },

            name: String,
            brand: String,
            price: [Number, String],
            image: String,
        },

        data(){
            return{
                description: 'test modal'
            }
        },

        methods:{
            findImg(){
                console.log()
            },
        }
    }
</script>



<template>
    <div v-if="open === true" class="product-modal">
        <div class="modal-container">

            <div class="modal-img">
                <img :src="`/img/${image}`" alt="">
            </div>

            <div class="modal-description">
                <h1>Descrizione</h1>
                <p>Nome Articolo: {{ name }}</p>
                <p>Brand: {{ brand }}</p>
                <p>Prezzo: {{ price }} €</p>
            </div>

            <p 
             class="close-modal"
             @click="$emit('closeModal')"
            >
                Close
            </p>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .product-modal{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 999;
        background-color: rgba(70, 70, 70, 0.8);
        display: flex;
    }

    .modal-container{
        position: fixed;
        top: 25%;
        left: 15%;
        height: 60%;
        aspect-ratio: 18/9;
        background-color: white;
        display: flex;
    }

    .modal-img{
        border: 1px solid black;
        width: 400px;
        img{
            width: 100%;
            height: 100%;
        }
    }


    .modal-description{
        border: 1px solid black;
        color: black;
        padding-top: 30px;
        padding-left: 50px;
        height: 100%;
        flex-grow: 1;
            h1{
                margin-bottom: 100px;
            }

            p{
                margin-bottom: 20px;
            }
    }




    .close-modal{
        color: red;
        position: absolute;
        top: 15px;
        right: 20px;
        cursor: pointer;

            &:hover{
                text-decoration: underline;
            }
    }

    .test{
        color: red;
    }
</style>