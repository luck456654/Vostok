<template>
<div>
  <Proizvodim/>
  <div class="col-xs-12 nav-content offset-40">
        <div class="crumbs">
            <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumb" :class="{breadcrumb_open: showBreadcrumbsMobile}">
              <li class="breadcrumbs-links" itemprop="itemListElement" itemscope
                itemtype="http://schema.org/ListItem">
                  <nuxt-link to="/"  itemprop="item" >
                    <span itemprop="name" class="first-breadcrumb">Главная</span>
                  </nuxt-link>
                  <meta itemprop="position" content="1" />
              </li>
              <li class="breadcrumbs-links active" itemprop="itemListElement" itemscope
                itemtype="http://schema.org/ListItem">
                  <span itemprop="name">{{page_name}}</span>
                  <meta itemprop="position" content="2" />
              </li>
            </ol>
              <!--<button class="breadcrumbs-show-mobile" v-if="!showBreadcrumbsMobile" @click="showBreadcrumbsMobile = !showBreadcrumbsMobile" title="Показать подробнее">
                  <span>...</span>
              </button>-->
              <h1>{{page_name}}</h1>
        </div>
    </div>
    <div class="main-content col-sm-12">
        <p>
          Отзывы позволяют узнать независимое мнение покупателей о конкретном товаре, услугах, помогают клиенту принять правильное решение, а компании – выяснить
          недостатки собственного сервиса и оперативно их устранить. Мы регулярно проводим мониторинг ваших оценок и на их основе совершенствуем свою работу. Здесь вы
          можете оставить любой отзыв об искусственном камне и изделиях из него, установленных нашей компанией в вашем доме, офисе, заведении.
        </p>
        <span @click="showHiddenArticle=!showHiddenArticle" class="button-article" :class="{'button-article-open': showHiddenArticle}">Подробнее</span>
        <div class="hidden-block-article" v-show="showHiddenArticle">
          <h2>Полезные отзывы об изделиях</h2>
          <p>
            На этой странице вы можете почерпнуть полезную информацию о том, как в реальности происходит установка наших изделий и на что обратить внимание при
            эксплуатации. Например, в отзывах о столешницах из искусственного камня можно узнать, как на самом деле ведет себя материал при нагрузках, имеются ли
            претензии по монтажу, ошибки замера, неисполнение сроков либо брак.
          </p>
          <p>
            Читайте отзывы о столешницах из акрилового камня, и вы из первых рук узнаете, как подготовить комнату и мебель к монтажу, на что обратить внимание при
            приемке изделия.
          </p>
          <p>
            Например, из отзывов о столешницах для кухни и столах из искусственного камня можно узнать, насколько устойчив материал к физическим воздействиям, пищевым
            красителям, химикатам, сильнодействующим веществам, какой уход требуется и т. д.
          </p>
          <h2>Дельные советы и предложения</h2>
          <p>
            Мы всегда открыты для общения, поэтому внимательно относимся к вашим предложениям и советам. Наши клиенты обращают внимание на уровень сервиса, информационную
            поддержку, соблюдение сроков доставки и установки, даже на экипировку монтажников. Как правило, из мелочей складывается репутация компании, а ваше мнение
            помогает нам успешно конкурировать в жестких условиях рынка.
          </p>
          <h2>Содержание отзывов</h2>
          <p>
            Чтобы рассказ был содержательным и полезным, подкрепляйте слова фактами и подробно опишите, что понравилось, а что – нет. Интересна читателям информация об
            эксплуатации изделия после установки. Сведения, которые потенциальные покупатели хотели бы узнать из отзывов: где заказать столешницы из искусственного камня,
            каким должен быть уход за ними, уровень сервиса продавца, цены по сравнению с другими компаниями, качество товара, гарантии.
          </p>
          <p>
            Большинство отзывов о столешницах и мойках из искусственного камня – положительные. Вряд ли найдется человек, неспособный оценить инновационный материал,
            который не боится влаги, ударов, не царапается, а через много лет сохраняет первоначальное состояние. Слова благодарности из уст клиентов говорят о высоком
            профессионализме наших замерщиков, сборщиков и монтажников, а также о правильной политике компании.
          </p>
        </div>
        <div class="main-content-feedback">
          <div itemscope itemtype="http://schema.org/Review"  :id="'ec-feedback-message-'+item.id" class="ec-message" v-for="(item, index) in reviews" :key="index">
            <div style="border-style:none;position:relative;">
              <span style="display:none;" itemprop="itemReviewed">Стильный камень</span>
              <p style="float:right;">
                  <strong  itemprop="author" class="ec-message-person" itemscope itemtype="http://schema.org/Person">
                  <span itemprop="name">{{item.name}}</span>
                  </strong>
                  <span class="ec-message__date"> {{item.date}} </span></p>
              <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating" class="ec-stars">
                  <span :class="'rating-'+item.rate"></span> <span itemprop="ratingValue"> 5 </span><span itemprop="bestRating">5</span>
              </div>
              <div class="galwork3 popup-gallery" v-if="item.image">
                  <a :title="'Фотография изделия к отзыву от'+item.name" class="group1" @click.prevent="openSuperModal=item.id" :href="item.image">
                    <img style="height:131px;float:left;margin:0 10px 10px 0;" :src="item.image" alt="Отзывы">
                  </a>
              </div>
              <div v-if="openSuperModal == item.id"  class="modal-stone" >
                <span @click="openSuperModal=0" class="close-modal-stone">X</span>
                  <div class="row modal-stone-row">
                    <div class="modal-stone-prev" style="color:transparent;cursor: default;}">&#8592;</div>
                    <div class="modal-stone-img-block">
                      <img :src="item.image" class="modal-stone-img" :alt="'Фотография изделия к отзыву от'+item.name">
                    </div>
                    <div class="modal-stone-next" style="color:transparent;cursor: default;">&#8594;</div>
                  </div>
                <span class="title-modal-stone">{{ item.name }} : фотография изделия к отзыву</span>
              </div>
              <div itemprop="reviewBody">
                <p v-html="item.text"></p>
              </div>
              <strong>{{item.city}}</strong><br>
                <strong style="text-align: right;" class="review-link" v-if="item.link">Источник: <a :href="item.link">{{item.link}}</a></strong>
              <div style="clear:both;"></div>
            </div>
          </div>
        </div>
        <div class="new-feedback">
          <h2>Написать сообщение</h2>
          <form class="form well ec-form" method="post" enctype="multipart/form-data">
            <div class="form-group ec-antispam">
                <label for="ec-antispam_field" class="control-label">antismap</label>
                <input type="text" name="antispam_field" class="form-control" id="ec-antispam_field" v-model="antispam" />
            </div>

            <div class="form-group">
                <label for="ec-user_name" class="control-label">Ваше имя</label>
                <input type="text" name="user_name" class="form-control" id="ec-user_name" v-model="user_name" />
                <span class="ec-error help-block" id="ec-user_name-error"></span>
            </div>

            <div class="form-group">
                <label for="ec-user_email" class="control-label">Электронная почта</label>
                <input type="text" name="user_email" class="form-control" id="ec-user_email" v-model="email" />
                <span class="ec-error help-block" id="ec-user_email-error"></span>
            </div>

            <div class="form-group">
                <label for="ec-user_contacts" class="control-label">Город</label>
                <input type="text" name="user_contacts" class="form-control" id="ec-user_contacts" v-model="city" />
                <span class="ec-error help-block" id="ec-user_contacts-error"></span>
            </div>

            <div class="form-group">
                <label for="ec-subject" class="control-label">Тема сообщения</label>
                <input type="text" name="subject" class="form-control" id="ec-subject" v-model="subject" />
                <span class="ec-error help-block" id="ec-subject-error"></span>
            </div>
            <div class="form-group">
                <label for="ec-photo" class="control-label">Файл</label>
                <input type="file" name="photo" id="ec-photo">
                <span class="ec-error help-block" id="ec-photo-error"></span>
            </div>
            <div class="form-group">
                <label for="ec-linkpost" class="control-label">Ссылка</label>
                <input type="text" name="linkpost" id="ec-linkpost" v-model="link">
                <span class="ec-error help-block" id="ec-linkpost-error"></span>
            </div>

            <div class="form-group">
                <label for="ec-rating" class="control-label">Оценка</label>
                <input type="hidden" name="rating" id="ec-rating" value="" />
                <div class="ec-rating ec-clearfix" data-storage-id="ec-rating">
                    <div class="ec-rating-stars">
                        <span data-rating="1" @click="newFeedbackRating=1" :class="{active: newFeedbackRating>0}"></span>
                        <span data-rating="2" @click="newFeedbackRating=2" :class="{active: newFeedbackRating>1}"></span>
                        <span data-rating="3" @click="newFeedbackRating=3" :class="{active: newFeedbackRating>2}"></span>
                        <span data-rating="4" @click="newFeedbackRating=4" :class="{active: newFeedbackRating>3}"></span>
                        <span data-rating="5" @click="newFeedbackRating=5" :class="{active: newFeedbackRating>4}"></span>
                    </div>
                    <div class="ec-rating-description">
                      <span v-if="newFeedbackRating==5">Отлично! Рекомендую!</span>
                      <span v-if="newFeedbackRating==4">Хорошо</span>
                      <span v-if="newFeedbackRating==3">Средне</span>
                      <span v-if="newFeedbackRating==2">Есть и получше</span>
                      <span v-if="newFeedbackRating==1">Плохо</span>
                      <span v-if="newFeedbackRating==0">Пожалуйста, оцените по 5 бальной шкале</span>
                    </div>
                </div>
                <span class="ec-error help-block" id="ec-rating-error"></span>
            </div>

            <div class="form-group">
                <label for="ec-text" class="control-label">Ваше сообщение</label>
                <textarea name="text" class="form-control" rows="5" id="ec-text" v-model="text"></textarea>
                <span class="ec-error help-block" id="ec-text-error"></span>
            </div>

            <div class="form-actions">
                <input class="btn btn-warning" name="send" value="Отправить" v-if="!antispam&&user_name&&text" @click="sendFeedback()"/>
                <input class="btn btn-warning" name="send" value="Отправить" v-else />
            </div>
        </form>
        </div>
    </div>
</div>
</template>
<script>
import Proizvodim from "~/components/Proizvodim.vue";
export default {
  head() {
    return{
      title:"Отзывы столешниц из камня. Москва, Рязань, Владимир.",
      meta: [
        { name: 'description', hid: 'description', content: 'Отзывы о столешницах из камня разного производителя и расцветок.'}
      ],
       link: [
      { rel: 'canonical', href: 'https://стильный-камень.рф/отзывы-столешниц-из-камня.html'},
      ]
    };
    },
     components: {
      Proizvodim,
    },
    data() {
        return {
         page_name:"Отзывы",
         reviews:[
          {id:"10",name:"Марина Афонина",date:"2020-01-22 20:00:00",rate:"5",image:"https://стильный-камень.рф/uploads/user_files/file_2020-01-22_20-00-10.jpg",
           city:"г.Москва",link:"",
           text:'Спасибо фирме «Стильный камень» за столешницу на нашей кухне. Аккуратно, профессионально, качественно. 5 лет служит, претензий - ноль.'},
          {id:"9",name:"Наталья Максимова",date:"2019-12-24 09:01:00",rate:"5",image:"https://стильный-камень.рф/uploads/user_files/file_2019-12-24_09-01-49.jpg",
           city:"г.Орехово-Зуево",link:"https://vk.com/club23855590?w=wall-23855590_948%2Fall",
           text:'Всем доброго времени!<br>В начале месяца делала заказ столешницы и раковины из искусственного камня на кухню в "Стильный камень".<br>Хочу поделиться опытом и впечатлениями. <br>Столешницу я выбрала светлую, раковину другого цвета, ближе к брусничному. Когда выбирала были сомнения не будет ли маркой светлая поверхность. Но сейчас в процессе эксплуатации все сомнения отпали, очень замечательный цвет (1208- столешница, 1212- мойка). Пятна от чая, кофе отмываются очень легко, и вообще загрязнения гораздо легче убрать чем с обычной ДСП столешницы. Два раза уже роняла нечаянно крышку от бидона на столешницу, никаких сколов не заметила, все ровно. Так что по практичности ставлю 5 баллов.<br> Теперь пройдусь по процедуре заказа.<br> Все сроки мы обсудили во время первого общения и, надо сказать, фирма не подвела, все сделали как было оговорено. Я в восторге! Цена тоже порадовала, у других производителей дороже.<br> По выбору цвета: образцов много, сначала даже глаза разбежались. Но решила остановиться на глянце. Он выглядит более симпатично.<br> Отдельно хочу отметить работу замерщика и бригады установщиков. Все делали очень умело, корректно. Столешница у меня с ногой, Г- образная, состояла из двух частей. Шов сделали так аккуратно, что визуально его не видно!<br> За 30 мин до приезда созвон, работали очень четко, мусор и упаковку за собой убрали.<br> Огромное спасибо Николаю Калинину и всем ребятам, которые работали.<br> Я в восхищении!<br>Друзья и коллеги по работе заценили обновление интерьера, многие хотят тоже установить и себе.'},
          {id:"8",name:"Катерина",date:"2018-12-14 14:42:53",rate:"5",image:"https://стильный-камень.рф/uploads/user_files/file_2018-12-14_14-42-53.jpg",
           city:"г.Москва",link:"https://vk.com/club23855590?w=wall-23855590_57",
           text:'Подоконник отлично вписался в дизайн комнаты по цвету. Ребята молодцы!'},
          {id:"7",name:"Валентина Андреева",date:"2016-12-28 09:00:00",rate:"5",image:"https://стильный-камень.рф/uploads/user_files/file_2017-10-02_16-21-35.jpg",
           city:"г.Москва",link:"https://vk.com/club23855590?w=wall-23855590_38%2Fall",
           text:'Спасибо большое!!! Наконец все в сборе:) и стол на балконе, и столешница на кухне! Выглядит Супер!'},
          {id:"6",name:"Светлана Смирнова",date:"2016-10-10 19:09:00",rate:"5",image:"https://стильный-камень.рф/uploads/user_files/file_2016-10-28_19-09-08.jpg",
           city:"Москва",link:"https://vk.com/club23855590?w=wall-23855590_37",
           text:'Спасибо большое за столешницу. Мы с мужем результатом очень довольны.<br>Ребята молодцы, сделали все быстро и качественно.<br>Цена очень порадовала.<br>Заказали светло-бежевого цвета в мелкую светлую крапинку, смотрится супер.'},
          {id:"5",name:"Василий",date:"2016-09-26 11:35:00",rate:"5",image:"https://стильный-камень.рф/uploads/user_files/file_2016-09-26_11-35-09.jpg",
           city:"г. Рязань",link:"https://vk.com/club23855590?w=wall-23855590_35",
           text:'Отличная столешница по цене в 1.5 раза дешевле, чем в любом другом месте.'},
          {id:"4",name:"Валентина Андреева",date:"2016-06-09 22:07:00",rate:"5",image:"https://стильный-камень.рф/uploads/user_files/file_2016-06-09_22-07-17.jpg",
           city:"г. Москва",link:"https://vk.com/club23855590?w=wall-23855590_34%2Fall",
           text:'Наконец то! Сбылась мечта, и на балконе появился стол-подоконник! И, хотя путь его к нам был непрост, результат стоил ожиданий!!!<br> Ребятам монтажникам отдельное СПАСИБО за терпение и усилия, приложенные для воплощения в жизнь данного проекта!'},
          {id:"3",name:"Юлия",date:"2016-05-27 15:09:00",rate:"5",image:"https://стильный-камень.рф/uploads/user_files/file_2016-05-27_15-09-44.jpg",
           city:"г. Москва",link:"https://vk.com/club23855590?w=wall-23855590_33",
           text:'Заказала столешницу,изготовили раньше срока.Порадовала цена и качество!Сделали все на высшем уровне!Отдельное спасибо менеджеру Андрею Бабаеву за профессионализм в своём деле!'}, 
          {id:"2",name:"Катерина",date:"2016-04-05 01:00:00",rate:"5",image:"",
           city:"г. Коломна",link:"http://vk.com/club23855590?w=wall-23855590_31",
           text:'Спасибо, все очень понравилось . Сервис, работа замерщиков и менеджера на 5+<br> Очень порадовала и цена у конкурентов в Коломне нам предложили цену в 3 раза выше и срок изготовления в 2 раза дольше.<br> В общем результатом очень довольна'},
          {id:"1",name:"Светлана",date:"2016-03-17 13:41:00",rate:"5",image:"",
           city:"г. Москва",link:"http://vk.com/club23855590?w=wall-23855590_30",
           text:'Спасибо огромное за профессиональную и качественную работу!!!!<br> Изделие изготовлено раньше срока, очень стильно и красиво смотрится!!!'},        
         ],
         showBreadcrumbsMobile:false,
         openSuperModal:0,
         showHiddenArticle:false,
         antispam:'',
         user_name:'',
         email:'',
         city:'',
         subject:'',
         link:'',
         newFeedbackRating:0,
         text:'',
         newReviews:{},
         id:10,
      }
    },
    /*async asyncData({
        $axios,
        app,
        error
    }) {
          return await app.$axios
            .$get(
                `https://стильный-камень.рф/data/katalog/data_reviews.php?data=reviews`
            )
            .then((response) => {
                return {                   
                    reviews: response.response,
                };
            })
            .catch(err => {
                error(err);
            });
    },*/

    methods: {
        sendFeedback() {
          var Data = new Date();
          var  Year = Data.getFullYear();
          var  Month = Data.getMonth();
          var  Day = Data.getDate();
          var  Hour = Data.getHours();
            if (Hour >=21) {
            var  newHour = Hour-21;
            }
            else {
            var newHour = Hour+3;}
          var  Minutes = Data.getMinutes();
          var  Seconds = Data.getSeconds();
          var newData = (Year + "-" + Month + "-" + Day + " " + newHour + ":" + Minutes + ":" + Seconds);
          newReviews.id=this.id+1;
          newReviews.name=this.user_name;
          newReviews.date=this.newData;
          newReviews.rate=this.newFeedbackRating;
          newReviews.image="";
          newReviews.city=this.city;
          newReviews.link=this.link;
          newReviews.text=this.text;
          console.log(newReviews.id);
        },
  }
}
</script>
<style scoped>
.container ul li::before{
  content:none;
}
.main-content strong {
  color: #1d1d1d;
  font-weight: bold;
}
h2,.h2 {
  margin-bottom: 1rem;
  margin-top: 2rem;
}
.button-article {
  padding: 0;
  color: black;
  cursor: pointer;
  margin-bottom: 5px;
  border-bottom: 1px solid transparent;
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.42857143;
  font-family: 'calibriregular',Arial, Verdana, Times, sans-serif;

}
.button-article-open {
  border-bottom: 1px dotted black;
}
.hidden-block-article {
  margin-top: -1rem;
  margin-left: 15px;
}
.ec-message{
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: rgba(189, 208, 208, 0.36);
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
}
.main-content strong {
    color: #1d1d1d;
    font-weight: bold;
}
.ec-message strong{
  font-size: 14px;
  display: block;
  margin-top: -5px;
  font-family: 'calibriregular',Arial, Verdana, Times, sans-serif;
}
.ec-message-person span{
  float: right;
  font-size: 17px!important;
  font-family: Proxima, Times!important;
  display: block;
  padding-bottom: 5px;
  margin-top: -5px;
}
.ec-message__date {
    clear: both;
    display: block;
    font-size: 12px;
    color: #999;
    padding-left: 20px;
    float: right;
}
.ec-message p {
  margin-top: 0px;
}
.reviewBody {
  font-family: Proxima, Times;
}
.reviewBody p{
  margin-top: 2.2rem;
  font-size: 16px;
  line-height: 22px;
}
.ec-stars {
    background: url(https://стильный-камень.рф/assets/components/easycomm/img/web/ec-stars.png) 0 -16px repeat-x;
    overflow: hidden;
    width: 96px;
    height: 16px;
    margin: 10px 0;
}
.ec-stars span {
    background: url(https://стильный-камень.рф/assets/components/easycomm/img/web/ec-stars.png) 0 0 repeat-x;
    display: block;
    height: 16px;
    width: 0px;
}
.ec-stars span.rating-1 {
    width: 16px;
}
.ec-stars span.rating-2 {
    width: 36px;
}
.ec-stars span.rating-3 {
    width: 56px;
}
.ec-stars span.rating-4 {
    width: 76px;
}
.ec-stars span.rating-5 {
    width: 96px;
}
.review-link{
  position: absolute;
  top: calc(100% - 15px);
  width: 100%;
}
/*** Форма отправки ***/
.ec-antispam {display:none;}
.well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}
.form-group {
    margin-bottom: 15px;
    border-style:none;
}
.form-actions {
    border-style:none;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.ec-rating-stars span {
    background: url(https://стильный-камень.рф/assets/components/easycomm/img/web/ec-stars.png) 0 -16px no-repeat;
    width: 20px;
    height: 16px;
    float: left;
    display: block;
    margin: 0;
    cursor: pointer;
}
.ec-rating-stars span.active {
    background-position: 0 0;
}
.ec-rating-description {
  /*float: left;*/
  padding-top: 1px;
  color: #999;
  display:block;
  font-size: 14px;
}
input[type="file"] {
    display: block;
}
#ec-linkpost {
  border: 1px solid #ccc;
    border-radius: 4px;
    height: 24px;
    margin-left: 10px;
}
textarea.form-control {
    height: auto;
}
textarea {resize:none;}
</style>
