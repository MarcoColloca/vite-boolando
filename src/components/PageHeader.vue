<script>

  export default{
    data(){
      return{
        title: 'PageHeader',
        navBarTabs: ['Donna', 'Uomo', 'Bambini'],
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
                <div class="col-4">
                    <ul class="header-select">
                        <li v-for="(tab, i) in navBarTabs">
                            <a href="#">{{tab}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-4 txt-center">
                    <img src="/img/boolean-logo.png" alt="" class="logo-img">

                </div>

                <div class="col-4 txt-end header-icons"> 
                    <a href="#" v-for="(icon, i) in navBarIcons">
                        <img :src="`/img/social-icons/${icon}`" alt="" height="25" width="25">
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
                align-items: center;
            }
    }
    
    .logo-img{
        height: 40px;
        width: 170px;
    }


    .header-icons{
        a{
            margin: 5px;
            img{
                &:hover{
                    filter: invert(1);
                }
            }       
        }
    }

    .header-select{
        li{
            display: inline-block;
            margin-right: 10px;
            font-weight: bold;
            &:hover{
                color: rgb(0, 0, 0);
            }
        }
    }
</style>
