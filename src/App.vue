<script>
  import PageHeader from './components/PageHeader.vue'

  export default{
    data(){
      return{
        title: 'Aaa',
      }
    },

    components:{
      PageHeader,

    },
  }
</script>






<template>
  <div>
    <PageHeader></PageHeader>
  </div>
  <div>
    <h1 class="title">
      {{ title }}
    </h1>
  </div>
</template>






<style lang="scss">

  @use './style/general.scss';

</style>
