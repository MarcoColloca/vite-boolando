<script>
    export default{
        props: {
            cardImgSrc: String,
            cardHiddenImgSrc: String,
            cardBrand: String,
            cardName: String,
            cardPrice: Number,
            cardBadges: Array,
            cardFavorite: Boolean,
        },
        
        data(){
            return{
                test: 'test',
                discount: '',
                badge: '',
            }
        },

        methods:{


            isFavorite(){
                
                console.log(this.cardFavorite)

                if(this.cardFavorite === true){
                    return 'text-red'
                }
            },


            findBadgeType(){
                
                for(let i = 0; i < this.cardBadges.length; i++){
                    //console.log(this.cardBadges[i], i)
                    const object = this.cardBadges[i]
                    
                    
                    //console.log(Object.values(object))
                    if(Object.values(object).includes('tag')){
                        this.badge = object.value
                        return object.value
                    }
                }

            },

            findDiscount(){

                let array = [];                

                for(let i = 0; i < this.cardBadges.length; i++){
                    //console.log(this.cardBadges[i], i)
                    const object = this.cardBadges[i]
                    
                    
                    //console.log(Object.values(object))
                    if(Object.values(object).includes('discount')){
                        
                        array.push(object.value)
                    }
                }

                for(let j = 0; j < array.length; i++){
                    
                    this.discount = array[j]
                    return array[j]
                }
            },

            discountPrice(){

                let basePrice = this.cardPrice;
                let discount = this.findDiscount()
                //console.log(typeof discount, discount)

                if(discount !== undefined){
                    discount = basePrice * (parseInt(discount.slice(1, 3))/100)
                } else{
                    discount = 0;
                }

                return (this.cardPrice - discount).toFixed(2)
            },

        }
    }
</script>



<template>
    <div class="col-4 card">
        <div class="card__img">
            <img :src="`/img/${cardImgSrc}`" alt="">
            <div class="badge-container">
                <span class="badge-discount" v-show="findDiscount() === this.discount">{{ findDiscount() }}</span>
                <span class="badge-type" v-show="findBadgeType() === this.badge">{{ findBadgeType() }}</span>
            </div>
            <span :class="isFavorite()" class="box-heart">&hearts;</span>
            <div class="overlay">
                <img :src="`/img/${cardHiddenImgSrc}`" alt="">
            </div>
        </div>

        <div class="card__description">
            <span class="card__description__brand">{{ cardBrand }}</span>
            <span class="card__description__item">{{ cardName }}</span>
            <span class="card__description__price">{{ discountPrice() }} &euro;</span> 
            <span class="card__description__old-price">{{ cardPrice }} &euro;</span> 
        </div>
    </div>

</template>


<style lang="scss" scoped>
    @use '../../style/partials/variables' as *;


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


    .badge-container{
        padding: 5px;
        color: white;
        position: absolute;
        display: flex;
        bottom: 50px;
        z-index: 99;
    }

    .badge-discount{
        background-color: $color_red;
        padding: 5px;
    }

    .badge-type{
        background-color: $color_green;
        padding: 5px;
    }

    .box-heart{
        position: absolute;
        top: 10px;
        right: 0px;
        font-size: 35px;
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




</style>