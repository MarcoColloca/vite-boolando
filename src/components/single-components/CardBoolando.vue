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

            // funzione che serve per individuare il valore della proprietà isFavourite e ritornare una stringa da applicare come classe nel caso il valore sia true
            isFavorite(){
                
                if(this.cardFavorite === true){
                    return 'text-red'
                }
            },

            //funzione che ciclando gli oggetti contenuti nell'Array cardBadges trova gli oggetti con una chiave che abbia valore tag e ritorna il valore della chiave value dell'oggetto stesso
            findBadgeType(){
                
                for(let i = 0; i < this.cardBadges.length; i++){
                    
                    const object = this.cardBadges[i]
                    
                    
                    
                    if(Object.values(object).includes('tag')){
                        this.badge = object.value
                        return object.value
                    }
                }

            },

            //funzione che ciclando gli oggetti contenuti nell'Array cardBadges trova gli oggetti con una chiave che abbia valore discount e ritorna il valore della chiave value dell'oggetto stesso
            // in questo caso i valori vengono pushati in un array di supporto in modo da rendere più semplice la funzione che va a calcolare il prezzo scontato
            findDiscount(){

                let array = [];                

                for(let i = 0; i < this.cardBadges.length; i++){
                    
                    const object = this.cardBadges[i]
                    
                    
                    
                    if(Object.values(object).includes('discount')){
                        
                        array.push(object.value)
                    }
                }

                for(let j = 0; j < array.length; i++){
                    
                    this.discount = array[j]
                    return array[j]
                }
            },


            // funzinoe che sfrutta la funzione findDiscount() per calcolare il prezzo scontato. Questa funziona ritorna il prezzo scontato, se lo sconto è diverso da 0 o il prezzo base se lo sconto è === a 0
            discountPrice(){

                let basePrice = this.cardPrice;
                let discount = this.findDiscount()
                

                if(discount !== undefined){
                    discount = basePrice * (parseInt(discount.slice(1, 3))/100)
                } else{
                    discount = 0;
                }

                if(discount !== 0){
                    return (this.cardPrice - discount).toFixed(2)
                }else {
                    return this.cardPrice
                }
            },

        }
    }
</script>



<template>
    <div class="card">
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
            <span class="card__description__old-price" v-show="discountPrice() !== cardPrice">{{ cardPrice }} &euro;</span> 
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
        color: white;
        position: absolute;
        display: flex;
        width: 100%;
        justify-content: flex-start;
        gap: 10px;
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