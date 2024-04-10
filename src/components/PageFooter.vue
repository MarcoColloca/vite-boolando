<script>
    export default{
        data(){
            return{
                test: 'Page Footer',
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
        color: crimson;
    }
</style>