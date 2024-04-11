<script>
    export default{


        
        data(){
            return{
                test: 'test',
            }
        },

        mounted(){
        }
    }
</script>



<template>
    <div class="col-4 card">
        <div class="card__img">
            <img src="/img/1.webp" alt="">
            <span class="badge-discount">-50%</span>
            <span class="badge-type">Sostenibilità</span>
            <span class="box-heart">&hearts;</span>
            <div class="overlay">
                <img src="/img/1b.webp" alt="">
            </div>
        </div>

        <div class="card__description">
            <span class="card__description__brand">Levi's</span>
            <span class="card__description__item">RELAXED FIT TEE UNISEX</span>
            <span class="card__description__price">14.99 &euro;</span> 
            <span class="card__description__old-price">29.99 &euro;</span> 
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