<script>
    export default{
        data(){
            return{
                test: 'test',
            }
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
    .test{
        color: crimson;
    }
</style>