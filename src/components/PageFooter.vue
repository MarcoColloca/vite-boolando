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
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <p class="page-footer__logo-txt">Boolando s.r.l.</p>
                    <ul class="footer-info">
                        <li>
                            <a href="#">Infoemazioni legali</a>
                        </li>

                        <li>
                            <a href="#">Informazioni Privacy</a>
                        </li>

                        <li>
                            <a href="#">Diritto Recesso</a>
                        </li>
                    </ul>
                </div>

                <div class="col-6 txt-end">
                    <p class="social-txt">Trovaci anche su</p>
                    <ul class="social-icons">
                        <li>
                            <a href="http://www.twitter.com/" target="_blank"><img src="/img/social-icons/Twitter-Icon.png" alt="" width="20" height="15"></a>
                        </li>

                        <li>
                            <a href="http://www.instagram.com/" target="_blank"><img src="/img/social-icons/Instagram-Icon.webp" alt="" width="20" height="15"></a>
                        </li>
                        
                        <li>
                           <a href="https://www.facebook.com/" target="_blank"><img src="/img/social-icons/Facebook-Icon.webp" alt="" width="20" height="15"></a> 
                        </li>
                        
                        <li> 
                           <a href="https://www.youtube.com/" target="_blank"> <img src="/img/social-icons/YouTube-Icon.png" alt="" width="20" height="15"> </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>

    .page-footer{
        background-color: rgba(0, 0, 0, 0.9);
        padding: 20px;
        color: white;
        justify-content: space-between;

        a{
            margin-right: 10px;
        }

        li{
            display: inline-block;
            margin-top: 15px;
            text-align: left;
        }
    }

    .page-footer__logo-txt{
        font-size: 20px;
        font-weight: bold;
    }

    .social-txt{
        position: relative;
        right: 20px;
    }
</style>