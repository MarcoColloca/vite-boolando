<script>
  import PageHeader from './components/PageHeader.vue'
  import PageFooter from './components/PageFooter.vue'
  import PageMain from './components/PageMain.vue'

  export default{
    data(){
      return{
        title: 'Aaa',
      }
    },

    components:{
      PageHeader,
      PageFooter,
      PageMain,
    },
  }
</script>






<template>
  <div>
    <PageHeader></PageHeader>
    <PageMain></PageMain>
    <PageFooter></PageFooter>
  </div>
</template>






<style lang="scss">

  @use './style/general.scss';

</style>
