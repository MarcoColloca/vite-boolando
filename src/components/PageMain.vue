<script>
    import CardBoolando from './single-components/CardBoolando.vue'
    //import dataProduct from '../assets/../db.json'
    import { store } from '../store'

    export default{


        data(){
            return{
                //products: dataProduct.products,
                store, 
                test:'Page Main',
                /*
                products: [
                    {
                        id: 1,
                        frontImage: "1.webp",
                        backImage: "1b.webp",
                        brand: "Levi's",
                        name: "Relaxed Fit",
                        price: 29.99,
                        isInFavorites: true,
                        badges: [
                            {
                                type: "tag",
                                value: "Sostenibilità"
                            },
                            {
                                type: "discount",
                                value: "-50%"
                            }
                        ]
                    },
                    {
                        id: 2,
                        frontImage: "2.webp",
                        backImage: "2b.webp",
                        brand: "Guess",
                        name: "Roses Tee",
                        price: 20.99,
                        isInFavorites: true,
                        badges: [
                            {
                                type: "discount",
                                value: "-30%"
                            }
                        ]
                    },
                    {
                        id: 3,
                        frontImage: "3.webp",
                        backImage: "3b.webp",
                        brand: "Come Zucchero Filato",
                        name: "Voglia di colori pastello",
                        price: 129.99,
                        isInFavorites: false,
                        badges: [
                            {
                                type: "discount",
                                value: "-30%"
                            }
                        ]
                    },
                    {
                        id: 4,
                        frontImage: "4.webp",
                        backImage: "4b.webp",
                        brand: "Levi's",
                        name: "Tee Unisex",
                        price: 14.99,
                        isInFavorites: false,
                        badges: [
                            {
                                type: "tag",
                                value: "Sostenibilità"
                            },
                            {
                                type: "discount",
                                value: "-50%"
                            }
                        ]
                    },
                    {
                        id: 5,
                        frontImage: "5.webp",
                        backImage: "5b.webp",
                        brand: "Maya Deluxe",
                        name: "Stripe Bodice",
                        price: 99.99,
                        isInFavorites: true,
                        badges: [
                            {
                                type: "tag",
                                value: "Sostenibilità"
                            },
                            {
                                type: "discount",
                                value: "-50%"
                            }
                        ]
                    },
                    {
                        id: 6,
                        frontImage: "6.webp",
                        backImage: "6b.webp",
                        brand: "Esprit",
                        name: "Maglione - Black",
                        price: 29.99,
                        isInFavorites: true,
                        badges: [
                            {
                                type: "tag",
                                value: "Sostenibilità"
                            }
                        ]
                    }
                ]
                */
                index: 0,
            }
        },
        
        components:{
            CardBoolando,
        },


        methods:{
            hideCardImg(){
                console.log('ciao')
            }
        },
    }
</script>



<template>
    <main class="page-main">
        <div class="container">
            <div class="row page-main__box-card">
                <div class="col-4" v-for="(card,i) in store.products">

                    <CardBoolando                     
                     :key="card.id"
                     :cardImgSrc="card.frontImage"
                     :cardHiddenImgSrc="card.backImage"
                     :cardBrand="card.brand"
                     :cardName="card.name"
                     :cardPrice="card.price"
                     :cardNewPrice="card.price"
                     :cardBadges="card.badges"
                     :cardFavorite="card.isInFavorites"
                     :cardIndex="i"
                    ></CardBoolando>
                    
                </div>
            </div>           
        </div>
    </main>
</template>


<style lang="scss" scoped>

    .page-main{
        padding: 40px 0px;
    }

    .page-main__box-card{

        & .col-4{
            padding: 10px;
            margin-bottom: 5px;
        }
    }

</style>