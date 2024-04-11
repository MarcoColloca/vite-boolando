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
    <h1 class="test">{{ test }}</h1>
</template>


<style lang="scss" scoped>
    .test{
        color: crimson;
    }
</style>