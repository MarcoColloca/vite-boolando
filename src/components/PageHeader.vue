<script>

  export default{
    data(){
      return{
        title: 'PageHeader',
        navBarTabs: ['Uomo', 'Donna', 'Bambini'],
        navBarIcons: ['User.png', 'Heart.png', 'Lock.png'],
      }
    },

    methods: {
    },

  }
</script>






<template>
    <header class="page-header">
        <div class="container">
            <nav class="row">
                <div class="col-3">
                    <ul class="header-select">
                        <li v-for="(tab, i) in navBarTabs">
                            <a href="#">{{tab}}</a>
                        </li>
                    </ul>
                </div>

                <img src="/img/boolean-logo.png" alt="" class="logo-img">

                <div class="col-3 txt-al-r"> 
                    <a href="#" v-for="(icon, i) in navBarIcons">
                        <img :src="`/img/social-icons/${icon}`" alt="" height="20" width="20">
                    </a>
                </div>
            </nav>
        </div>
    </header>
</template>






<style lang="scss" scoped>
    .page-header{
        background-color: rgb(252, 104, 51);
        color: white;
        padding: 20px;
        box-shadow: 0px 0px 20px 2px rgba(0, 0, 0.1);
            .row{
                justify-content: space-between;
            }
    }
    
    .logo-img{
        height: 40px;
        width: 170px;
    }


    .header-select{
        li{
            display: inline-block;
            margin-right: 10px;
            font-weight: bold;
            &:hover{
                color: wheat;
            }
        }
    }
</style>
