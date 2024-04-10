<script>

  export default{
    data(){
      return{
        title: 'PageHeader',
      }
    },

  }
</script>






<template>
    <header class="page-header">
        <div class="container">
            <nav class="row">
                <div class="col-3">
                    <ul class="header-select">
                        <li>
                            <a href="#">Donna</a>
                        </li>

                        <li>
                            <a href="#">Uomo</a>
                        </li>
                        
                        <li>
                            <a href="#">Bambini</a>
                        </li>
                    </ul>
                </div>

                <img src="../assets/img/boolean-logo.png" alt="" class="logo-img">

                <div class="col-3 txt-al-r"> 
                    <a href="#"><img src="../assets/img/social-icons/User.png" alt="" height="20" width="20"></a>
                    <a href="#"><img src="../assets/img/social-icons/Heart.png" alt="" height="20" width="20"></a>
                    <a href="#"><img src="../assets/img/social-icons/Lock.png" alt="" height="20" width="20"></a>
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
            margin-right: 5px;
            font-weight: bold;
        }
    }
</style>
