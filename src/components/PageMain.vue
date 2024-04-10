<script>
    export default{
        data(){
            return{
                test:'Page Main',
            }
        }
    }
</script>



<template>
    <main class="page-main">
        <div class="container">
            <div class="row page-main__box-card">
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

                <div class="col-4 card">
                    <div class="card__img">
                        <img src="/img/2.webp" alt="">
                        <span class="badge-discount">-30%</span>
                        <span class="box-heart">&hearts;</span>
                        <div class="overlay">
                            <img src="/img/2b.webp" alt="">
                        </div>
                    </div>

                    <div class="card__description">
                        <span class="card__description__brand">Guess</span>
                        <span class="card__description__item">ROSES TEE</span>
                        <span class="card__description__price">20.99 &euro;</span> 
                        <span class="card__description__old-price">29.99 &euro;</span> 
                    </div>
                </div>

                <div class="col-4 card">
                    <div class="card__img">
                        <img src="/img/3.webp" alt="">
                        <span class="badge-discount">-30%</span>
                        <span class="box-heart">&hearts;</span>
                        <div class="overlay">
                            <img src="/img/3b.webp" alt="">
                        </div>
                    </div>

                    <div class="card__description">
                        <span class="card__description__brand">Come Zucchero Filato</span>
                        <span class="card__description__item">VOGLIA DI COLORI PASTELLO</span>
                        <span class="card__description__price">129.99 &euro;</span> 
                        <span class="card__description__old-price">184.99 &euro;</span> 
                    </div>
                </div>

                <div class="col-4 card">
                    <div class="card__img">
                        <img src="/img/4.webp" alt="">
                        <span class="badge-discount">-50%</span>
                        <span class="badge-type">Sostenibilità</span>
                        <span class="box-heart">&hearts;</span>
                        <div class="overlay">
                            <img src="/img/4b.webp" alt="">
                        </div>
                    </div>

                    <div class="card__description">
                        <span class="card__description__brand">Levi's</span>
                        <span class="card__description__item">TEE UNISEX</span>
                        <span class="card__description__price">14.99 &euro;</span> 
                        <span class="card__description__old-price">29.99 &euro;</span> 
                    </div>
                </div>

                <div class="col-4 card">
                    <div class="card__img">
                        <img src="/img/5.webp" alt="">
                        <span class="box-heart">&hearts;</span>
                        <div class="overlay">
                            <img src="/img/5b.webp" alt="">
                        </div>
                    </div>

                    <div class="card__description">
                        <span class="card__description__brand">Maya Deluxe</span>
                        <span class="card__description__item">STRIPE BODICE</span>
                        <span class="card__description__price">99 &euro;</span> 
                    </div>
                </div>

                <div class="col-4 card">
                    <div class="card__img">
                        <img src="/img/6.webp" alt="">
                        <span class="badge-type badge-alone">Sostenibilità</span>
                        <span class="box-heart">&hearts;</span>
                        <div class="overlay">
                            <img src="/img/6b.webp" alt="">
                        </div>
                    </div>

                    <div class="card__description">
                        <span class="card__description__brand">Esprit</span>
                        <span class="card__description__item">MAGLIONE - BLACK</span>
                        <span class="card__description__price">29.99 &euro;</span> 
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
    .page-main{
        padding: 40px 0px;
    }

    .card{
        position: relative;
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
        background-color: red;
    }

    .badge-type{
        background-color: green;
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
            color: red;
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
        color: red;
        font-weight: bold;
        font-size: 16px;
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

    .badge-alone{
        left: 0;
    }
</style>