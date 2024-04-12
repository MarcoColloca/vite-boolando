<script>
  import PageHeader from './components/PageHeader.vue'
  import PageFooter from './components/PageFooter.vue'
  import PageMain from './components/PageMain.vue'
  import { store } from './store'
  import axios from 'axios'

  export default{
    data(){
      return{
        store,
        title: 'Aaa',
      }
    },

    components:{
      PageHeader,
      PageFooter,
      PageMain,
    },

    created(){
      this.fetchProducts()
    },

    methods:{
      fetchProducts(){
        axios.get('http://localhost:3000/products').then((res) =>{	
          store.products = res.data      
        })
      }
    }
  }
</script>






<template>

  <PageHeader></PageHeader>

  <PageMain></PageMain>
  
  <PageFooter></PageFooter>

</template>






<style lang="scss">

  @use './style/general.scss';

</style>
