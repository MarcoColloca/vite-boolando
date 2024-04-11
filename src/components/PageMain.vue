<script>
    import CardBoolando from './single-components/CardBoolando.vue'

    export default{
        data(){
            return{
                test:'Page Main',
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

            }
        },
        
        components:{
            CardBoolando,
        },
    }
</script>



<template>
    <main class="page-main">
        <div class="container">
            <div class="row page-main__box-card">                
                <CardBoolando></CardBoolando>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    .page-main{
        padding: 40px 0px;
    }

    .card{
        position: relative;
        margin-bottom: 20px;
        &:hover{
            .overlay{
                opacity: 1;
            }
        }
    }

    .card__img{
        position: relative;
        display: flex;
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        justify-content: center;
        align-items: center;
        opacity: 0;
        z-index: 1;
    }

    .badge-discount{
        background-color: $color_red;
    }

    .badge-type{
        background-color: $color_green;
        left: 50px;
    }

    .box-heart{
        position: absolute;
        top: 10px;
        right: 0px;
        font-size: 35px;
        color: black;
        background-color: white;
        z-index: 99;
        padding: 0px 15px;
        cursor: pointer;
        &:hover{
            color: $color_red;
        }
    }

    .card__description__brand, 
    .card__description__item{
        display: block;
    }

    .card__description__brand{
        font-size: 15px;
    }

    .card__description__item{
        font-weight: bold;
        font-size: 17px;
    }

    .card__description__price{
        color: $color_red;
        font-weight: bold;
        font-size: 16px;
        margin-right: 10px;
    }

    .card__description__old-price{
        text-decoration: line-through;
    }

    [class^="badge"]{
        padding: 5px;
        color: white;
        position: absolute;
        bottom: 50px;
        z-index: 99;
    }

    .badge-type.badge-alone,
    .badge-discount.badge-alone{
        left: 0;
    }
</style>