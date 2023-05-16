<template>
<div>
  <div class="row" v-if="showButton">
      <div class="material-example col-xs-3 col-sm-3 col-xs-offset-6 col-sm-offset-6 col-md-2 col-md-offset-8" @click="changeMaterial1()">
        <span class="active" v-if="selectMaterial1">Из камня</span>
        <span v-else>Из камня</span>
      </div>
      <div class="material-example col-xs-3 col-sm-3 col-md-2" @click="changeMaterial2()">
         <span class="active" v-if="selectMaterial2">Из дерева</span>
        <span v-else>Из дерева</span>
      </div>
</div>
<div class="row" >
  <div class="col-sm-12 col-md-3">
    <div class="i-tab__names">
      <span class="names-type" v-if="selectActive1">Прямая столешница</span>
      <span class="names-type" v-if="selectActive2">Г-образная столешница</span>
      <span class="names-type" v-if="selectActive3">П-образная столешница</span>
    </div>
  </div>
 <div class="modules col-sm-12 col-md-9">
    <div class="main-filter">
      <ul>
        <li class="filter-form active"  v-if="selectActive1" @click="changeActive1()">
          <span>Прямая столешница</span>
        </li>
        <li class="filter-form"  v-else @click="changeActive1()">
          <span>Прямая столешница</span>
        </li>
        <li class="filter-form active" v-if="selectActive2" @click="changeActive2()">
           <span>Г-образная столешница</span>
        </li>
        <li class="filter-form" v-else @click="changeActive2()">
           <span>Г-образная столешница</span>
        </li>
        <li class="filter-form active" v-if="selectActive3" @click="changeActive3()">
          <span>П-образная столешница</span>
        </li>
        <li class="filter-form" v-else @click="changeActive3()">
          <span>П-образная столешница</span>
        </li>
      </ul>
    </div>
  </div>
 </div>
 <div class="i-tab"  v-if="selectMaterial1">
  <div class="i-tab__items">
    <!-- first item -->
    <div class="row i-tab__item active" v-if="selectActive1">
      <div class="col-sm-4 col-md-3">
        <div class="i-tab__content" v-if="$store.state.ismobile == 'pc'">
          <div class="i-tab__content__price"> {{prices.first_price}} <span>Р</span></div>
          <p>В стоимость входит:</p>
            <ul class="i-tab__content__list">
              <li>Кварцевый камень <span>Avant Quartz(1102)</span></li>
              <li>Обработка кромкой <span>№1 (3мм)</span> или <span>№2 (R3)</span></li>
              <li>Пристеночный бортик</li>
              <li>Вырез под мойку</li>
              <li>Вырез под варочную панель</li>
              <li>Монтаж</li>
            </ul>
           <a href="" rell="nofollow" class="i-tab__button"  v-if="showButton">Рассчитать стоимость</a>
        </div>
        <div class="i-tab__content_mobile" v-if="$store.state.ismobile == 'smartphone'">
          <div class="i-tab__content__price"> {{prices.first_price}} <span>Р</span></div>
          <div v-on:click="showDetailed1 = !showDetailed1">
            <p class="toggle-detailed">В стоимость входит:</p>
              <span class="caret-default" v-if="!showDetailed1"></span>
              <span class="caret" v-else></span>
          </div>
            <ul class="i-tab__content__list" v-if="showDetailed1">
              <li>Кварцевый камень <span>Avant Quartz(1102)</span></li>
              <li>Обработка кромкой <span>№1 (3мм)</span> или <span>№2 (R3)</span></li>
              <li>Пристеночный бортик</li>
              <li>Вырез под мойку</li>
              <li>Вырез под варочную панель</li>
              <li>Монтаж</li>
            </ul>
          <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
        </div>
      </div>
      <div class="col-sm-8 col-md-9">
        <div class="i-tab__image" v-if="$store.state.ismobile == 'smartphone'">
          <picture>
            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-1m.webp" class="img-responsive" alt="">
            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-1m.jpg" class="img-responsive" alt="">
            <img src="https://стильный-камень.рф/pictures/main/workdesk-1m.jpg" class="img-responsive" alt="">
          </picture>
        </div>
        <div class="i-tab__image" v-else>
          <picture>
            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-1.webp" class="img-responsive" alt="">
            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-1.jpg" class="img-responsive" alt="">
            <img src="https://стильный-камень.рф/pictures/main/workdesk-1.jpg" class="img-responsive" alt="">
          </picture>
        </div>
      </div>
    </div>
    <!-- second item -->
    <div class="row i-tab__item" v-if="selectActive2">
       <div class="col-sm-4 col-md-3">
        <div class="i-tab__content" v-if="$store.state.ismobile == 'pc'">
          <div class="i-tab__content__price"> {{prices.second_price}} <span>Р</span></div>
            <p>В стоимость входит:</p>
              <ul class="i-tab__content__list">
                <li>Кварцевый камень <span>Cuprus Grey</span></li>
                <li>Обработка кромкой <span>А-1</span></li>
                <li>Пристеночный бортик</li>
              </ul>
            <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
          </div>
          <div class="i-tab__content" v-if="$store.state.ismobile == 'smartphone'">
            <div class="i-tab__content__price"> {{prices.second_price}} <span>Р</span></div>
              <div v-on:click="showDetailed2 = !showDetailed2">
                <p class="toggle-detailed">В стоимость входит:</p>
                <span class="caret-default" v-if="!showDetailed2"></span>
                <span class="caret" v-else></span>
              </div>
                <ul class="i-tab__content__list" v-if="showDetailed2">
                  <li>Кварцевый камень <span>Cuprus Grey</span></li>
                  <li>Обработка кромкой <span>А-1</span></li>
                  <li>Пристеночный бортик</li>
                </ul>
              <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
            </div>
          </div>
        <div class="col-sm-8 col-md-9">
          <div class="i-tab__image" v-if="$store.state.ismobile == 'smartphone'">
          <picture>
            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-2m.webp" class="img-responsive" alt="">
            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-2m.jpg" class="img-responsive" alt="">
            <img src="https://стильный-камень.рф/pictures/main/workdesk-2m.jpg" class="img-responsive" alt="">
          </picture>
        </div>
        <div class="i-tab__image" v-else>
          <picture>
            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-2.webp" class="img-responsive" alt="">
            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-2.jpg" class="img-responsive" alt="">
            <img src="https://стильный-камень.рф/pictures/main/workdesk-2.jpg" class="img-responsive" alt="">
          </picture>
        </div>
        </div>
      </div>
      <!-- third item -->
      <div class="row i-tab__item" v-if="selectActive3">
        <div class="col-sm-4 col-md-3">
          <div class="i-tab__content" v-if="$store.state.ismobile == 'pc'">
            <div class="i-tab__content__price"> {{prices.third_price}} <span>Р</span></div>
            <p>В стоимость входит:</p>
              <ul class="i-tab__content__list">
                <li>Кварцевый камень <span>Cuprus Grey</span></li>
                <li>Обработка кромкой <span>А-1</span></li>
                <li>Пристеночный бортик</li>
                <li>Вырез под мойку</li>
                <li>Замер, доставка и монтаж</li>
              </ul>
            <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
          </div>
          <div class="i-tab__content" v-if="$store.state.ismobile == 'smartphone'">
            <div class="i-tab__content__price"> {{prices.third_price}} <span>Р</span></div>
            <div v-on:click="showDetailed3 = !showDetailed3">
              <p class="toggle-detailed">В стоимость входит:</p>
                <span class="caret-default" v-if="!showDetailed3"></span>
                <span class="caret" v-else></span>
            </div>
              <ul class="i-tab__content__list" v-if="showDetailed3">
                <li>Кварцевый камень <span>Cuprus Grey</span></li>
                <li>Обработка кромкой <span>А-1</span></li>
                <li>Пристеночный бортик</li>
                <li>Вырез под мойку</li>
                <li>Замер, доставка и монтаж</li>
              </ul>
              <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
           </div>
          </div>
          <div class="col-sm-8 col-md-9">
            <div class="i-tab__image" v-if="$store.state.ismobile == 'smartphone'">
          <picture>
            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-3m.webp" class="img-responsive" alt="">
            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-3m.jpg" class="img-responsive" alt="">
            <img src="https://стильный-камень.рф/pictures/main/workdesk-3m.jpg" class="img-responsive" alt="">
          </picture>
        </div>
        <div class="i-tab__image" v-else>
          <picture>
            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-3.webp" class="img-responsive" alt="">
            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-3.jpg" class="img-responsive" alt="">
            <img src="https://стильный-камень.рф/pictures/main/workdesk-3.jpg" class="img-responsive" alt="">
          </picture>
        </div>
          </div>
        </div>
    </div>
</div>
<div class="i-tab"  v-if="selectMaterial2">
  <div class="i-tab__items">
    <!-- first item -->
    <div class="row i-tab__item active" v-if="selectActive1">
      <div class="col-sm-4 col-md-3">
        <div class="i-tab__content" v-if="$store.state.ismobile == 'pc'">
          <div class="i-tab__content__price"> {{prices.fourth_price}} <span>Р</span></div>
          <p>В стоимость входит:</p>
            <ul class="i-tab__content__list">
              <li>Столешница из дерева <span>ТИП 1</span></li>
              <li>Обработка кромкой <span>№1 (3мм)</span> или <span>№2 (R3)</span></li>
              <li>Пристеночный бортик</li>
              <li>Вырез под мойку</li>
              <li>Вырез под варочную панель</li>
              <li>Монтаж</li>
            </ul>
           <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
        </div>
        <div class="i-tab__content_mobile" v-if="$store.state.ismobile == 'smartphone'">
          <div class="i-tab__content__price"> {{prices.fourth_price}} <span>Р</span></div>
          <div v-on:click="showDetailed1 = !showDetailed1">
            <p class="toggle-detailed">В стоимость входит:</p>
              <span class="caret-default" v-if="!showDetailed1"></span>
              <span class="caret" v-else></span>
          </div>
            <ul class="i-tab__content__list" v-if="showDetailed1">
              <li>Столешница из дерева <span>ТИП 1</span></li>
              <li>Обработка кромкой <span>№1 (3мм)</span> или <span>№2 (R3)</span></li>
              <li>Пристеночный бортик</li>
              <li>Вырез под мойку</li>
              <li>Вырез под варочную панель</li>
              <li>Монтаж</li>
            </ul>
          <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
        </div>
      </div>
      <div class="col-sm-8 col-md-9">
        <div class="i-tab__image" v-if="$store.state.ismobile == 'smartphone'">
          <picture>
            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-1m.webp" class="img-responsive" alt="">
            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-1m.jpg" class="img-responsive" alt="">
            <img src="https://стильный-камень.рф/pictures/main/workdesk-1m.jpg" class="img-responsive" alt="">
          </picture>
        </div>
        <div class="i-tab__image" v-else>
          <picture>
            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-1.webp" class="img-responsive" alt="">
            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-1.jpg" class="img-responsive" alt="">
            <img src="https://стильный-камень.рф/pictures/main/workdesk-1.jpg" class="img-responsive" alt="">
          </picture>
        </div>
      </div>
    </div>
    <!-- second item -->
      <div class="row i-tab__item" v-if="selectActive2">
        <div class="col-sm-4 col-md-3">
          <div class="i-tab__content" v-if="$store.state.ismobile == 'pc'">
          <div class="i-tab__content__price"> {{prices.fifth_price}} <span>Р</span></div>
            <p>В стоимость входит:</p>
              <ul class="i-tab__content__list">
                <li>Столешница из дерева <span>ТИП 2</span></li>
                <li>Обработка кромкой <span>А-1</span></li>
                <li>Пристеночный бортик</li>
              </ul>
            <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
          </div>
          <div class="i-tab__content" v-if="$store.state.ismobile == 'smartphone'">
            <div class="i-tab__content__price"> {{prices.fifth_price}} <span>Р</span></div>
            <div v-on:click="showDetailed2 = !showDetailed2">
              <p class="toggle-detailed">В стоимость входит:</p>
                <span class="caret-default" v-if="!showDetailed2"></span>
                <span class="caret" v-else></span>
            </div>
              <ul class="i-tab__content__list" v-if="showDetailed2">
                <li>Столешница из дерева <span>ТИП 2</span></li>
                <li>Обработка кромкой <span>А-1</span></li>
                <li>Пристеночный бортик</li>
              </ul>
            <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
          </div>
        </div>
        <div class="col-sm-8 col-md-9">
          <div class="i-tab__image" v-if="$store.state.ismobile == 'smartphone'">
          <picture>
            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-2m.webp" class="img-responsive" alt="">
            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-2m.jpg" class="img-responsive" alt="">
            <img src="https://стильный-камень.рф/pictures/main/workdesk-2m.jpg" class="img-responsive" alt="">
          </picture>
        </div>
        <div class="i-tab__image" v-else>
          <picture>
            <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-2.webp" class="img-responsive" alt="">
            <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-2.jpg" class="img-responsive" alt="">
            <img src="https://стильный-камень.рф/pictures/main/workdesk-2.jpg" class="img-responsive" alt="">
          </picture>
        </div>
        </div>
      </div>
      <!-- third item -->
        <div class="row i-tab__item" v-if="selectActive3">
          <div class="col-sm-4 col-md-3">
            <div class="i-tab__content" v-if="$store.state.ismobile == 'pc'">
              <div class="i-tab__content__price"> {{prices.sixth_price}} <span>Р</span></div>
                <p>В стоимость входит:</p>
                  <ul class="i-tab__content__list">
                    <li>Столешница из дерева <span>ТИП 3</span></li>
                    <li>Обработка кромкой <span>А-1</span></li>
                    <li>Пристеночный бортик</li>
                    <li>Вырез под мойку</li>
                    <li>Замер, доставка и монтаж</li>
                  </ul>
                <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
              </div>
              <div class="i-tab__content" v-if="$store.state.ismobile == 'smartphone'">
                <div class="i-tab__content__price"> {{prices.sixth_price}} <span>Р</span></div>
                  <div v-on:click="showDetailed3 = !showDetailed3">
                    <p class="toggle-detailed">В стоимость входит:</p>
                      <span class="caret-default" v-if="!showDetailed3"></span>
                      <span class="caret" v-else></span>
                  </div>
                    <ul class="i-tab__content__list" v-if="showDetailed3">
                      <li>Столешница из дерева <span>ТИП 3</span></li>
                      <li>Обработка кромкой <span>А-1</span></li>
                      <li>Пристеночный бортик</li>
                      <li>Вырез под мойку</li>
                      <li>Замер, доставка и монтаж</li>
                    </ul>
                  <a href="" rell="nofollow" class="i-tab__button" v-if="showButton">Рассчитать стоимость</a>
                </div>
              </div>
              <div class="col-sm-8 col-md-9">
                <div class="i-tab__image" v-if="$store.state.ismobile == 'smartphone'">
                  <picture>
                    <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-3m.webp" class="img-responsive" alt="">
                    <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-3m.jpg" class="img-responsive" alt="">
                    <img src="https://стильный-камень.рф/pictures/main/workdesk-3m.jpg" class="img-responsive" alt="">
                  </picture>
                </div>
                <div class="i-tab__image" v-else>
                  <picture>
                    <source type="image/webp" srcset="https://стильный-камень.рф/pictures/main/workdesk-3.webp" class="img-responsive" alt="">
                    <source type="image/jpg" srcset="https://стильный-камень.рф/pictures/main/workdesk-3.jpg" class="img-responsive" alt="">
                    <img src="https://стильный-камень.рф/pictures/main/workdesk-3.jpg" class="img-responsive" alt="">
                  </picture>
                </div>
              </div>
            </div>
    </div>
</div>
</div>
</template>
<style scoped>
.main-filter ul li:before {content: "";color: transparent;border: none;}
.filter-form {display: inline-block;}
.main-filter .active{color:red;}

.names-type {margin-top: 20px!important;display: inline-block;color: #59595c;font-size: 16px;-webkit-margin-before: 0.83em;-webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;-webkit-margin-end: 0px;font-family: displaepro;text-transform: uppercase;}
.i-tab__content_mobile ul li, .i-tab__content ul, .i-tab__content ul li {font-size: 14px;color: #171717;font-family: Proxima, Times;margin-bottom: 10px;}
.i-tab__content__price  {font-size: 24px;color: #ff8300;margin: 10px 0 15px 0;}
.i-tab__content__price span {color: #445d5d;position: relative;display: inline-block;}
.i-tab__content__price span:after {position: absolute;top: 18px;left: 0px;background: #445d5d;
    height: 2px;width: 10px;content: ' ';display: block;}
.material-example {text-transform: uppercase;color: #445d5d;font-size: 14px;text-align: center;}
.material-example span {cursor: pointer;}
.material-example .active{color: #fe8200;text-decoration: underline;}
.toggle-detailed {display: inline-block;}
.caret-default {
   border-style: solid;
	border-width: 0.12em 0.12em 0 0;
	content: '';
	display: inline-block;
	height: 0.4em;
	left: 0;
	position: relative;
	/*bottom: 0.12em;*/
	transform: rotate(45deg);
	vertical-align: middle;
	width: 0.4em;
  color: #808080;
  font-family: displaepro-bold;
}
.caret {
    border-style: solid;
	border-width: 0.12em 0.12em 0 0;
	content: '';
	display: inline-block;
	height: 0.4em;
	left: 0;
	position: relative;
	bottom: 0.1em;
	transform: rotate(135deg);
	vertical-align: middle;
	width: 0.4em;
  color: #808080;
  font-family: displaepro-bold;
}
.main-filter li {
    display: inline-block;
    color: #445d5d;
    font-size: 10px;
    opacity: 1;
    text-transform: uppercase;
    padding: 12px 4px;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    margin-bottom: 10px;
    cursor: pointer;
}
.main-filter li span {border: none;}
.main-filter .active span {color: #e95c00;text-decoration: underline;}
.i-tab {margin: 10px 0 50px 0;}
.i-tab__content__list {margin-top: 0px;}
.i-tab__content__list li span {display: inline-block;line-height: 1.1em;border-bottom: 1px dashed #171717;}
.i-tab__button {cursor: pointer;position: relative;z-index: 10;text-transform: uppercase;font-size: 16px;display: inline-block;
    color: white !important;text-decoration: none !important;border: 2px solid #9f4000;width: calc(100% - 30px);background: #9f4000;
    border-radius: 15px;padding: 7px 15px;text-align: center;margin: 20px 5px 5px 5px;vertical-align: middle;-webkit-transition: all .4s ease;
    transition: all .4s ease;-webkit-box-shadow: 0px 2px 7px 0px rgba(50, 50, 50, 0.75);box-shadow: 0px 2px 7px 0px rgba(50, 50, 50, 0.75);}
.i-tab__button:hover {background: #ab5219;}
@media (min-width: 501px) {
  .main-filter li {
      display: inline-block;
      background: #e95c00;
      color: #fff;
      font-size: 10px;
      opacity: 1;
      text-transform: uppercase;
      padding: 12px 4px;
      transition: all .4s ease;
      -webkit-transform: skewX(45deg);
      -ms-transform: skewX(45deg);
      transform: skewX(45deg);
      border: 2px solid #9f4000;
      margin-bottom: 10px;}
    .main-filter li span {-webkit-transform: skewX(-45deg);
      -ms-transform: skewX(-45deg);
      transform: skewX(-45deg);
      display: inline-block;
      border: none;}
    .main-filter .active {
      border: none;
      background-color: #fff;}
    .main-filter .active span {text-decoration: none;}
    .main-filter li:hover {
    background: #eef6f6;
    color: #445d5d !important;}
}
@media (min-width: 768px) {
    .main-filter li {padding: 12px 4px;}
    .i-tab__button {width: 140%;}
}
@media (min-width: 1200px) {
    .main-filter li {font-size:12px;padding: 12px 12px;}
    .material-example {font-size: 17px;}
}
@media (max-width: 500px) {
 .main-filter {margin-top: -40px;}
  .i-tab__names {top: -5px;position: relative;}
  .material-example {text-align: left;}
  .material-example span {width: 140%;display: inline-block;position: relative;left: -10px;}
    .main-filter {overflow: auto;white-space: nowrap;}
    .i-tab {margin: -20px 0 50px 0;}
    .i-tab__content__list {margin-top: -10px;border: solid 1px #ddd;border-radius: 6px;width: fit-content;padding: 10px;}
    .i-tab__content__list li {border: none;}
    .i-tab__content__price {float:right;top: -20px;position: relative;}
}
</style>
<script>
export default {
  data() {
        return {
            prices:{first_price: "64 448",second_price: "95 600",third_price:"122 466",fourth_price: "44 950",fifth_price: "77 435",sixth_price: "102 412",},
            selectActive1: true,
            selectActive2: false,
            selectActive3: false,
            selectMaterial1: true,
            selectMaterial2: false,
            showDetailed1: false,
            showDetailed2: false,
            showDetailed3: false,
            showButton: false,
        };
    },
    methods: {
    changeActive1() {
      this.selectActive1 = true;
      this.selectActive2 = false;
      this.selectActive3 = false;
    },
    changeActive2() {
      this.selectActive1 = false;
      this.selectActive2 = true;
      this.selectActive3 = false;
    },
     changeActive3() {
      this.selectActive1 = false;
      this.selectActive2 = false;
      this.selectActive3 = true;
    },
  }
}
</script>
