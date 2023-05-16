<template>
<div>

<button class="btn-board" v-bind:class="{active: !currentBoard}"   @click="changeDashboard(0)">Подбор столешницы</button>
         <button class="btn-board" v-bind:class="{active: currentBoard}"  @click="changeDashboard(1)">Обратный звонок</button>
        <div v-if="currentBoard == 2">
    	    Калькулятор
    	</div>
    	<div class="cb"  v-if="currentBoard== 1">
    	     <div v-if="currentCBP == 0" style="text-align: left;">
    	       <form >
        	        <input type="text" id="cb_name" placeholder="Имя"  v-bind:class="[isActive1 ? 'form-alert' : '']" v-model="cb_name" required/>
        	       <input type="tel" id="cb_phone" placeholder="Телефон без +7"  v-bind:class="[isActive2 ? 'form-alert' : '']" v-model="cb_phone"  v-phoned required/>
        	       <br>
        	       <button class="btn-select active" v-if="cb_phone.length == 13&&cb_name" @click.prevent="changeCBP(),sendForm2()">Отправить</button>
                    <button class="btn-select-fade" @click.prevent="checkForm2()" v-else >Отправить</button>
                </form>
            </div>
            <div v-if="currentCBP == 1">
                <span>Информация успешно отправлена!<br> Мы скоро перезвоним Вам!</span>
            </div>

    	</div>
    	<div class="tabletop_selection"  v-if="currentBoard == 0">
    	    <div class="progress_block" v-if="currentStage != 0&&currentStage != 8">
    	        <div class="progress_bar">
    	            <div class="progress_tail_7" v-if="currentStage == 7"></div>
    	            <div class="progress_tail_6" v-if="currentStage == 6"></div>
    	            <div class="progress_tail_5" v-if="currentStage == 5"></div>
    	            <div class="progress_tail_4" v-if="currentStage == 4"></div>
    	            <div class="progress_tail_3" v-if="currentStage == 3"></div>
    	            <div class="progress_tail_2" v-if="currentStage == 2"></div>
    	            <div class="progress_tail_1" v-if="currentStage == 1"></div>
    	        </div>
    	    </div>

    	    <div class="stage start" v-if="currentStage == 0">
            <picture @click="changeStage(1)">
                        <source type="image/webp"  srcset="https://стильный-камень.рф/assets/newdisign/img/mobile/podbor_stoleshnicy.webp" class="start_icon" alt="Начать подбор">
                        <source type="image/jpg" srcset="https://стильный-камень.рф/assets/newdisign/img/mobile/podbor_stoleshnicy.jpg" class="start_icon" alt="Начать подбор">
                        <img src="https://стильный-камень.рф/assets/newdisign/img/mobile/podbor_stoleshnicy.jpg" class="start_icon" alt="Начать подбор">
            </picture><br>
    	         <button class="btn-select btn-start" v-bind:class="{active: currentStep}" @click="changeStage(1)">Начать подбор</button>
    	    </div>
    	    <div class="stage stage1" v-if="currentStage == 1">
        	    <h3>На каком этапе у Вас ремонт?</h3>
        	    <input type="radio" id="kitchen_with" value="С гарнитуром" v-model="status_kitchen">
                <label for="kitchen_with">Кухонный гарнитур уже установлен</label>
                <br>
                <input type="radio" id="kitchen_without" value="Без гарнитура" v-model="status_kitchen">
                <label for="kitchen_without">Кухонный гарнитур еще не установлен</label>
                <br>
                <input type="radio" id="kitchen_empty" value="Черновой ремонт" v-model="status_kitchen">
                <label for="kitchen_empty">На кухне пока черновой ремонт</label>
                <br>

                <br>
                <button class="btn-select" @click="changeStage(2)" v-bind:class="{active: currentStep}" v-if="status_kitchen">Следующий шаг</button>
                <button class="btn-select-fade" v-else>Следующий шаг</button>
            </div>

            <div class="stage stage2" v-if="currentStage == 2">
        	    <h3>Какая форма столешницы Вас интересует?</h3>
        	    <input type="radio" id="one" value="Прямая" v-model="shape">
                <label for="one">Прямая столешница</label>
                <br>
                <input type="radio" id="two" value="Г-образная" v-model="shape">
                <label for="two">Г-образная столешница</label>
                <br>
                <input type="radio" id="three" value="П-образная" v-model="shape">
                <label for="three">П-образная столешница</label>
                <br>
                <input type="radio" id="four" value="Другая"  v-model="shape">
                <label for="four">Указать свой:</label>
                <input type="text" id="five" placeholder="Другая форма" @input="shape = 'Другая'"  v-model="shape_text">
                 <br>

                <button class="btn-select" v-bind:class="{active: currentStep}" @click="changeStage(3)" v-if="shape||shape_text">Следующий шаг</button>
                <button class="btn-select-fade" v-else>Следующий шаг</button>
                <button class="btn-select" v-bind:class="{active: !currentStep}"  @click="changeStage(1)">Предыдущий шаг</button>
            </div>

            <div class="stage stage2" v-if="currentStage == 3">
        	    <h3>Требуются ли дополнительные элементы?</h3>
        	    <input type="checkbox" id="bar" value="Барная стойка" v-model="add_elements">
                <label for="bar">Барная стойка</label>
                <br>
                <input type="checkbox" id="table" value="Стол" v-model="add_elements">
                <label for="table">Стол</label>
                <br>
                <input type="checkbox" id="island" value="Остров" v-model="add_elements">
                <label for="island">Остров</label>
                <br>
                <input type="checkbox" id="washing" value="Мойка из камня" v-model="add_elements">
                <label for="washing">Мойка из камня</label>
                <br>
                <input type="checkbox" id="wall" value="Стеновая панель" v-model="add_elements">
                <label for="wall">Стеновая панель</label>
                <br>
                <button class="btn-select" @click="changeStage(4)" v-bind:class="{active: currentStep}" >Следующий шаг</button>
                <button class="btn-select"  v-bind:class="{active: !currentStep}" @click="changeStage(2)">Предыдущий шаг</button>
            </div>

            <div class="stage stage3" v-if="currentStage == 4">
                <h3>Выберите тон или цвет столешницы</h3>
                <input type="radio" id="light" value="Светлая"  v-on:change="colourChecked = [],colourShow = false" v-model="tone">
                <label for="light">Светлая столешница</label>
                <br>
                <input type="radio" id="dark" value="Темная"  v-on:change="colourChecked = [],colourShow = false" v-model="tone">
                <label for="dark">Темная столешница</label>
                <br>
                <input type="radio" id="lightdark" value="Интересны оба варианта"  v-on:change="colourChecked = [],colourShow = false" v-model="tone">
                <label for="lightdark">Интересны оба варианта</label>
                <br>
                <span>или</span> <a @click="colourShow = !colourShow, tone = 0">подобрать цвет</a> <br>
                <div class="colour  check_buttons" v-if="colourShow">
                    <h4 class="filter_title">Оттенок камня</h4>
                <span class="color_notice">* можно выбрать несколько цветов если дизайн требует сочетания элементов кухни с разными оттенками.</span><br>
                	    <div class="color-button">
                	    <input type="checkbox"  id="mse2_tv|palitra-color_0"  v-model="colourChecked" value="Бежевый">
                            <label for="mse2_tv|palitra-color_0"  style="background:#b5ad8a;" title="Бежевый"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_1"  v-model="colourChecked" value="Белый">
                            <label for="mse2_tv|palitra-color_1"  style="background:#ffffff;" title="Белый"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_2"  v-model="colourChecked" value="Болотный">
                            <label for="mse2_tv|palitra-color_2"  style="background:#8FBC8F;" title="Болотный"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_3"  v-model="colourChecked" value="Бордовый">
                            <label for="mse2_tv|palitra-color_3"  style="background:#782221;" title="Бордовый"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox" id="mse2_tv|palitra-color_4"  v-model="colourChecked" value="Голубой">
                            <label for="mse2_tv|palitra-color_4"  style="background:#337ab7;" title="Голубой"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_5"  v-model="colourChecked" value="Желтый">
                            <label for="mse2_tv|palitra-color_5"  style="background:#e0b818;" title="Желтый"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_6"  v-model="colourChecked" value="Зеленый">
                            <label for="mse2_tv|palitra-color_6"  style="background:#48843a;" title="Зеленый"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_7"  v-model="colourChecked" value="Коричневый">
                            <label for="mse2_tv|palitra-color_7"  style="background:#8B4513;" title="Коричневый"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_8"  v-model="colourChecked" value="Красный">
                            <label for="mse2_tv|palitra-color_8"  style="background:#FF0000;" title="Красный"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_9"  v-model="colourChecked" value="Кремовый">
                            <label for="mse2_tv|palitra-color_9"  style="background:#FFFDD0;" title="Кремовый"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_10"  v-model="colourChecked" value="Оранжевый">
                            <label for="mse2_tv|palitra-color_10"  style="background:#FFA500;" title="Оранжевый"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_11"  v-model="colourChecked" value="Песочный">
                            <label for="mse2_tv|palitra-color_11"  style="background:#FCDD76;" title="Песочный"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_12"  v-model="colourChecked" value="Розовый">
                            <label for="mse2_tv|palitra-color_12"  style="background:#FFC0CB;" title="Розовый"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_13"  v-model="colourChecked" value="Серый">
                            <label for="mse2_tv|palitra-color_13"  style="background:#a5a6a0;" title="Серый"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_14"  v-model="colourChecked" value="Синий">
                            <label for="mse2_tv|palitra-color_14"  style="background:#1E2460;" title="Синий"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_15"  v-model="colourChecked" value="Сирень">
                            <label for="mse2_tv|palitra-color_15"  style="background:#9400D3;" title="Сирень"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_16"  v-model="colourChecked" value="Черный">
                            <label for="mse2_tv|palitra-color_16"  style="background:#000000;" title="Черный"></label><br>
                        </div><div class="color-button">
                            <input type="checkbox"  id="mse2_tv|palitra-color_17"  v-model="colourChecked" value="Шоколадный">
                            <label for="mse2_tv|palitra-color_17"  style="background:#45322E;" title="Шоколадный"></label><br>
                        </div><br>
                        <span class="select-color-button" v-if="colourChecked">Вы выбрали цвета: <span v-for="(item, itemIndex) in colourChecked" :key="itemIndex">{{item}}, </span></span>
                        <span class="select-color-button" v-else >Выбрать цвет </span>
                        <br>
                    </div>
                <button class="btn-select" @click="changeStage(5)" v-bind:class="{active: currentStep}" v-if="tone||colourChecked[0]">Следующий шаг</button>
                <button class="btn-select-fade" v-else>Следующий шаг</button>
                <button class="btn-select" v-bind:class="{active: !currentStep}" @click="changeStage(3)">Предыдущий шаг</button>
            </div>
            <div class="stage stage4" v-if="currentStage == 5">
                <h3>Выберите текстуру столешницы</h3>
                    <input type="checkbox" id="inclusions" value="Вкрапления" v-model="add_texture">
                    <label for="inclusions">Вкрапления</label>
                    <br>
                    <input type="checkbox" id="waves" value="Волны" v-model="add_texture">
                    <label for="waves">Волны</label>
                    <br>
                    <input type="checkbox" id="marble" value="Мраморный узор" v-model="add_texture">
                    <label for="marble">Мраморный узор</label>
                    <br>
                    <input type="checkbox" id="solid" value="Однотонная" v-model="add_texture">
                    <label for="solid">Однотонная</label>
                    <br>
                    <input type="checkbox" id="semiprecious" value="Полудрагоценный камень" v-model="add_texture">
                    <label for="semiprecious">Полудрагоценный камень</label>
                    <br>
                    <input type="checkbox" id="ripple" value="Рябь" v-model="add_texture">
                    <label for="ripple">Рябь</label>
                    <br>
                    <input type="checkbox" id="glitter" value="С блесткой" v-model="add_texture">
                    <label for="glitter">С блесткой</label>
                    <br>
                    <input type="checkbox" id="advice" value="По совету менеджера" v-model="add_texture">
                    <label for="advice">По совету менеджера</label>
                    <br>
                <button class="btn-select" v-bind:class="{active: currentStep}" @click="changeStage(6)" v-if="add_texture[0]">Следующий шаг</button>
                <button class="btn-select-fade" v-else>Следующий шаг</button>
                <button class="btn-select" v-bind:class="{active: !currentStep}" @click="changeStage(4)">Предыдущий шаг</button>
            </div>
            <div class="stage stage5" v-if="currentStage == 6">
                <h3>Бюджет на погонный метр</h3>
                <input type="radio" id="budget_one" value="от 7 600 рублей за метр погонный" v-model="budget">
                <label for="budget_one">от 7 600 рублей за метр погонный</label>
                <br>
                <input type="radio" id="budget_two" value="от 14 300 рублей за метр погонный" v-model="budget">
                <label for="budget_two">от 14 300 рублей за метр погонный</label>
                <br>
                <input type="radio" id="budget_three" value="от 19 300 рублей за метр погонный" v-model="budget">
                <label for="budget_three">от 19 300 рублей за метр погонный</label>
                <br>
                <input type="radio" id="budget_four" value="от 26 900 за метр погонный" v-model="budget">
                <label for="budget_four">от 26 900 рублей за метр погонный</label>
                <br>
                <button class="btn-select" v-bind:class="{active: currentStep}" @click="changeStage(7)" v-if="budget">Следующий шаг</button>
                <button class="btn-select-fade" v-else>Следующий шаг</button>
                <button class="btn-select" v-bind:class="{active: !currentStep}" @click="changeStage(5)">Предыдущий шаг</button>
            </div>

            <div class="stage stage6" v-if="currentStage == 7">
             <form class="vue-form" method="post" role="sendForm">
                    <h3>Последний шаг. Отправьте Ваш сформированный код и получите скидку в 10%.</h3>
                    <input type="text" id="shape_name" placeholder="Ваше имя"  v-model="shape_name" required/>
                    <input type="tel" id="shape_phone" placeholder="Ваш телефон без +7"  v-model="shape_phone" title="Ваш телефон без +7" v-phoned required/><br/>
                    <span>Код:</span><input type="text" id="unique_code" value="unique_code" disabled v-model="unique_code">
                    <span class="code_span">Этот код вместе с выбранной информацией будет отправлен нашему менеджеру. Он подготовит предложение и обязательно с Вами свяжется.</span>
                    <button class="btn-select" v-bind:class="{active: currentStep}" @click="sendForm(),changeStage(8)" v-if="shape_phone.length >= 13 && shape_name != ''">Получить скидку</button>
                    <button class="btn-select-fade"  @click.prevent v-else>Получить скидку</button>
                    <button class="btn-select" v-bind:class="{active: !currentStep}" @click="changeStage(6)">Предыдущий шаг</button>
            </form>
            </div>
            <div class="stage stage7" v-if="currentStage == 8">
                <span>Информация успешно отправлена!<br> Менеджер скоро свяжется с вами!</span>
            </div>
    	</div>
</div>
</template>

<style scoped>
.body{
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}
.form-alert {
    box-shadow: 0px 0px 10px 0px #f90 inset;
    color: #f90303!important;
    font-weight: 600;
}
.btn-select {
    width: 180px;
    font-family: Calibri;
    color: #9e3f00;
    border: 1px solid #9e3f00;
    border-radius: 4px;
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    padding: 5px;
}
.btn-select-fade, .btn-select-fade:hover {
    width: 180px;
    font-family: Calibri;
    color: #848484;
    background-color: #e6e6e6;
    border: 1px solid #848484;
    box-shadow: none;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
}
 .btn-board {
    width: 180px;
    font-family: Calibri;
    font-size: 14px;
    /*padding-left: 2px;
    padding-right: 2px;*/
    padding: 5px;
    background-color: #fff;
    color: #ff8400;
    border: 1px solid #ff8400;
    border-radius: 4px;
}
.active {
    background-color: #ff8400;
    color: #fff;
    border: 1px solid #ff8400;
    border-radius: 4px;
}
.cb,.stage7  {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
}
.cb input {
    padding: 5px 5px 5px 10px;
    margin-top: 10px;
    font-family: Calibri;
    border: solid 1px #999;
    color:#777;
    border-radius: 4px;
}
.cb input:hover {
    border: solid 1px #f90;
    color:#999;
}
.cb input:focus {
    border: solid 1px #f90;
    color:#f90;
}
.stage .active, .cb .active {
    background-color: #9e3f00;
    color: #fff;
    border: 1px solid #9e3f00;
    border-radius: 4px;
}
.btn-start {
    font-family: Calibri;
    font-size: 16px;
    padding: 10px;
    width: 180px;
}
.start_icon {
    width: 100%;
    height: auto;
    margin-right: 0;
    float: none;
    max-width: 500px;
}
.start img {
    margin-top: 20px;
}
.progress_bar {
    height: 12px;
    border: 1px solid #bdd0d0;
    border-radius: 6px;
    display: block;
    margin-top: 20px;
    margin-bottom: 0px;
    background: url(https://стильный-камень.рф/assets/newdisign/img/mobile/mob-bar-7-gr.png);
    background-size: 100%;
}
.progress_bar::before {border: none;}
.progress_tail_1 {
    width: 14.286%;
    background-color: #bdd0d0;
    height: 100%;
}
.progress_tail_2 {
    width: 28.571%;
    background-color: #bdd0d0;
    height: 100%;
}
.progress_tail_3 {
    width: 42.857%;
    background-color: #bdd0d0;
    height: 100%;
}
.progress_tail_4 {
    width: 57.143%;
    background-color: #bdd0d0;
    height: 100%;
}
.progress_tail_5 {
    width: 71.429%;
    background-color: #bdd0d0;
    height: 100%;
}
.progress_tail_6 {
    width: 85.714%;
    background-color: #bdd0d0;
    height: 100%;
}
.progress_tail_7 {
    width: 100%;
    background-color: #bdd0d0;
    height: 100%;
}
.tabletop_selection h3 {
    /*margin-top: 0;*/
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.stage label {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    display: inline-block;
    max-width: 100%;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
}
.stage input[type="radio" i],.stage input[type="checkbox" i] {position: relative; top:2px;}
.stage2 input#five {padding-left: 5px;}
.stage2 input {
    margin-top: 10px;
    font-family: Calibri;
    border: solid 1px #999;
    color: #333;
    border-radius: 2px;
    font-weight: 600;
}
.stage6 input {
    padding: 2px 2px 2px 5px;
    font-family: Calibri;
    border: solid 1px #999;
    color:#777;
    border-radius: 2px;
    margin-right: 5px;
}
.stage6 input:hover {
    border: solid 1px #f90;
    color:#999;
}
.stage6 input:focus {
    border: solid 1px #f90;
    color:#f90;
}
.stage6 input#unique_code {
    width: 107px;
    float: none;
    margin-top: 10px;
    margin-left: 5px;
    border-radius: 2px;
}
.filter_title {
    font: 18px Tahoma;
}
span.color_notice {
    font-size: 10px;
    display: block;
    margin-top: -10px;
    margin-bottom: -5px;
}
span.select-color-button {
    display: inline-block;
    width: 100%;
    font-size: 10px;
}
.color-button {
    width: 32px;
    float: left;
}
.check_buttons div {
    float: left;
    margin-right: 5px;
}
.check_buttons label {
    cursor: pointer;
    width: 30px;
    height: 25px;
    border: 2px solid #e2e2e2;
    float: left;
    margin-right: 5px;
}
.check_buttons input:checked + label {
    border-color: #fe8200;
}
.color-button input[type="checkbox"] {
    display: none!important;
}
.color-button  input {
     position: absolute;
     left: -9999px;
}
span.code_span {
    display: block;
    margin-top: 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
}
@media (max-width: 500px) {
  .btn-board, .btn-start, .btn-select-fade, .btn-select, .btn-select-fade:hover {
    width: 150px;
  }


}
</style>

<script>
export default {
   directives: {
      phoned: {
        // определение директивы
        bind(el) {
            el.oninput = function(e) {
              if (!e.isTrusted) {
                return;
              }

              let x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,5})/);
              this.value = !x[2] ? x[1] :'(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
              el.dispatchEvent(new Event('input'));
        }
      }
  }
},
  data() {
     return {
    currentShow: 0,
    currentBoard: 0,
    picked: '',
    shape: '',
    shape_text: '',
    shape_phone:'',
    currentStage: '0',
    currentCBP: '0',
    unique_code: '',
    colourShow: false,
    colourChecked: [],
    tone: '',
    status_kitchen: '',
    add_elements: [],
    add_texture: [],
    budget: '',
    phoned:'',
    cb_name:'',
    cb_phone:'',
    currentStep:true,
    currentButton:true,
    shape_name: '',
    price: null,
    isActive1:false,
    isActive2:false,
     }
  },
  mounted() {
    const chrs = '123456789'
    let str = ''
    const len = 5
    for (var i = 0; i < len; i++) {
      const pos = Math.floor(Math.random() * chrs.length);
      str += chrs.substring(pos,pos+1);
    }
    this.unique_code = str
    },
    methods: {
      changeBlock(itemIndex) {
        this.currentShow = itemIndex
      },
      changeDashboard(index) {
        this.currentBoard = index
      },
      changeStone(stone) {
        this.currentStone = stone
      },
      changeStage(number) {
        this.currentStage = number
      },
      changeCBP() {
        this.currentCBP = 1
      },
      changeActive(number){
        this.currentActive = number
      },
      checkForm2(){
        if (this.cb_name==''){
        this.isActive1=true;
        }
        else {
          this.isActive1=false;
        }
        if (this.cb_phone.length != 13){
        this.isActive2=true;
        }
         else {
          this.isActive2=false;
        }
      },
      sendForm() {
        const data = {
          shape_name: this.shape_name,
          shape_phone: this.shape_phone,
          status_kitchen: this.status_kitchen,
          shape: this.shape,
          shape_text: this.shape_text,
          add_elements: this.add_elements,
          tone: this.tone,
          colourChecked: this.colourChecked,
          add_texture: this.add_texture,
          budget: this.budget,
          unique_code: this.unique_code,
          form: "podbor",
        };
       this.$axios.post('https://стильный-камень.рф/ajax/shape_mail_test2.php', data)
          .then(response => (this.success = response.data.result))
          .catch(error => (this.success = error.response.data.result));
                },
        sendForm2() {
          const data = {
            name: this.cb_name,
            phone: this.cb_phone,
            form: "cb",
          };
            this.$axios.post('https://стильный-камень.рф/ajax/shape_mail_test2.php', data)
              .then(response => (this.success = response.data.result))
              .catch(error => (this.success = error.response.data.result));
          },

        },
}
</script>
