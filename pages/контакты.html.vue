<template>
<div>
<nav class="midnav nav">
    <div class="nav-wrapper">
        <div class="midnav-title">Мы производим из:</div>
        <div class="midnav-body">
            <li v-for="(item, index) in link_arr" :key="index">
              <nuxt-link :to="item.url">{{item.name}}</nuxt-link>
            </li>
        </div>
        <div class="shadow-block right-shadow-block"></div>
    </div>
</nav>
  <div class="col-xs-12 nav-content">
                <div class="crumbs">
                  <ul class="breadcrumb">
                      <li>
                        <nuxt-link to="/" exact><span class="first-breadcrumb">Главная</span></nuxt-link>
                      </li>
                      <li class="active">
                        <span>{{page_name}}</span>
                      </li>
                  </ul>
                     <h1>{{page_name}}</h1>
                </div>
            </div>
<div class="col-xs-12">
               <div class="row">
                <div class="col-xs-12 main-content kvarc-condition">
 <div class="comfortable-block">
        <h2>Это удобно!</h2>
        <span>Вам необязательно выезжать в наш офис. Хотите посмотреть образцы камней на дому? Имеются другие вопросы?</span>
        <span>Позвоните нашему менеджеру или оставьте заявку на обратный звонок и закажите <b>выезд замерщиков с каталогом камней</b>.</span>
        <span>Если же хотите посетить наше представительство, выберите самое удобное из списка ниже:</span>
        </div><div>
        <h3>Мы в области:</h3>
            <ul><li><a href="">Люберцы</a></li>
                <li><a href="">Ногинск</a></li>
                <li><a href="">Балашиха</a></li>
            </ul>

    </div>
    <div class="region region-content">
        <div id="block-system-main" class="block block-system">
            <div class="content" style="border-bottom: 1px solid grey;">
              <div style="border: none;">
                <div class="yandex-map" :id="name" title="временно не активно"></div>
                <h2>Наши представители на карте</h2>
                <div class="row">
                  <div class="col-sm-4 check-list" v-for="(item,index) in adress_map" :key="index">
                    <span class="head-map">{{item.name}}</span>
                    <ul><li v-for="(item2,index) in item.arr" :key="index"><span>{{item2.title}}</span></li></ul>
                  </div>
                </div>
              </div>
        </div>
                <div style="clear:both;"></div>

        <div id="block-system-main" class="block block-system">
            <div class="content">
                     <div itemscope itemtype="http://schema.org/Organization">
                        <h3 itemprop="name">Стильный камень</h3>
                        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress" v-for="(item,index) in vz" :key="index">
                              <p><strong>Выставочный зал:</strong></p>
                              <p class="contact_adress">{{item.city}}<span itemprop="addressLocality">{{item.addressLocality}}</span>, <span itemprop="streetAddress">{{item.streetAddress}}</span></p>
                              <p>{{item.dop}}</p>
                               <hr>
                        </div>
                        <p>Телефоны:</p>
                                <p>Офис: <a style="color:#ff8c00;" href="tel:+74994080079"><span itemprop="telephone">8 (499) 408-00-79</span></a></p>
                                <p>Отдел продаж: <span style="font-size:16px;"><span style="color:#ff8c00;"><a style="color:#ff8c00;" href="tel:+79100034000">8 (910) 003-4000</a></span> и <span style="color:#ff8c00;"><a style="color:#ff8c00;" href="tel:+79100034100">8 (910) 003-4100</a></span></span></p>
                                <p>e-mail:  <a href="mailto:KGran@mail.ru"><span itemprop="email">KGran@mail.ru</span></a></p>
                     </div>




                </div>
           </div>
    </div>
    <br>
        <div style="clear:both;"></div>
      <div class="content">
        <div id="node-7" class="node node-article clearfix" about="/o-kompanii" typeof="sioc:Item foaf:Document">


        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div id="block-block-12" class="block block-block">
                <br>
                  <table >
                      <ul style="list-style-type:none;">
                        <li>
                               <strong style="color: rgb(255, 140, 0);">Региональный представитель: </strong>
                        </li>
                         <li style="background: url('/images/elem/voip-alt.png') -0px 0px no-repeat;padding:2px 0 2px 33px;"> 8 (910) 003-41-00  </li>
                          <li style="background: url('/images/elem/location-1.png') -0px 0px no-repeat;padding:2px 0 2px 23px;"><strong>Районы:</strong></li>
                          <li style="background: url('/images/elem/galka.png') 20px 3px no-repeat;padding:2px 0 2px 43px;" v-for="(item,index) in pr1" :key="index">{{item}}</li>
                      </ul>
                  </table>
                  </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
                <div id="block-block-11" class="block block-block">
                 <br>
                 <table >
                      <ul style="list-style-type:none;">
                        <li >
                             <strong style="color: rgb(255, 140, 0);">Региональный представитель: </strong>
                        </li>
                         <li style="background: url('/images/elem/voip-alt.png') -0px 0px no-repeat;padding:2px 0 2px 33px;"> 8 (925) 003-20-46  </li>
                         <li style="background: url('/images/elem/myemail.png') -0px 0px no-repeat;padding:2px 0 2px 33px;"><a href="mailto:zakaz@skamen.com">zakaz@skamen.com</a>  </li>
                          <li style="background: url('/images/elem/location-1.png') -0px 0px no-repeat;padding:2px 0 2px 23px;"><strong>Районы:</strong></li>
                          <li style="background: url('/images/elem/galka.png') 20px 3px no-repeat;padding:2px 0 2px 43px;" v-for="(item,index) in pr2" :key="index">{{item}}</li>
                      </ul>
                  </table>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
                    <h2 v-if="showElement">Форма обратной связи</h2>

            </div>
 </div> </div> </div> </div>
        </div>
    </div>
      </div>
</div>
</template>
<script>
export default {
head: {
      title:"Контакты «Стильный Камень»",
      meta: [
        { name: 'description', hid: 'description', content: 'Контакты производителя изделий из камня'}
      ]
    },
    data() {
        return {
          page_name:"Контакты",
          link_arr:[
            {name:"Кварцевый агломерат",url:"каталог/изделия-из-кварцевого-агломерата/"},
            {name:"Акриловый камень",url:"каталог/изделия-из-акрилового-камня/"},
            {name:"Жидкий гранит",url:"каталог/изделия-из-жидкого-гранита"},
            {name:"Натуральный камень",url:"каталог/изделия-из-натурального-камня"},
            {name:"Дерево",url:"каталог/изделия-из-дерева/"},
          ],
          adress_map:[{name:"Москва",arr:[{title:"Волгоградский проспект"}]},{name:"Московская область",arr:[{title:"Балашиха"},{title:"Люберцы"},{title:"Люберцы"},
                      {title:"Раменское"},{title:"Домодедово"},{title:"Ногинск"},{title:"Одинцовский район"},{title:"Шатура"}]},{name:"Владимирская область",arr:[{title:"г. Владимир"}]}],
          vz:[{city:'г.', addressLocality:'Москва,',streetAddress:'Волгоградский проспект, д. 32 кор. 25, 2 этаж ТЦ "Квадратный метр",',dop:'салон "Настоящая мебель"'},
              {city:'г.', addressLocality:'Балашиха,',streetAddress:'Носовихинское шоссе, вл4',dop:''},
              {city:'г.', addressLocality:'Люберцы,',streetAddress:'Инициативная улица, д. 50',dop:''},
              {city:'г.', addressLocality:'Люберцы,',streetAddress:'Новорязанское шоссе, Торговый центр "Грант",',dop:'1эт. салон "Вся мебель тут"'},
              {city:'г.', addressLocality:'Раменское,',streetAddress:'Северный район',dop:''},
              {city:'г.', addressLocality:'Домодедово,',streetAddress:'Каширское шоссе, д. 91',dop:''},
              {city:'г.', addressLocality:'Ногинск,',streetAddress:'Индустриальная улица, д. 38А',dop:''},
              {city:'', addressLocality:'Одинцовский район,',streetAddress:'дачный посёлок Лесной Городок, Молодёжная улица, д. 8',dop:''},
              {city:'г.', addressLocality:'Владимир,',streetAddress:'Большая Нижегородская улица, д. 107',dop:''},
              {city:"Московская область, г.", addressLocality:"Шатура",streetAddress:"ул. Вокзальный проезд, д.4",dop:'магазин "Велес"'}],
            pr1:["Рязань и обл.","Владимир и обл.","Орехово-Зуевский","Павлово-Посадский","Шатурский","Егорьевский","Коломенский","Озёрский","Луховицкий","Зарайский"],
            pr2:["Москва","Люберцы","Балашиха","Домодедовский","Раменский","Ногинский","Воскресенский"],
          showElement:false,
        }
    },
}
</script>
<style scoped>
.comfortable-block {
    border: 1px solid #bdd0d0;
    margin-bottom: 2rem;
    padding: 2rem;
    cursor: pointer;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
}
.comfortable-block h2 {
    margin-top: 0;
    border: none;
}
.comfortable-block span {
    display: block;
    color: #9e3f00;
    margin-bottom: 0.5rem;
    font-size: 16px;
    border: none;
}
.comfortable-block:hover {
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
    -webkit-box-shadow: 0 0 15px rgba(0,0,0,0.3);
}
.main-content ul li {margin-bottom: 10px;}
.head-map {font-size: 21px;font-weight: 700;}
.check-list ul li, .head-map {color: #c8601b;text-decoration: underline;}
.check-list ul li:before {content: "\2713"; color: #f90;}
.yandex-map {background:url(/images/ya-fix.png);cursor: pointer;background-size:cover;height: 410px;}
.contact_adress {
    font-size: 16px !important;
    color: #ff8c00 !important;
}
.block-block ul li:before {content: "";}
</style>
