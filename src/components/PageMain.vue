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
    <div class="test">
        {{ test }}
    </div>
</template>


<style lang="scss" scoped>
    .test{
        color: greenyellow;
    }
</style>