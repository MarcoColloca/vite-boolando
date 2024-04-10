<script>
  import PageHeader from './components/PageHeader.vue'
  import PageFooter from './components/PageFooter.vue'

  export default{
    data(){
      return{
        title: 'Aaa',
      }
    },

    components:{
      PageHeader,
      PageFooter,
    },
  }
</script>






<template>
  <div>
    <PageHeader></PageHeader>
    <PageFooter></PageFooter>
  </div>
</template>






<style lang="scss">

  @use './style/general.scss';

</style>
