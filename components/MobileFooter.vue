<template>
    <div class="footer-mobile-block">
        <div class="footer-nav-mobile">
            <span class="address-mobile">г. Москва, Полесский проезд 16с1, офис 427</span><br>
            <a title="Разработка и продвижение сайтов в Москве и других регионах России" class="siteupper-mobile" rel="nofollow" href="http://сайты-в-топ.рф">
            Разработка и продвижение "SiteUpper"</a>
        </div>
        <div class="copyright-mobile">
                       © 2020, Стильный камень. Все права защищены.
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>

.footer-nav-mobile{text-align: center;}
.footer-mobile-block {
    padding-left: 0;
    background: #e85b00;
    height: 64px;
    width: 100vw;
    margin-left: -15px;
    margin-right: -15px;
}
a.siteupper-mobile{
    color: #78c9c9!important;
    font-size: 12px;
    position: relative;
    top: -5px;
}
.siteupper-mobile a:hover{
    color: #78c9c9!important;
}
.copyright-mobile {
    color: #fff;
    text-align: center;
    font-size: 10px;
    }
.address-mobile{
    color: #fff;
    font-size: 10px;
}
@media (min-width: 251px) {
    .address-mobile {
        font-size: 12px;
        }
}
@media (min-width: 301px) {
    .address-mobile {
        font-size: 14px;
        }
    a.siteupper-mobile{
    font-size: 14px;
    top: -2px;
    }
    .copyright-mobile {
      font-size: 12px;
    }
}
@media (min-width: 401px) {
    .address-mobile, a.siteupper-mobile, .copyright-mobile {font-size: 16px;}
}
</style>
