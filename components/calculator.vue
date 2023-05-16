<template>
  <div class="calc_wrapper">
   <ul class="right-menu">
     <li><span class="numStyle" @click="goToStep('sec1')" id="step1">1</span></li>
     <li><span class="numStyle" @click="goToStep('sec2')" id="step2">2</span></li>
     <li><span class="numStyle" @click="goToStep('sec3')" id="step3">3</span></li>
     <li><span class="numStyle" @click="goToStep('sec4')" id="step4">4</span></li>
     <li><span id="step5" @click="goToStep('sec5')" class="numStyle">5</span></li>
     <li><span id="step6" @click="goToStep('sec6')" class="numStyle">6</span></li>
     <li><span id="step7" @click="goToStep('sec7')" class="numStyle">7</span></li>
     <li><span id="step8" @click="goToStep('sec8')" class="numStyle">8</span></li>
   </ul>


    <h1>Калькулятор столешницы из камня</h1>
    <div id="sec1" ref="sec1" class="select-wrapper">
      <button class="changeParams" @click="showChangeSkidka = true" v-if="$store.state.procentCalc != -1 && status == 0">Настроить параметры калькулятора</button> 
      <button v-if="authCheck == false" class="changeParams green" @click="auth = true">Авторизация</button>
      <span style="color: green;margin-left: 15px;font-size: 14px;" v-else>Вы авторизованы как <b>{{userName}}</b></span> <span v-if="authCheck" @click="Logout()" class="Logout">Выйти</span>
      <p class="title"><span class="numStyle">1</span> Выбор изделия</p>
      <ul class="select_type">
        <li @click="typeMain = 1" :class="{ active: typeMain == 1 }">
          <i class="tabletop"></i>
          <span>Столешница</span>
        </li>
        <li @click="typeMain = 2" :class="{ active: typeMain == 2 }">
          <i class="sill"></i>
          <span>Подоконник</span>
        </li>
        <li @click="typeMain = 3" :class="{ active: typeMain == 3 }">
          <i class="bathroom"></i>
          <span>Ванная</span>
        </li>
      </ul>
    </div>

    <div id="sec2" ref="sec2" class="select-wrapper" v-if="typeMain == 1">
      <span class="numStyle">2</span>
      <p data-section-selector="#home"  class="title">Выбор типа столешницы</p>

      <ul class="select select_table">
        <li
          @click="typeTabletop = 1"
          :class="{ active: typeTabletop == 1 }"
          style="background-image: url(pictures/img/calc/table_mini1.png)"
        >
          Прямая
        </li>
        <li
          @click="typeTabletop = 2"
          :class="{ active: typeTabletop == 2 }"
          style="background-image: url(pictures/img/calc/table_mini2.png)"
        >
          Г-образная
        </li>
        <li
          @click="typeTabletop = 3"
          :class="{ active: typeTabletop == 3 }"
          style="background-image: url(pictures/img/calc/table_mini3.png)"
        >
          П-образная
        </li>
      </ul>
    </div>

    <div id="sec3" ref="sec3" class="select-wrapper">
      <p class="title" ><span class="numStyle">3</span> Выбор материала</p>
      <ul class="select select_material">
        
        <li @click="
            (selectMaterial = 1),
              (checkboxMoika = false),
              (showMoika = false),
              materialDefaultFun(1),
              fatDefaultFun(1)
          " :class="{ active: selectMaterial == 1 }"><span class="name">Жидкий гранит</span></li>
      <!--  <li @click="
            (selectMaterial = 5),
              (checkboxMoika = false),
              (showMoika = false),
              materialDefaultFun(5),
              fatDefaultFun(5)
          " :class="{ active: selectMaterial == 5 }"><span class="name">Литьевой мрамор</span></li> -->
        <li @click="
            (selectMaterial = 2),
              (checkboxMoika = false),
              (showMoika = false),
              materialDefaultFun(2),
              fatDefaultFun(2)
          " :class="{ active: selectMaterial == 2 }"><span class="name">Акриловый камень</span></li>
        <li @click="
            (selectMaterial = 0),
              (checkboxMoika = false),
              (showMoika = false),
              materialDefaultFun(0),
              fatDefaultFun(0)
          " :class="{ active: selectMaterial == 0 }"><span class="name">Кварцевый агломерат</span></li>
      </ul>
    </div>

    <div id="sec4"  ref="sec4" v-if="selectMaterial != 1" class="select-wrapper">
      <!-- кроме Жидкого камня -->
      <p class="title"><span class="numStyle">4</span> Выбор производителя</p>
      <ul v-if="selectMaterial == 0" class="select select_manufacturer">
        <!-- Производители кварца -->
        <li
          v-for="(item, index) in venorsQuartzArr"
          :key="index"
          :class="{ active: flagVendor == index }"
          @click="(flagVendor = index), (selectVedorQuartz = item.name), checkThickness()"
        >
          <img :src="item.img" :alt="item.name" />
          <span class="name">{{ item.name }}</span>
        </li>
      </ul>
      <!-- Производители жидкого камня - в данном блоке не используются. см. Выбор ценовой категории -->
      <ul v-else-if="selectMaterial == 1" class="select select_manufacturer">
        <li
          v-for="(item, index) in venorsLiquidArr"
          :key="index"
          :class="{ active: flagVendor == index }"
          @click="(flagVendor = index), (selectVedor = item.name), checkThickness()"
        >
          <img :src="item.img" :alt="item.name" />
          <span class="name">{{ item.name }}</span>
        </li>
      </ul>
      <!-- Производители акрилового камня -->
      <ul v-else-if="selectMaterial == 2" class="select select_manufacturer">
        <li
          v-for="(item, index) in venorsAkrilArr"
          :key="index"
          :class="{ active: flagVendor == index }"
          @click="(flagVendor = index), (selectVedor = item.name), checkThickness()"
        >
          <img :src="item.img" :alt="item.name" />
          <span class="name">{{ item.name }}</span>
        </li>
      </ul>
      <!-- Производители натурального камня -->
      <ul v-else-if="selectMaterial == 3" class="select select_manufacturer">
        <li
          v-for="(item, index) in venorsNaturalArr"
          :key="index"
          :class="{ active: flagVendor == index }"
          @click="(flagVendor = index), (selectVedor = item.name), checkThickness()"
        >
          <img :src="item.img" :alt="item.name" />
          <span class="name">{{ item.name }}</span>
        </li>
      </ul>
    </div>

    <!-- ВЫБОР ЦЕНОВОЙ КАТЕГОРИИ -->
    <div  v-if="selectMaterial == 1" class="select-wrapper">
      
      <p class="title"><span class="numStyle">5</span>Выбор ценовой категории:</p>
      <ul class="select select-category">
        <li @click="priceCategory(1)" :class="{ active: flagCategory == 1 }">
          <a>Первая ценовая категория</a>
        </li>
        <li @click="priceCategory(2)" :class="{ active: flagCategory == 2 }">
          <a>Вторая ценовая категория</a>
        </li>
        <li @click="priceCategory(3)" :class="{ active: flagCategory == 3 }">
          <a>Третья ценовая категория</a>
        </li>
      </ul>
    </div>

    <!-- ВЫБОР ЦВЕТА -->
    <div id="sec5"  ref="sec5" class="select-wrapper">
      <p class="title"><span class="numStyle">5</span>Выбор цвета</p>
      <span class="change-see">
        <span class="chooseTypeColor">Показать:</span>
        <a
          class="link-see"
          @click="linkSee = 1"
          :class="{ active: linkSee == 1 }"
          >через карусель</a
        >
        <a
          class="link-see"
          @click="linkSee = 2"
          :class="{ active: linkSee == 2 }"
          >через плитку</a
        >
        
      <input type="text" placeholder="Введите название цвета" v-model="filteredPalitra"  class="filteredPalitra"><img class="icon_poisk" src="pictures/img/zoom12x12.png" alt=""> <span v-if="filteredPalitra!=''" class="clearFilter" @click="filteredPalitra = ''">Очистить</span>
      </span>
      <div v-if="linkSee == 2">
        <Plitka v-if="filteredMaterialArr.length > 0"
          :itemArr="filteredMaterialArr"
          :selectMaterial="selectMaterial"
          v-on:materialActive="carouselActiveArr = $event"
        />
        <span v-else>Палитра <b>{{filteredPalitra}}</b> не найдена, попробуйте изменить название.</span>
      </div>
      <div v-else>
        <Carousel v-if="filteredMaterialArr.length > 0"
          :itemArr="filteredMaterialArr"
          :selectMaterial="selectMaterial"
          v-on:materialActive="carouselActiveArr = $event"
        />
        <span v-else>Палитра <b>{{filteredPalitra}}</b> не найдена, попробуйте изменить название.</span>
      </div>
      
      <div>
        <div id="sec6" ref="sec6" class="select_sizes" v-if="selectMaterial == 2 || selectMaterial == 0"> <!-- Для акрила кварца убираем толщины более 60 мм -->
          <p class="title"><span class="numStyle">6</span>Выбор толщины столешницы</p>
          <!-- <pre>tablePrice: {{tablePrice}}</pre>
          <pre>carouselActiveArr: {{carouselActiveArr}}</pre> -->

          <select
            v-if="carouselActiveArr.euro"
            v-model="tablePrice"
            class="fat-table"
          >
            <option disabled value>Толщина mm</option>
            <option v-if="parseInt(index.replace(/\D+/g, '')) <= 60"
              v-for="(item, index) in carouselActiveArr.euro"
              :key="index"
              :value="{ valuta: 'euro', price: item, fat: index }"
            >
              {{ index }}
            </option>
          </select>
          <select
            v-else-if="carouselActiveArr.usd"
            v-model="tablePrice"
            class="fat-table"
          >
            <option disabled value>Толщина mm</option>
            <option  v-if="parseInt(index.replace(/\D+/g, '')) <= 60"
              v-for="(item, index) in carouselActiveArr.usd"
              :key="index"
              :value="{ valuta: 'usd', price: item, fat: index }"
            >
              {{ index }}
            </option>
          </select>
          <!-- v-if="parseInt(index.replace(/\D+/g, '')) >= 20" -->
          <select
            v-else-if="carouselActiveArr.price"
            v-model="tablePrice"
            class="fat-table"
          >
            <option disabled value>Толщина mm</option>
            <option  v-if="parseInt(index.replace(/\D+/g, '')) <= 60"
              v-for="(item, index) in carouselActiveArr.price"
              :key="index"
              :value="{ valuta: 'rub', price: item, fat: index }"
            >
              {{ index }}
            </option>
          </select>
          <select v-else v-model="tablePrice" class="fat-table">
            <option disabled value>Толщина mm</option>
          </select>
        </div>
        <div id="sec6" ref="sec6" class="select_sizes" v-else>
          <p class="title"><span class="numStyle">6</span>Выбор толщины столешницы</p>
          <!-- <pre>tablePrice: {{tablePrice}}</pre>
          <pre>carouselActiveArr: {{carouselActiveArr}}</pre> -->

          <select
            v-if="carouselActiveArr.euro"
            v-model="tablePrice"
            class="fat-table"
          >
            <option disabled value>Толщина mm</option>
            <option
              v-for="(item, index) in carouselActiveArr.euro"
              :key="index"
              :value="{ valuta: 'euro', price: item, fat: index }"
            >
              {{ index }}
            </option>
          </select>
          <select
            v-else-if="carouselActiveArr.usd"
            v-model="tablePrice"
            class="fat-table"
          >
            <option disabled value>Толщина mm</option>
            <option
              v-for="(item, index) in carouselActiveArr.usd"
              :key="index"
              :value="{ valuta: 'usd', price: item, fat: index }"
            >
              {{ index }}
            </option>
          </select>
          <!-- v-if="parseInt(index.replace(/\D+/g, '')) >= 20" -->
          <select
            v-else-if="carouselActiveArr.price"
            v-model="tablePrice"
            class="fat-table"
          >
            <option disabled value>Толщина mm</option>
            <option
              v-for="(item, index) in carouselActiveArr.price"
              :key="index"
              :value="{ valuta: 'rub', price: item, fat: index }"
            >
              {{ index }}
            </option>
          </select>
          <select v-else v-model="tablePrice" class="fat-table">
            <option disabled value>Толщина mm</option>
          </select>
        </div>
      </div>
    </div>
    
    
    <div id="sec7" ref="sec7" class="scheme">
      <!-- СХЕМА СТОЛЕШНИЦЫ -->
      <div v-if="typeMain == 1">
        <div v-if="typeTabletop == 1">
          <p class="title"><span class="numStyle">7</span>Размеры изделия, в мм</p>
          <div class="one_scheme">
            <img src="pictures/img/calc/tabletop1_new2.jpg" />

            <label  class="label1">
              <select v-model="frontEdge">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>

            <label  class="label2">
              <select v-model="leftEdge">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label3">
              <select v-model="farEdge">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label style="top: 236px; left: 733px" class="label4">
              <select v-model="rightEdge">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <!-- Ширина -->
            <label  class="label5">
              <input type="number" v-model="tableWidth" placeholder="0" />
            <!--  <span>мм</span> -->
            </label>
            <!-- Длина -->
            <label  class="label6">
              <input type="number" v-model="tableLength" placeholder="0" />
             <!-- <span>мм</span> -->
            </label>
            <!--
            <label style="top: -32px; left: 74px">
              <span>Вырез под смеситель</span>
              <input
                v-if="selectMaterial != 1"
                type="checkbox"
                v-model="checkboxCutMixer"
              />
              <input
                v-else-if="selectMaterial == 1 && checkboxMoika === false"
                type="checkbox"
                v-model="checkboxCutMixer"
              />
            </label>
            <div
              style="
                top: -11px;
                left: 112px;
                display: inline-block;
                position: absolute;
              "
            >
              <label class="moika-label">
                <span>Мойка из камня</span>
                <input
                  class="straight_washing"
                  type="checkbox"
                  v-model="checkboxMoika"
                  @click="showMoika = !showMoika"
                />
              </label>
              <span
                v-if="checkboxMoika && moikaActiveArr"
                @click="(showMoika = true), (checkboxMoika = true)"
                class="moika-active_title"
              >
                {{ moikaActiveArr.pagetitle }}
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </span>
            </div>
            <label style="top: 11px; left: 104px">
              <span>Вырез под мойку</span>
              <input
                v-if="selectMaterial != 1"
                type="checkbox"
                v-model="checkboxCutMoika"
              />
              <input
                v-else-if="selectMaterial == 1 && checkboxMoika === false"
                type="checkbox"
                v-model="checkboxCutMoika"
              />
            </label>
            <label style="top: 33px; left: -24px">
              <span>Вырез под мойку, подклейка снизу</span>
              <input type="checkbox" v-model="checkboxCutGlue" />
            </label>
            <label style="top: 0; left: 554px">
              <input type="checkbox" v-model="checkboxCutStove" />
              <span>Вырез под варочную панель</span>
            </label>
            <label style="top: 98px; left: 624px">
              <span>Стержни под горячее не рекомендуются</span>
            </label>  
            -->
          </div>
        </div>
        <!-- =========================== Г - ОБРАЗНАЯ СТОЛЕШНИЦА =============================== -->
        <div v-else-if="typeTabletop == 2">
          <div class="select_sizes">
            <p class="title"><span class="numStyle">6</span>Вид внутреннего угла столешницы</p>
            
            <label style="position: relative; text-align: left; height: 100px">
              <select v-model="innerCorner" class="fat-table">
                <option label="прямой угол" value="0">прямой угол</option>
                <option label="трапеция" value="1">трапеция</option>
              </select>
            </label>

            <img v-if="innerCorner == 0" src="pictures/ugol/ugol_90.jpg" />
            <img
              v-else-if="innerCorner == 1"
              src="pictures/ugol/ugol_skos.jpg"
            />
          </div>
          <p class="title"><span class="numStyle">6</span>Размеры изделия, в мм</p>
          <div class="one_scheme">
            <img src="pictures/img/calc/tabletop2_new2.jpg" alt />

            <label  class="label7">
              <select v-model="frontEdge">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label8">
              <select v-model="leftEdge">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label9">
              <select v-model="farEdge">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label10">
              <select v-model="farEdge2">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label11">
              <select v-model="rightEdge">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label12">
              <select v-model="frontEdge2">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label13">
              <input type="number" v-model="tableWidthLeft" placeholder="0" />
              
            </label>
            <label  class="label14">
              <input type="number" v-model="tableLengthLeft" placeholder="0" />
             
            </label>
            <label  class="label15">
              <input type="number" v-model="tableLengthRight" placeholder="0" />
              
            </label>
            <label  class="label16">
              <input type="number" v-model="tableWidthRight" placeholder="0" />
              
            </label>
            <!--
            <label style="top: 40px; left: 27px">
              <span>Вырез под мойку</span>
              <input
                v-if="selectMaterial != 1"
                type="checkbox"
                v-model="checkboxCutMoika"
              />
              <input
                v-else-if="selectMaterial == 1 && checkboxMoika === false"
                type="checkbox"
                v-model="checkboxCutMoika"
              />
            </label>
            <label style="top: 62px; left: -10px">
              <span>Вырез подклейка снизу</span>
              <input type="checkbox" />
            </label>
            <label style="top: -7px; left: 14px">
              <span>Вырез под смеситель</span>
              <input
                v-if="selectMaterial != 1"
                type="checkbox"
                v-model="checkboxCutMixer"
              />
              <input
                v-else-if="selectMaterial == 1 && checkboxMoika === false"
                type="checkbox"
                v-model="checkboxCutMixer"
              />
            </label>
            <div
              style="
                top: 15px;
                left: 45px;
                display: inline-block;
                position: absolute;
              "
            >
              <label class="moika-label">
                <span>Мойка из камня</span>
                <input
                  class="straight_washing"
                  type="checkbox"
                  v-model="checkboxMoika"
                  @click="showMoika = !showMoika"
                />
              </label>
              <span
                v-if="checkboxMoika && moikaActiveArr"
                @click="(showMoika = true), (checkboxMoika = true)"
                class="moika-active_title"
              >
                {{ moikaActiveArr.pagetitle }}
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </span>
            </div>
            <label style="top: 0; left: 552px">
              <input type="checkbox" v-model="checkboxCutStove" />
              <span>Вырез под варочную панель</span>
            </label> -->
            <div style="clear: both"></div>
          </div>
        </div>

        <!-- ========================= П - ОБРАЗНАЯ СТОЛЕШНИЦА ============================================== -->
        <div v-else-if="typeTabletop == 3" style="margin-top: 55px">
          <div class="select_sizes">
            <p class="title"><span class="numStyle">6</span>Вид внутреннего угла столешницы</p>
            
            <label style="position: relative; text-align: left; height: 100px">
              <select v-model="innerCorner" class="fat-table">
                <option label="прямой угол" value="0" selected="selected">
                  прямой угол
                </option>
                <option label="трапеция" value="1">трапеция</option>
              </select>
              
            </label>
            <!-- Переключаем тип угла со срезом -->
            <div style="margin-bottom: 10px;" v-if="innerCorner == 1">
            <div class="form_radio_btn">
              <input id="radio-1" type="radio" name="radio" value="0" v-model="typeinnerCorner" checked>
              <label for="radio-1">Левый внутренний угол</label>
            </div>
            
            <div class="form_radio_btn">
              <input id="radio-2" type="radio" name="radio" v-model="typeinnerCorner" value="1">
              <label for="radio-2">Правый внутренний угол</label>
            </div>
            
            <div class="form_radio_btn">
              <input id="radio-3" type="radio" name="radio" v-model="typeinnerCorner" value="2">
              <label for="radio-3">Оба</label>
            </div>
            </div>
            <!-- -->
            <img v-if="innerCorner == 0" src="pictures/ugol/ugol_90.jpg" />
            <img
              v-else-if="innerCorner == 1"
              src="pictures/ugol/ugol_skos.jpg"
            />
          </div>

          <p class="title"><span class="numStyle">6</span>Размеры изделия</p>
          <div class="one_scheme">
            <img src="pictures/img/calc/tabletop3_new.jpg" />

            <label  class="label17">
              <select v-model="pEdge_1">
                <option label="без обработки" value="0">без обработки</option>
                <option
                  label="торцевая кромка"
                  value="1"
                  selected="selected"
                >
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label18">
              <select v-model="pEdge_2">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label19">
              <select v-model="pEdge_3">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label20">
              <select v-model="pEdge_4">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label21">
              <select v-model="pEdge_5">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label22">
              <select v-model="pEdge_6">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1">
                  торцевая кромка
                </option>
                <option
                  label="пристеночный бортик 6"
                  value="2"
                  selected="selected"
                >
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label23">
              <select v-model="pEdge_7">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>
            <label  class="label24">
              <select v-model="pEdge_8">
                <option label="без обработки" value="0">без обработки</option>
                <option label="торцевая кромка" value="1" selected="selected">
                  торцевая кромка
                </option>
                <option label="пристеночный бортик" value="2">
                  пристеночный бортик
                </option>
              </select>
            </label>

            <label  class="label25">
              <input type="number" v-model="p_tableLeftWidth" placeholder="0" />
              <span>мм</span>
            </label>
            <label  class="label26">
              <input
                type="number"
                v-model="p_tableLeftLength"
                placeholder="0"
              />
              <span>мм</span>
            </label>
            <label  class="label27">
              <input
                type="number"
                v-model="p_table_Far_LeftWidth"
                placeholder="0"
              />
              <span>мм</span>
            </label>
            <label  class="label28">
              <input
                type="number"
                v-model="p_table_Far_LeftLength"
                placeholder="0"
              />
              <span>мм</span>
            </label>
            <label  class="label29">
              <input
                type="number"
                v-model="p_table_Far_RightLength"
                placeholder="0"
              />
              <span>мм</span>
            </label>
            <label  class="label30">
              <input
                type="number"
                v-model="p_table_Far_RightWidth"
                placeholder="0"
              />
              <span>мм</span>
            </label>
            <!--
            <label style="top: -11px; left: 127px">
              <span>Вырез под мойку</span>
              <input
                v-if="selectMaterial != 1"
                type="checkbox"
                v-model="checkboxCutMoika"
              />
              <input
                v-else-if="selectMaterial == 1 && checkboxMoika === false"
                type="checkbox"
                v-model="checkboxCutMoika"
              />
            </label>
            <label style="top: 8px; left: 90px">
              <span>Вырез подклейка снизу</span>
              <input type="checkbox" />
            </label>
            <label style="top: -52px; left: 102px">
              <span>Вырез под смеситель</span>
              <input
                v-if="selectMaterial != 1"
                type="checkbox"
                v-model="checkboxCutMixer"
              />
              <input
                v-else-if="selectMaterial == 1 && checkboxMoika === false"
                type="checkbox"
                v-model="checkboxCutMixer"
              />
            </label>
            <div
              style="
                top: -31px;
                left: 133px;
                display: inline-block;
                position: absolute;
              "
            >
              <label class="moika-label">
                <span>Мойка из камня</span>
                <input
                  class="straight_washing"
                  type="checkbox"
                  v-model="checkboxMoika"
                  @click="showMoika = !showMoika"
                />
              </label>
              <span
                v-if="checkboxMoika && moikaActiveArr"
                @click="(showMoika = true), (checkboxMoika = true)"
                class="moika-active_title"
              >
                {{ moikaActiveArr.pagetitle }}
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </span>
            </div>
            <label style="top: 0; left: 554px">
              <input type="checkbox" v-model="checkboxCutStove" />
              <span>Вырез под варочную панель</span>
            </label> -->
            <div style="clear: both"></div>
          </div>
        </div>
      </div>

      <!-- ======================== СХЕМА ПОДОКОННИК ================================ -->
      <div v-if="typeMain == 2" class="one_scheme">
        <img alt src="pictures/img/calc/sill_new.jpg" />
        <label  class="label31">
          <input type="number" v-model="tableWidth" placeholder="0" />
          <span>мм</span>
        </label>
        <label  class="label32">
          <input type="number" v-model="tableLength" placeholder="0" />
          <span>мм</span>
        </label>
      </div>

      <!-- ================ СХЕМА ВАНАЯ - УМЫВАЛЬНИК =================================== -->
      <div v-if="typeMain == 3" class="one_scheme">
        <img src="pictures/img/calc/new-bathroom.jpg" />
        <label  class="label33">
          <select v-model="frontEdge">
            <option value="0">без обработки</option>
            <option value="1">торцевая кромка</option>
            <option value="2">стеновой бортик</option>
          </select>
        </label>
        <label  class="label34">
          <select v-model="leftEdge">
            <option value="0">без обработки</option>
            <option value="1">торцевая кромка</option>
            <option value="2">стеновой бортик</option>
          </select>
        </label>
        <label  class="label35">
          <select v-model="farEdge">
            <option value="0">без обработки</option>
            <option value="1">торцевая кромка</option>
            <option value="2">стеновой бортик</option>
          </select>
        </label>
        <label  class="label36">
          <select v-model="rightEdge">
            <option value="0">без обработки</option>
            <option value="1">торцевая кромка</option>
            <option value="2">стеновой бортик</option>
          </select>
        </label>
        <label  class="label37">
          <input
            type="number"
            class="moika-input"
            v-model="tableWidth"
            placeholder="0"
          />
          <span>мм</span>
        </label>
        <label  class="label38">
          <input
            type="number"
            class="moika-input"
            v-model="tableLength"
            placeholder="0"
          />
          <span>мм</span>
        </label>
        <div
          style="
            top: 247px;
            left: 69px;
            display: inline-block;
            position: absolute;
          "
        >
       <!--   <label class="moika-label">
            <span>Мойка из камня</span>
            <input
              class="straight_washing"
              type="checkbox"
              v-model="checkboxMoika"
              @click="showMoika = !showMoika"
            />
          </label>
          <span
            v-if="checkboxMoika && moikaActiveArr"
            @click="(showMoika = true), (checkboxMoika = true)"
            class="moika-active_title"
          >
            {{ moikaActiveArr.pagetitle }}
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </span> -->
        </div>
      <!--  <label style="top: 208px; left: 69px">
          <span>Вырез под накладную мойку</span>
          <input
            v-if="selectMaterial != 1"
            type="checkbox"
            v-model="checkboxCutMoika"
          />
          <input
            v-else-if="selectMaterial == 1 && checkboxMoika === false"
            type="checkbox"
            v-model="checkboxCutMoika"
          />
        </label> -->
        
          
      </div>
      <div style="clear: both"></div>
    </div>
    <!-- END Sheme -->
    <div  class="select-wrapper" v-if="typeMain != 2">
      <p class="title"><span class="numStyle">8</span>Выбор дополнительных опций</p>
        <div style="clear:both;margin-bottom: 5px;"></div>
        <!--<div class="box_radio">
        <input class="tgl tgl-light" id="cb4" v-model="checkboxPanel" type="checkbox">
        <label class="tgl-btn" for="cb4"></label>
        </div><span class="title_radio"  v-bind:class="{active: checkboxPanel}">Стеновая панель</span>
        <div style="clear:both;margin-bottom: 5px;"></div>
        <span  v-if="checkboxPanel">Ширина: </span><input class="inputPanel" placeholder="Ширина" v-if="checkboxPanel" v-model="checkboxPanelWidth" type="number"> <span style="font-size:12px;"  v-if="checkboxPanel">мм</span> 
        <span  v-if="checkboxPanel">Высота: </span><input class="inputPanel" placeholder="Высота"  v-if="checkboxPanel" v-model="checkboxPanelHeight" type="number"> <span style="font-size:12px;"  v-if="checkboxPanel">мм</span>
        <div style="clear:both;margin-bottom: 5px;"></div>
        -->

        <div class="box_radio">
        <input class="tgl tgl-light" id="cb1" @click="showMoika = !showMoika" v-model="checkboxMoika" type="checkbox">
        <label class="tgl-btn" for="cb1"></label>
        </div><span class="title_radio" v-bind:class="{active: checkboxMoika}" >Мойка из камня</span>
        <div class="listActiveMoika">
        <span
                v-if="checkboxMoika && moikaActiveArr"
                
                class="moika-active_title"
              ><span class="title_choose">Выбрано: </span>
                <ul>
                <li @click="(showMoika = true), (checkboxMoika = true)">{{ moikaActiveArr.pagetitle }} <i class="fa fa-pencil-square-o" aria-hidden="true"></i></li>
                <li><span v-if="moikaActiveArr2" @click="(showMoika2 = true), (checkboxMoika = true)">{{ moikaActiveArr2.pagetitle }} <i class="fa fa-pencil-square-o" aria-hidden="true"></i></span> <span v-if="moikaActiveArr2" @click="moikaActiveArr2 = {}" class="clearMoika">X</span></li>
                <li><span v-if="moikaActiveArr3" @click="(showMoika3 = true), (checkboxMoika = true)">{{ moikaActiveArr3.pagetitle }} <i class="fa fa-pencil-square-o" aria-hidden="true"></i></span> <span v-if="moikaActiveArr3" @click="moikaActiveArr3 = {}" class="clearMoika">X</span></li>
                <li><span v-if="moikaActiveArr4" @click="(showMoika4 = true), (checkboxMoika = true)">{{ moikaActiveArr4.pagetitle }} <i class="fa fa-pencil-square-o" aria-hidden="true"></i></span> <span v-if="moikaActiveArr4" @click="moikaActiveArr4 = {}" class="clearMoika">X</span></li>
                <li><span v-if="moikaActiveArr5" @click="(showMoika5 = true), (checkboxMoika = true)">{{ moikaActiveArr5.pagetitle }} <i class="fa fa-pencil-square-o" aria-hidden="true"></i></span> <span v-if="moikaActiveArr5" @click="moikaActiveArr5 = {}" class="clearMoika">X</span></li>
                </ul>
                
        </span>
        
        <span class="listMoika" v-if="moikaActiveArr && !moikaActiveArr2 && checkboxMoika" @click="showMoika2 = true">+ Выбрать еще</span>
        <span class="listMoika" v-if="moikaActiveArr2 && !moikaActiveArr3 && checkboxMoika" @click="showMoika3 = true">+ Выбрать еще</span>
        <span class="listMoika" v-if="moikaActiveArr3 && !moikaActiveArr4 && checkboxMoika" @click="showMoika4 = true">+ Выбрать еще</span>
        <span class="listMoika" v-if="moikaActiveArr4 && !moikaActiveArr5 && checkboxMoika" @click="showMoika5 = true">+ Выбрать еще</span>
        </div>
        <div style="clear:both;margin-bottom: 5px;"></div>
        <div class="box_radio" v-if="checkboxMoika == 0 && checkboxCutGlue == 0">
        <input class="tgl tgl-light" id="cb2"  v-model="checkboxCutMoika" type="checkbox">
        <label class="tgl-btn" for="cb2"></label>
        </div><!--<span  v-if="checkboxMoika == 0 && checkboxCutGlue == 0" class="count_vyrezy"> Х 
        <input class="input_count_vyrezy"
            type="number"
            v-model="CountcheckboxCutMoika"
          /> шт</span> -->
        <span v-if="checkboxMoika == 0 && checkboxCutGlue == 0" class="title_radio" v-bind:class="{active: checkboxCutMoika}">Вырез под накладную мойку</span> 
        <div style="clear:both;margin-bottom: 5px;"></div>
        <div class="box_radio" v-if="checkboxMoika == 0 && checkboxCutMoika == 0">
        <input class="tgl tgl-light" id="cb3" v-model="checkboxCutGlue" type="checkbox">
        <label class="tgl-btn" for="cb3"></label>
        </div><!--<span v-if="checkboxMoika == 0 && checkboxCutMoika == 0" class="count_vyrezy"> Х 
        <input class="input_count_vyrezy"
            type="number"
            v-model="CountcheckboxCutGlue"
          /> шт</span> -->
        <span v-if="checkboxMoika == 0 && checkboxCutMoika == 0" class="title_radio" v-bind:class="{active: checkboxCutGlue}">Вырез под мойку подстольного монтажа</span>
        <div style="clear:both;margin-bottom: 5px;"></div>
        <div class="box_radio"  v-if="checkboxMoika == 0">
        <input class="tgl tgl-light" id="cb4" v-model="checkboxCutMixer" type="checkbox">
        <label class="tgl-btn" for="cb4"></label>
        </div><span class="title_radio"  v-if="checkboxMoika == 0" v-bind:class="{active: checkboxCutMixer}">Вырез под смеситель</span>
        <div style="clear:both;margin-bottom: 5px;"></div>
        <div class="box_radio" v-if="typeMain != 3">
        <input class="tgl tgl-light" id="cb5" v-model="checkboxCutStove" type="checkbox">
        <label class="tgl-btn" for="cb5"></label>
        </div><!--<span class="count_vyrezy"> Х 
        <input class="input_count_vyrezy"
            type="number"
            v-model="CountcheckboxCutStove"
          /> шт</span> -->
        <span v-if="typeMain != 3" class="title_radio" v-bind:class="{active: checkboxCutStove}">Вырез под варочную панель</span>
        <div style="clear:both;margin-bottom: 5px;"></div>
       <!-- <div class="box_radio">
        <input class="tgl tgl-light" id="cb6" v-model="checkboxKernel" type="checkbox">
        <label class="tgl-btn" for="cb6"></label>
        </div><span class="title_radio" v-bind:class="{active: checkboxKernel}">Стержни под горячее</span>
        <div style="clear:both;margin-bottom: 5px;"></div> -->
    </div>

    <div  id="sec8" ref="sec8" v-if="typeMain != 2" class="select-wrapper">
      <p class="title"><span class="numStyle">8</span>Выбор торцевой кромки</p>
      <ul v-if="selectMaterial == 0 || selectMaterial == 3" class="select"> <!-- Кварц кромка-->
        <li 
          v-for="(item, index) in quartzKromkaArr"
          :key="index"
          @click="
            (selectKromka.id = index),
              (selectKromka.price = item.price),
              (selectKromka.name = item.name)
          "
          :class="{ active: selectKromka.id === index }"
        >
          <div class="img">
            <img :src="item.img" />
          </div>
          <div class="desc">
            <p class="name">{{ item.name }}</p>
            <p v-if="item.price[tablePrice.fat] != 0">Цена: {{ item.price[tablePrice.fat]*htmlSkidka.toFixed() }} за пог.м</p>
            <p v-else>Цена: -- за пог.м</p>
          </div>
        </li>
      </ul>
      <ul v-else-if="selectMaterial == 1" class="select">  <!-- Жидкий гранит кромка-->
        <li
          v-if="flagCategory == 1"
          v-for="(item, index) in liquidKromkaArr"
          :key="index"
          @click="
            (selectKromka.id = index),
              (selectKromka.price = item[CurrentPriceCategory]),
              (selectKromka.name = item.name)
          "
          :class="{ active: selectKromka.id === index }"
        >
          <div class="img">
            <img :src="item.img" />
          </div>
          <div class="desc">
            <p class="name">{{ item.name }}</p>
            <p v-if="item.price > 0">Цена: {{ item[CurrentPriceCategory]*htmlSkidka.toFixed() }} за пог.м</p>
            <p v-else>Цена: -- за пог.м</p>
          </div>
        </li>
        <li
          v-if="flagCategory == 2"
          v-for="(item, index) in liquidKromkaArr"
          :key="index"
          @click="
            (selectKromka.id = index),
              (selectKromka.price = item.price2),
              (selectKromka.name = item.name)
          "
          :class="{ active: selectKromka.id === index }"
        >
          <div class="img">
            <img :src="item.img" />
          </div>
          <div class="desc">
            <p class="name">{{ item.name }}</p>
            <p v-if="item.price2 > 0">Цена: {{ item.price2*htmlSkidka.toFixed() }} за пог.м</p>
            <p v-else>Цена: -- за пог.м</p>
          </div>
        </li>
        <li
          v-if="flagCategory == 3"
          v-for="(item, index) in liquidKromkaArr"
          :key="index"
          @click="
            (selectKromka.id = index),
              (selectKromka.price = item.price3),
              (selectKromka.name = item.name)
          "
          :class="{ active: selectKromka.id === index }"
        >
          <div class="img">
            <img :src="item.img" />
          </div>
          <div class="desc">
            <p class="name">{{ item.name }}</p>
            <p v-if="item.price3 > 0">Цена: {{ item.price3*htmlSkidka.toFixed() }} за пог.м</p>
            <p v-else>Цена: -- за пог.м</p>
          </div>
        </li>
      </ul>
      <ul v-else-if="selectMaterial == 2" class="select">   <!-- Акриловый камень кромка-->
        <li v-if="item.price[tablePrice.fat] != -1"
          v-for="(item, index) in acrilicKromkaArr"
          :key="index"
          @click="
            (selectKromka.id = index),
              (selectKromka.price = item.price),
              (selectKromka.name = item.name)
          "
          :class="{ active: selectKromka.id === index }"
        >
          <div class="img">
            <img :src="item.img" />
          </div>
          <div class="desc">
            <p class="name">{{ item.name }}</p>
            <p v-if="item.price[tablePrice.fat] != 0">Цена: {{ item.price[tablePrice.fat]*htmlSkidka.toFixed() }} за пог.м</p>
            <p v-else>Цена: -- за пог.м</p>
          </div>
        </li>
      </ul>
      <ul v-else></ul>
      
      <div v-if="selectMaterial == 1">
        <p @click="showPodhlest = !showPodhlest" class="title"><span class="numStyle">7</span>Выбор аппликаций <span class="showPodhlest">развернуть</span></p>
        
        <ul v-if="flagCategory == 1 && showPodhlest == true" class="select">
          <li
            v-for="(item, index) in liquidPathlistArr"
            :key="index"
            @click="
              (selectPathlist.id = index),
                (selectPathlist.price = item.price),
                (selectPathlist.name = item.name)
            "
            :class="{ active: selectPathlist.id === index }"
          >
            <div class="img">
              <img :src="item.img" />
            </div>
            <div class="desc">
              <p class="name">{{ item.name }}</p>
              <p v-if="item.price != 0">Цена: {{ item.price*htmlSkidka.toFixed() }} за пог.м</p>
              <p v-else>Цена: -- за пог.м</p>
            </div>
          </li>
          <li
            @click="
              (selectPathlist.id = false),
                (selectPathlist.price = 0),
                (selectPathlist.name = false)
            "
            :class="{ active: selectPathlist.id === false }"
          >
            <div class="img">
              <img src="images/icons/not.png" />
            </div>
            <div class="desc">
              <p class="name">Без подхлеста</p>
            </div>
          </li>
        </ul>
        <ul v-if="flagCategory == 2 && showPodhlest == true" class="select">
          <li
            v-for="(item, index) in liquidPathlistArr"
            :key="index"
            @click="
              (selectPathlist.id = index),
                (selectPathlist.price = item.price2),
                (selectPathlist.name = item.name)
            "
            :class="{ active: selectPathlist.id === index }"
          >
            <div class="img">
              <img :src="item.img" />
            </div>
            <div class="desc">
              <p class="name">{{ item.name }}</p>
              <p v-if="item.price2">Цена: {{ item.price2*htmlSkidka.toFixed() }} за пог.м</p>
              <p v-else>Цена: -- за пог.м</p>
            </div>
          </li>
          <li
            @click="
              (selectPathlist.id = false),
                (selectPathlist.price = 0),
                (selectPathlist.name = false)
            "
            :class="{ active: selectPathlist.id === false }"
          >
            <div class="img">
              <img src="images/icons/not.png" />
            </div>
            <div class="desc">
              <p class="name">Без подхлеста</p>
            </div>
          </li>
        </ul>
        <ul v-if="flagCategory == 3 && showPodhlest == true" class="select">
          <li
            v-for="(item, index) in liquidPathlistArr"
            :key="index"
            @click="
              (selectPathlist.id = index),
                (selectPathlist.price = item.price3),
                (selectPathlist.name = item.name)
            "
            :class="{ active: selectPathlist.id === index }"
          >
            <div class="img">
              <img :src="item.img" />
            </div>
            <div class="desc">
              <p class="name">{{ item.name }}</p>
              <p v-if="item.price3 != 0">Цена: {{ item.price3*htmlSkidka.toFixed() }} за пог.м</p>
              <p v-else>Цена: -- за пог.м</p>
            </div>
          </li>
          <li
            @click="
              (selectPathlist.id = false),
                (selectPathlist.price = 0),
                (selectPathlist.name = false)
            "
            :class="{ active: selectPathlist.id === false }"
          >
            <div class="img">
              <img src="images/icons/not.png" />
            </div>
            <div class="desc">
              <p class="name">Без подхлеста</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="clear"></div>

      <!--
      <div style="text-align:left;" class="hem_show_all">
        <a class="show_select_hem">Показать все</a>
      </div>
      -->
    </div>
    
    <div v-if="typeMain != 2" class="select-wrapper">
      <p class="title">Выбор пристенового бортика:</p>

      <ul v-if="selectMaterial == 0 || selectMaterial == 3" class="select"> <!-- Бортик кварц -->
        <li
          v-for="(item, index) in quartzBortikArr"
          :key="index"
          @click="
            (selectBortik.id = index),
              (selectBortik.price = item.price),
              (selectBortik.name = item.name)
          "
          :class="{ active: selectBortik.id === index }"
        >
          <div class="img">
            <img :src="item.img" />
          </div>
          <div class="desc">
            <p class="name">{{ item.name }}</p>
            <p v-if="item.price['30 мм'] != 0">Цена: {{ item.price['30 мм']*htmlSkidka.toFixed() }} за пог.м</p>
            <p v-else>Цена: -- за пог.м</p>
          </div>
        </li>
      </ul>
      <ul v-else-if="selectMaterial == 1" class="select">  <!-- Бортик жидкий гранит -->
        <li
          v-for="(item, index) in liquidBortikArr"
          :key="index"
          @click="
            (selectBortik.id = index),
              (selectBortik.price = item[CurrentPriceCategory]),
              (selectBortik.name = item.name)
          "
          :class="{ active: selectBortik.id === index }"
        >
          <div class="img">
            <img :src="item.img" />
          </div>
          <div class="desc">
            <p class="name">{{ item.name }}</p>
            <p v-if="item[CurrentPriceCategory] != 0">Цена: {{ item[CurrentPriceCategory]*htmlSkidka.toFixed() }} за пог.м</p>
            <p v-else>Цена: -- за пог.м</p>
          </div>
        </li>
      </ul>
      <ul v-else-if="selectMaterial == 2" class="select">  <!-- Бортик акриловый камень --> 
        <li
          v-for="(item, index) in acrilicBortikArr"
          :key="index"
          @click="
            (selectBortik.id = index),
              (selectBortik.price = item.price),
              (selectBortik.name = item.name)
          "
          :class="{ active: selectBortik.id === index }"
        >
          <div class="img">
            <img :src="item.img" />
          </div>
          <div class="desc">
            <p class="name">{{ item.name }}</p>
            <p v-if="item.price['30 мм'] != 0">Цена: {{ item.price['30 мм']*htmlSkidka.toFixed() }} за пог.м</p>
            <p v-else>Цена: -- за пог.м</p>
          </div>
        </li>
      </ul>
      <ul v-else></ul>
      <div class="clear"></div>
    </div>
    <hr />
    <div class="select-wrapper">
      <p class="title">Замер:</p>
      <label for>
        <input type="checkbox" v-model="checkboxZamer" />
        Поставьте галочку если хотите учесть стоимость замера
      </label>

      <p class="title">Доставка:</p>
      <label for>
        <input type="checkbox" v-model="checkboxDelivery" />
        Поставьте галочку если хотите учесть стоимость и выбрать район доставки
      </label>

      <transition name="slide" class="map-block">
        <yandex-map
          v-if="checkboxZamer || checkboxDelivery"
          @zone-id="zoneAccept($event)"
        />
      </transition>

      <p class="title">Установка:</p>
      <label for>
        <input type="checkbox" v-model="checkboxUstanovka" />
        Поставьте галочку если хотите учесть стоимость установки
      </label>
      <!--
      <p class="title">Подъем изделия на этаж:</p>
      <label for>
        <input type="checkbox" v-model="checkboxLifting" />
        Поставьте галочку если хотите учесть стоимость подъема изделия
      </label> -->
    </div>

    <div class="results">
      <p class="title">Результаты расчета:</p>
      <p v-if="selectMaterial != 0">
        Площадь столешницы: <b>{{ totalPrice.showTableSquare }}</b> м2.
      </p>
      <p v-else>
        Количество слэбов для столешницы: <b>{{ totalPrice.showTableSquare }}</b></br>
        Количество слэбов для стеновой панели: <b>{{ totalPrice.showPanelSquare }}</b>
       </p>
      <p v-if="PanelSquare != 0 && selectMaterial != 0">
        Площадь стеновой панели: <b>{{ totalPrice.PanelSquare }}</b> м2.
      </p>
      <p v-if="selectMaterial == 0">
        Стоимость одного слэба: <b>{{ totalPrice.priceSlab*htmlSkidka.toFixed() }} руб.</b> .
      </p>
      <p v-if="tablePrice.price && selectMaterial != 0">
        Цена за метр: <b>{{ tablePrice.price*htmlSkidka.toFixed()  }} {{ tablePrice.valuta }}</b
        >.
      </p>
      <p>Стоимость евро для расчета: {{euro}}</p>
      <p>Стоимость доллара для расчета: {{usd}}</p>
     <!-- <p v-if="selectMaterial != 2 && selectMaterial != 1 ">Сумма соединений:</p> -->
      <p v-if="totalPrice.kromkaLength">
        Длина торцевой кромки:
        <b>{{ totalPrice.kromkaLength }}</b> мм |
        <b>{{ totalPrice.kromkaPrice*htmlSkidka.toFixed() }}</b> руб.
      </p>
      <p v-if="selectKromka.name">
        Тип торцевой кромки: <b>{{ selectKromka.name }}</b>
      </p>
      <p v-if="totalPrice.bortikLength">
        Длина стенового бортика:
        <b>{{ totalPrice.bortikLength }}</b> мм |
        <b>{{ totalPrice.bortikPrice*htmlSkidka.toFixed() }}</b> руб.
      </p>
      <p v-if="selectBortik.name">
        Тип стенового бортика: <b>{{ selectBortik.name }}</b>
      </p>
      <p v-if="totalPrice.cutMixerPrice">
        Вырез под смеcитель: <b>{{ totalPrice.cutMixerPrice*htmlSkidka.toFixed() }}</b> руб.
      </p>
      <p v-if="totalPrice.cutMoikaPrice">
        Вырез под накладную мойку: <b>{{ totalPrice.cutMoikaPrice*htmlSkidka.toFixed() }}</b> руб., {{CountcheckboxCutMoika}} шт.
      </p>
      <p v-if="totalPrice.cutGluePrice">
        Вырез подклейка снизу: <b>{{ totalPrice.cutGluePrice*htmlSkidka.toFixed() }}</b> руб., {{CountcheckboxCutGlue}} шт.
      </p>
      <p v-if="totalPrice.moikaPrice">
        Мойка из камня: <b>{{ totalPrice.moikaPrice*htmlSkidka.toFixed() }}</b> руб.
      </p>
      <p v-if="totalPrice.moikaPrice2">
        Мойка из камня: <b>{{ totalPrice.moikaPrice2*htmlSkidka.toFixed() }}</b> руб.
      </p>
      <p v-if="totalPrice.moikaPrice3">
        Мойка из камня: <b>{{ totalPrice.moikaPrice3*htmlSkidka.toFixed() }}</b> руб.
      </p>
      <p v-if="totalPrice.moikaPrice4">
        Мойка из камня: <b>{{ totalPrice.moikaPrice4*htmlSkidka.toFixed() }}</b> руб.
      </p>
      <p v-if="totalPrice.moikaPrice5">
        Мойка из камня: <b>{{ totalPrice.moikaPrice5*htmlSkidka.toFixed() }}</b> руб.
      </p>
      <p v-if="totalPrice.cutStovePrice">
        Вырез под варочную панель: <b>{{ totalPrice.cutStovePrice*htmlSkidka.toFixed() }}</b> руб, {{CountcheckboxCutStove}}  шт.
      </p>
      <p>
        Доставка: <b>{{ totalPrice.zonePrice }}</b> руб.
      </p>
      <p>
        Замер: <b>{{ totalPrice.zamerPrice }}</b> руб.
      </p>
      <p>
        Установка: <b>{{ totalPrice.ustanovka }}</b> руб.
      </p> <!--
      <p>
        Подъем: <b>{{ totalPrice.lifting }}</b> руб.
      </p> -->
      <p>&nbsp;</p>
      <hr />
      <p>
        ИТОГОВАЯ СУММА:
        <b>{{ totalPrice.result }}</b> руб.
      </p>
    </div>
    <!-- Применить процент -->
    <transition name="modal" v-if="status == 0">
      <div
        v-if="$store.state.procentCalc == -1 || showChangeSkidka"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button v-if="$store.state.procentCalc != -1"
              class="modal-default-button"
              @click="showChangeSkidka = false"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Примените скидку:</h3>
              <h4>Обязательно выберите направление скидки</h4>
            </div>
            <select class="typeProcent" v-model="typeProcent">
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
            <span>%</span>
            <input class="skidka" placeholder="Укажите скидку в процентах" type="number" v-model="skidka">
            <button @click="applySkidka()" class="applySkidka">Применить</button> <span>или оставить</span>
            <button @click="noChange()" class="noChange">Розничная цена</button>
            
            <div class="modal-footer"></div>
          </div>  
        </div>
      </div>
    </transition>
    <!-- Авторизация -->
    <transition name="modal" v-if="auth">
      <div
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button v-if="$store.state.procentCalc != -1"
              class="modal-default-button"
              @click="auth = false"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Авторизация</h3>
            </div>
            <input class="skidka" placeholder="email" v-model="email">
            <input class="skidka" placeholder="пароль" v-model="password">
            <button @click="takeAuth()" class="applySkidka">Авторизоваться</button>
            <button @click="auth = false, reg = true" class="noChange">Регистрация</button>
            
            <div class="modal-footer"></div>
          </div>  
        </div>
      </div>
    </transition>
    <!-- Регистрация -->
    <transition name="modal" v-if="reg">
      <div
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button v-if="$store.state.procentCalc != -1"
              class="modal-default-button"
              @click="reg = false"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Регистрация</h3>
            </div>
            <input class="skidka" placeholder="email" v-model="email">
            <input class="skidka" placeholder="пароль" v-model="password">
            <input class="skidka" placeholder="Повторите пароль" v-model="passwordDouble">
            <button @click="takeReg()" class="applySkidka">Регистрация</button>
            
            <div class="modal-footer"></div>
          </div>  
        </div>
      </div>
    </transition>
    <!-- Раковины Жидкий -->
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 1) &&
          showMoika &&
          checkboxMoika && (typeMain == 3)
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>
            
            <Modal
              :moikaArr="sinkLiquidArr"
              v-on:moikaActive="moikaActiveArr = $event"
              v-on:modalActive="showMoika = $event"
            />
           
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 1) &&
          showMoika2 &&
          checkboxMoika && (typeMain == 3)
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika2 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>
            
            <Modal
              :moikaArr="sinkLiquidArr"
              v-on:moikaActive="moikaActiveArr2 = $event"
              v-on:modalActive="showMoika2 = $event"
            />
           
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 1) &&
          showMoika3 &&
          checkboxMoika && (typeMain == 3)
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika3 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>
            
            <Modal
              :moikaArr="sinkLiquidArr"
              v-on:moikaActive="moikaActiveArr3 = $event"
              v-on:modalActive="showMoika3 = $event"
            />
           
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 1) &&
          showMoika4 &&
          checkboxMoika && (typeMain == 3)
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika4 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>
            
            <Modal
              :moikaArr="sinkLiquidArr"
              v-on:moikaActive="moikaActiveArr4 = $event"
              v-on:modalActive="showMoika4 = $event"
            />
           
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 1) &&
          showMoika5 &&
          checkboxMoika && (typeMain == 3)
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika5 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>
            
            <Modal
              :moikaArr="sinkLiquidArr"
              v-on:moikaActive="moikaActiveArr5 = $event"
              v-on:modalActive="showMoika5 = $event"
            />
           
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Раковины Кварц -->
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 0) &&
          showMoika &&
          checkboxMoika && typeMain == 3
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="sinkQuartzArr"
              v-on:moikaActive="moikaActiveArr = $event"
              v-on:modalActive="showMoika = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 0) &&
          showMoika2 &&
          checkboxMoika && typeMain == 3
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika2 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="sinkQuartzArr"
              v-on:moikaActive="moikaActiveArr2 = $event"
              v-on:modalActive="showMoika2 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 0) &&
          showMoika3 &&
          checkboxMoika && typeMain == 3
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika3 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="sinkQuartzArr"
              v-on:moikaActive="moikaActiveArr3 = $event"
              v-on:modalActive="showMoika3 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 0) &&
          showMoika4 &&
          checkboxMoika && typeMain == 3
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika4 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="sinkQuartzArr"
              v-on:moikaActive="moikaActiveArr4 = $event"
              v-on:modalActive="showMoika4 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 0) &&
          showMoika5 &&
          checkboxMoika && typeMain == 3
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika5 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="sinkQuartzArr"
              v-on:moikaActive="moikaActiveArr5 = $event"
              v-on:modalActive="showMoika5 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Раковины Акриловый камень -->
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 2) &&
          showMoika &&
          checkboxMoika && typeMain == 3
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="sinkAcrilicArr"
              v-on:moikaActive="moikaActiveArr = $event"
              v-on:modalActive="showMoika = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 2) &&
          showMoika2 &&
          checkboxMoika && typeMain == 3
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika2 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="sinkAcrilicArr"
              v-on:moikaActive="moikaActiveArr2 = $event"
              v-on:modalActive="showMoika2 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 2) &&
          showMoika3 &&
          checkboxMoika && typeMain == 3
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika3 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="sinkAcrilicArr"
              v-on:moikaActive="moikaActiveArr3 = $event"
              v-on:modalActive="showMoika3 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 2) &&
          showMoika4 &&
          checkboxMoika && typeMain == 3
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika4 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="sinkAcrilicArr"
              v-on:moikaActive="moikaActiveArr4 = $event"
              v-on:modalActive="showMoika4 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 2) &&
          showMoika5 &&
          checkboxMoika && typeMain == 3
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika5 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="sinkAcrilicArr"
              v-on:moikaActive="moikaActiveArr5 = $event"
              v-on:modalActive="showMoika5 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Мойка из Кварца или Натурального камня -->
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 0 || selectMaterial == 3) &&
          showMoika &&
          checkboxMoika && typeMain == 1
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="moikaQuartzArr"
              v-on:moikaActive="moikaActiveArr = $event"
              v-on:modalActive="showMoika = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 0 || selectMaterial == 3) &&
          showMoika2 &&
          checkboxMoika && typeMain == 1
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika2 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="moikaQuartzArr"
              v-on:moikaActive="moikaActiveArr2 = $event"
              v-on:modalActive="showMoika2 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 0 || selectMaterial == 3) &&
          showMoika3 &&
          checkboxMoika && typeMain == 1
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika3 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="moikaQuartzArr"
              v-on:moikaActive="moikaActiveArr3 = $event"
              v-on:modalActive="showMoika3 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 0 || selectMaterial == 3) &&
          showMoika4 &&
          checkboxMoika && typeMain == 1
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika4 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="moikaQuartzArr"
              v-on:moikaActive="moikaActiveArr4 = $event"
              v-on:modalActive="showMoika4 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="
          (selectMaterial == 0 || selectMaterial == 3) &&
          showMoika5 &&
          checkboxMoika && typeMain == 1
        "
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika5 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки:</h3>
            </div>

            <Modal
              :moikaArr="moikaQuartzArr"
              v-on:moikaActive="moikaActiveArr5 = $event"
              v-on:modalActive="showMoika5 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Мойка из Жидкого камня -->
    <transition name="modal">
      <div
        v-if="selectMaterial == 1 && showMoika && checkboxMoika && typeMain == 1"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки из жидкого камня:</h3>
            </div>

            <Modal
              :moikaArr="moikaLiquidArr"
              :innerCorner="innerCorner"
              v-on:moikaActive="moikaActiveArr = $event"
              v-on:modalActive="showMoika = $event"
            />
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="selectMaterial == 1 && showMoika2 && checkboxMoika && typeMain == 1"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika2 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки из жидкого камня:</h3>
            </div>

            <Modal
              :moikaArr="moikaLiquidArr"
              :innerCorner="innerCorner"
              v-on:moikaActive="moikaActiveArr2 = $event"
              v-on:modalActive="showMoika2 = $event"
            />
           <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="selectMaterial == 1 && showMoika3 && checkboxMoika && typeMain == 1"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika3 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки из жидкого камня:</h3>
            </div>

            <Modal
              :moikaArr="moikaLiquidArr"
              :innerCorner="innerCorner"
              v-on:moikaActive="moikaActiveArr3 = $event"
              v-on:modalActive="showMoika3 = $event"
            />
           <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="selectMaterial == 1 && showMoika4 && checkboxMoika && typeMain == 1"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika4 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки из жидкого камня:</h3>
            </div>

            <Modal
              :moikaArr="moikaLiquidArr"
              :innerCorner="innerCorner"
              v-on:moikaActive="moikaActiveArr4 = $event"
              v-on:modalActive="showMoika4 = $event"
            />
           <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="selectMaterial == 1 && showMoika5 && checkboxMoika && typeMain == 1"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika5 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки из жидкого камня:</h3>
            </div>

            <Modal
              :moikaArr="moikaLiquidArr"
              :innerCorner="innerCorner"
              v-on:moikaActive="moikaActiveArr5 = $event"
              v-on:modalActive="showMoika5 = $event"
            />
           <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Мойка из Акрилового камня -->
    <transition name="modal">
      <div
        v-if="selectMaterial == 2 && showMoika && checkboxMoika && typeMain == 1"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки из Акрилового камня:</h3>
            </div>

            <Modal
              :moikaArr="moikaAcrilicArr"
              v-on:moikaActive="moikaActiveArr = $event"
              v-on:modalActive="showMoika = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="selectMaterial == 2 && showMoika2 && checkboxMoika && typeMain == 1"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika2 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки из Акрилового камня:</h3>
            </div>

            <Modal
              :moikaArr="moikaAcrilicArr"
              v-on:moikaActive="moikaActiveArr2 = $event"
              v-on:modalActive="showMoika2 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="selectMaterial == 2 && showMoika3 && checkboxMoika && typeMain == 1"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika3 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки из Акрилового камня:</h3>
            </div>

            <Modal
              :moikaArr="moikaAcrilicArr"
              v-on:moikaActive="moikaActiveArr3 = $event"
              v-on:modalActive="showMoika3 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="selectMaterial == 2 && showMoika4 && checkboxMoika && typeMain == 1"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika4 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки из Акрилового камня:</h3>
            </div>

            <Modal
              :moikaArr="moikaAcrilicArr"
              v-on:moikaActive="moikaActiveArr4 = $event"
              v-on:modalActive="showMoika4 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="modal">
      <div
        v-if="selectMaterial == 2 && showMoika5 && checkboxMoika && typeMain == 1"
        class="modal-mask"
      >
        <div class="modal-wrapper">
          <div class="modal-container">
            <button
              class="modal-default-button"
              @click="(showMoika5 = false), (checkboxMoika = false)"
            >
              X
            </button>
            <div class="modal-header">
              <h3>Выбор мойки из Акрилового камня:</h3>
            </div>

            <Modal
              :moikaArr="moikaAcrilicArr"
              v-on:moikaActive="moikaActiveArr5 = $event"
              v-on:modalActive="showMoika5 = $event"
            />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </transition>
    
  </div>
</template>


<script>
import Carousel from "~/components/inner/carousel2.vue";
import Plitka from "~/components/inner/plitka.vue";
import yandexMap from "~/components/inner/ymaps.vue";
import Modal from "~/components/inner/moika_modal.vue";
export default {
  components: { Carousel, Plitka, yandexMap, Modal },
  props: {
    quartzArr: {},
    liquidArr: {},
    acrilicArr: {},
    naturalArr: {},
    quartzKromkaArr: {},
    liquidKromkaArr: {},
    liquidPathlistArr: {},
    acrilicKromkaArr: {},
    quartzBortikArr: {},
    liquidBortikArr: {},
    acrilicBortikArr: {},
    cutMixer: 0,
    cutMixerLiquid: 0,
    cutWashing: 0,
    cutWashingLiquid: 0,
    cutWashingAcrylic: 0,
    cutGlue: 0,
    cutGlueLiquid: 0,
    cutGlueAcrylic: 0,
    cutStove: 0,
    cutStoveLiquid: 0,
    cutStoveAcrylic: 0,
    metering: 0,
    kernelLiquid: 0,
    moikaLiquidArr: {},
    sinkLiquidArr: {}, // Раковины Жидкий
    moikaQuartzArr: {},
    sinkQuartzArr: {},
    sinkAcrilicArr: {},
    moikaAcrilicArr: {},
    sinkAcrilicArr: {},
    moikaActiveArr: {},
    moikaActiveArr2: {},
    moikaActiveArr3: {},
    moikaActiveArr4: {},
    moikaActiveArr5: {},
    euro: Number,
    usd: Number,
    status: Number
  },
  data() {
    return {
      // параметры стола
      auth: false,
      authCheck: false,
      reg: false,
      email: '',
      password: "",
      passwordDouble: "",
      userName: "",
      CountcheckboxCutMoika: 1,
      CountcheckboxCutGlue: 1,
      CountcheckboxCutStove: 1,
      typeProcent: '+',
      showChangeSkidka: false,
      skidka: 0,
      htmlSkidka: 1,
      filteredPalitra:'',
      arrfilteredPalitra: [],
      selectMaterial: 0, // материал
      CurrentPriceCategory: 'price',
      linkSee: 1, // флаг выбора карусели - плитки
      flagCategory: 1, // флаг выбора ценовой категории
      selectKromka: { id: false, price: 0, name: "" }, // тип кромки
      selectBortik: { id: false, price: 0, name: "" }, // тип бортика
      selectPathlist: { id: false, price: 0, name: "" }, // доп.опции кромок и бортиков
      tablePrice: { valuta: false, price: 0, fat: "" }, // цена столешницы за кв.м
      tableWidth: '', // Ширина стола
      tableLength: '', // Длина стола
      tableWidthLeft: '', // Ширина Г стола
      tableWidthRight: '', // Ширина Г стола
      tableLengthLeft: '', // Длина Г стола
      tableLengthRight: '', // Длина Г стола
      p_tableLeftLength: '', // длина левого блока П - стола
      p_tableLeftWidth: '', // Ширина левого блока П - стола
      p_table_Far_LeftLength: '', // длина левого дальнего блока П - стола
      p_table_Far_RightLength: '', // длина правого дальнего блока П - стола
      p_table_Far_LeftWidth: '', // Ширина левого дальнего блока П - стола
      p_table_Far_RightWidth: '', // Ширина правого дальнего П - стола
      checkboxCutMixer: false, // Вырез под смеситель
      checkboxCutMoika: false, // Вырез под мойку
      checkboxCutStove: false, // Вырез под варочную панель
      checkboxMoika: false, // Мойка из камня
      checkboxPanel: false, // Стеновая панель
      checkboxPanelWidth: 0, // Ширина стеновая панель
      checkboxPanelHeight: 600, // Высота стеновая панель
      checkboxCutGlue: false, // Вырез под мойку подклейка снизу
      checkboxZamer: false, // Замер
      checkboxDelivery: false, // Доставка
      checkboxUstanovka: false, // Установка
      checkboxLifting: false, // Подъем
      checkboxKernel: false, // Стержни под горячее
      farEdge: 2, // дальний край (по умолчанию пристеночный бортик)
      farEdge2: 2, // дальний край Г стола (по умолчанию пристеночный бортик)
      frontEdge: 1, // передний край (по умолчанию торцевая кромка)
      frontEdge2: 1, // передний край (по умолчанию торцевая кромка)
      leftEdge: 2, // левый край (по умолчанию пристеночный бортик)
      rightEdge: 1, // правый край (по умолчанию торцевая кромка)
      pEdge_1: 1, // кромка для П - стола
      pEdge_2: 1,
      pEdge_3: 1,
      pEdge_4: 2,
      pEdge_5: 1,
      pEdge_6: 2,
      pEdge_7: 1,
      pEdge_8: 1,
      innerCorner: 0, // Внутренний угол
      typeinnerCorner: 0,// Вариант угла со срезом для П-образки
      zoneId: 0,
      showMoika: false,
      showMoika2: false,
      showMoika3: false,
      showMoika4: false,
      showMoika5: false,
      materialArr: [
        { name: "Кварцевый камень" },
        { name: "Жидкий гранит" },
        { name: "Акриловый камень" },
        { name: "Натуральный камень" },
      ],
      palitraArr: [
        {
          series: "1012 Амьен",
          img: "pictures/img/palitra/avant/1012-Амьен.jpg",
        },
        {
          series: "1220 Клермон",
          img: "pictures/img/palitra/avant/1220-Клермон.jpg",
        },
        {
          series: "1100 Лимож",
          img: "pictures/img/palitra/avant/1100-Лимож.jpg",
        },
        {
          series: "1260 Нанси",
          img: "pictures/img/palitra/avant/1260-Нанси.jpg",
        },
        {
          series: "1203 Орлеан",
          img: "pictures/img/palitra/avant/1203-Орлеан.jpg",
        },
        {
          series: "1204 Пикардия",
          img: "pictures/img/palitra/avant/1204-Пикардия.jpg",
        },
        {
          series: "1240 Руан",
          img: "pictures/img/palitra/avant/1240-Руан.jpg",
        },
      ],
      selectVedorQuartz: "AVANT QUARTZ", // производитель по-умолчанию для кварца
      selectVedor: "",
      flagVendor: false,
      venorsQuartzArr: [
        { name: "AVANT QUARTZ", img: "pictures/img/vendors/avantquartz.png" },
        { name: "CAESARSTONE", img: "pictures/img/vendors/cezarstoun.jpg" },
        { name: "SAMSUNG RADIANZ", img: "pictures/img/vendors/013_vendor.jpg" },
        { name: "TECHNISTONE", img: "pictures/img/vendors/Technistone.jpg" },
        { name: "VICOSTONE", img: "pictures/img/vendors/018_vendor.jpg" },
        { name: "SILESTONE", img: "pictures/img/vendors/silestone.png" },
      ],
      venorsLiquidArr: [
        { name: "PLAZA STONE", img: "pictures/img/vendors/Plazastone.jpg" },
        { name: "TECHNISTONE", img: "pictures/img/vendors/Technistone.jpg" },
        { name: "CAESARSTONE", img: "pictures/img/vendors/cezarstoun.jpg" },
        { name: "SILESTONE", img: "pictures/img/vendors/silestone.png" },
        { name: "AVANT QUARTZ", img: "pictures/img/vendors/avantquartz.png" },
        { name: "NEONARM", img: "pictures/img/vendors/011_vendor.jpg" },
        { name: "SAMSUNG RADIANZ", img: "pictures/img/vendors/013_vendor.jpg" },
        { name: "VICOSTONE", img: "pictures/img/vendors/018_vendor.jpg" },
        {
          name: "SANTA MARGERITHA",
          img: "pictures/img/vendors/santamargeritha.jpg",
        },
      ],
      venorsAkrilArr: [
       // { name: "BIENSTONE", img: "pictures/img/vendors/002_vendor.jpg" },
        { name: "NEOMARM", img: "pictures/img/vendors/011_vendor.jpg" },
       // { name: "CORIAN", img: "pictures/img/vendors/005_vendor.jpg" },
        { name: "GRANDEX", img: "pictures/img/vendors/006_vendor.jpg" },
        { name: "HANEX", img: "pictures/img/vendors/008_vendor.jpg" },
        { name: "LG HI-MACS", img: "pictures/img/vendors/009_vendor.jpg" },
       // { name: "MONTELLI", img: "pictures/img/vendors/010_vendor.jpg" },
        { name: "SAMSUNG STARON", img: "pictures/img/vendors/staron_logo.jpg" },
       // { name: "TRISTONE", img: "pictures/img/vendors/017_vendor.jpg" },
      ],
      venorsNaturalArr: [
        {
          name: "VENEZIA STONE",
          img: "pictures/img/vendors/veneziastone-logo.jpg",
        },
      ],
      zonePriceArr: [0, 1000, 1500, 2000], // стоимость доставки в зависимости от зоны
      typeMain: 1,
      typeTabletop: 1,
      //tempFilteredArr: [],
      //carouselActiveArr: filteredMaterialArr[0] || [{ img: "", series: "", euro: "" }], // активный материал (текстура) передаваемый из компонета carousel (по умолчанию первый материал из массива активный)
      carouselActiveArr: [],
      // жидкий камень по ценовым категориям
      categoryLiquidArr: [
        { series: "Выберите ценовую категорию", img: "" },
        { series: "Выберите ценовую категорию", img: "" },
        { series: "Выберите ценовую категорию", img: "" },
        { series: "Выберите ценовую категорию", img: "" },
        { series: "Выберите ценовую категорию", img: "" },
      ],
      // По-умолчанию подхлест скрываем, т.к. им пользуются в основном дилера
      showPodhlest: false,
      moikaActiveArr2: {},
      moikaActiveArr3: {},
      moikaActiveArr4: {},
      moikaActiveArr5: {},
    };
  },
  methods: {
    async takeReg() {
      if(this.password == this.passwordDouble && this.password != "" && this.passwordDouble != "" && this.email != "") {
      await this.$axios.$post(
        "https://стильный-камень.рф/api/components/register.php",
        { login: this.email, password: this.password }
        
      ).then((res) => {
          if(res.code == 1) {
            this.$toast.show("Вы зарегистрированы.", {
            position: "top-center",
            duration: 3000,
            theme: "bubble",
            type: "success",
            });
            this.reg = false
            this.takeAuth()
          }
      })
        .catch((err) => {
            console.log(err)
      });
      }
    },
    async takeAuth() {
      // ДЕЛАЕМ ЗАПРОС К БД MODX И ПРОВЕРЯЕМ НАЛИЧИЕ ЮЗЕРА
      await this.$axios.$post(
        "https://стильный-камень.рф/api/components/login.php",
        { login: this.email, password: this.password }
        
      ).then((res) => {
          if(res.code == 1) {
            this.authCheck = true
            this.auth = false
            this.userName = res.email
            localStorage.setItem("email", res.email)
            localStorage.setItem("iduser", res.id)
            if(res.extended.length == 0) {
              this.showChangeSkidka = true
            } else {
              this.skidka = res.extended.skidka
              this.typeProcent = res.extended.typeProcent
              this.applySkidka()
            }
          }
      })
        .catch((err) => {
            console.log(err)
        });
    },
    Logout() {
      localStorage.removeItem('email');
      localStorage.removeItem('iduser');
      localStorage.removeItem('procent');
      localStorage.removeItem('direction');
      this.skidka = 0
      this.typeProcent = '+'
      this.applySkidka()
      this.authCheck = false
    },
    checkThickness(){
      // Провека выбора толщины столешницы
      if(this.tablePrice.price == undefined) {
      //  console.log('dfsdf')
      }
    },
    applySkidka() {
      
        this.$store.commit("changeProcent", [this.skidka, this.typeProcent])
        var koefSkidka = 1
        if(this.skidka != 0){
        if(this.typeProcent == '+') {
          koefSkidka =  +1 + this.skidka/100
        } else {
          koefSkidka = 1 - this.skidka/100
        }
        }
        this.$store.commit("calc/setKoeffSkidka", koefSkidka);
        this.showChangeSkidka = false
        if(localStorage.getItem("iduser") != null && localStorage.getItem("iduser") != '') { // Если пользователь авторизован, то записываем в extended
          this.$axios.$post(
            "https://стильный-камень.рф/api/components/changeExtended.php",
            { id: localStorage.getItem("iduser"), skidka: this.skidka, typeProcent: this.typeProcent }
            
          ).then((res) => {
          })
            .catch((err) => {
                console.log(err)
          });
        }
     
    },
    noChange() {
        this.$store.commit("changeProcent", [0, '+'])
        this.skidka = 0
        this.$store.commit("calc/setKoeffSkidka", 1);
        this.showChangeSkidka = false
    },
    // Переходим по боковому меню
    goToStep(name) {
      this.$refs[name].scrollIntoView({block: "center", behavior: "smooth"})
    },
    // прием данных из дочернего компонента карт ymaps
    zoneAccept(e) {
      //console.log('ok!' + e);
      this.zoneId = e;
    },
    //Выбор ценовой категории
    priceCategory(e) {
      //console.log("category: " + e);
      this.flagCategory = e || 1;
      let arr = this.liquidArr;
      //console.log(arr.find(item => item.group == e));
      this.categoryLiquidArr = arr.filter((item) => item.group == e);
      if(e == 1) {
      this.CurrentPriceCategory = 'price'
      } else if(e == 2) {
      this.CurrentPriceCategory = 'price2'  
      } else {
      this.CurrentPriceCategory = 'price3'  
      }
      this.selectKromka.price = this.liquidKromkaArr[this.selectKromka.id][this.CurrentPriceCategory];
      this.selectBortik.price = this.liquidBortikArr[this.selectBortik.id][this.CurrentPriceCategory];
      //this.materialDefaultFun(this.selectMaterial)
    },
    // установка бортиков по умолчанию в зависимости от выбранного материала
    materialDefaultFun(index) {
      this.CurrentPriceCategory = 'price'
      this.flagCategory = 1
      if (index == 0 || index == 3) {
        // торцевая кромка по умолчанию для кварца и натурального камня
        this.selectKromka.id = 0;
        this.selectKromka.price = this.quartzKromkaArr[0].price["30 мм"];
        this.selectKromka.name = this.quartzKromkaArr[0].name;
        // пристеновой бортик по умолчанию для кварца и натурального камня
        this.selectBortik.id = 0;
        this.selectBortik.price = this.quartzBortikArr[0].price;
        this.selectBortik.name = this.quartzBortikArr[0].name;
      } else if (index == 1) {
        // торцевая кромка по умолчанию для жидкого камня (необходима доработка по ценовым категориям)
        this.selectKromka.id = 0;
        this.selectKromka.price = this.liquidKromkaArr[0][this.CurrentPriceCategory];
        this.selectKromka.name = this.liquidKromkaArr[0].name;
        // пристеновой бортик
        this.selectBortik.id = 0;
        this.selectBortik.price = this.liquidBortikArr[0][this.CurrentPriceCategory];
        this.selectBortik.name = this.liquidBortikArr[0].name;
      } else if (index == 2) {
        this.tablePrice.fat = '24 мм'
        // торцевая кромка по умолчанию для акрилового камня
        this.selectKromka.id = 0;
        this.selectKromka.price = this.acrilicKromkaArr[0].price[this.tablePrice.fat];
        this.selectKromka.name = this.acrilicKromkaArr[0].name;
        // пристеновой бортик
        this.selectBortik.id = 0;
        this.selectBortik.price = this.acrilicBortikArr[0].price;
        this.selectBortik.name = this.acrilicBortikArr[0].name;
      }
    },
    // установка толщины столешницы по умолчанию в зависимости от выбранного материала
    fatDefaultFun(index) {
      console.log(this.filteredMaterialArr)
      this.carouselActiveArr = this.filteredMaterialArr[0];
      if (index == 0) {
        // столешница по умолчанию для кварца
        this.tablePrice.valuta = "usd";
        this.tablePrice.price = this.carouselActiveArr["usd"]["20 мм"];
        this.tablePrice.fat = "20 мм";
        console.log(this.tablePrice)
      } else if (index == 1) {
        // столешница по умолчанию для жидкого камня (необходима доработка по ценовым категориям)
        this.tablePrice.valuta = "rub";
        this.tablePrice.price = this.carouselActiveArr["price"]["24 мм"];
        this.tablePrice.fat = "24 мм";
      } else if (index == 2) {
        // столешница по умолчанию для акрилового камня
        this.tablePrice.valuta = "usd";
        this.tablePrice.price = this.carouselActiveArr["usd"]["24 мм"];
        this.tablePrice.fat = "24 мм";
      } else if (index == 3) {
        // столешница по умолчанию для натурального камня
        this.tablePrice.valuta = "euro";
        this.tablePrice.price = this.carouselActiveArr["euro"]["20 мм"];
        this.tablePrice.fat = "20 мм";
      }
    },
  },
  beforeMount() {
    
  },
  mounted() {
    if(localStorage.getItem("iduser") != null && localStorage.getItem("iduser") != '') { // Если пользователь авторизован, то записываем в extended
      this.authCheck = true
      this.auth = false
      this.userName = localStorage.getItem("email")
      console.log(localStorage.getItem("iduser"))
    }
    // Узнаем указывал ли процент дилер
    console.log(localStorage.getItem("procent"))
    console.log(localStorage.getItem("direction"))
    var procentStorage = Number(localStorage.getItem("procent"));
    //console.log("Процент " + procentStorage)
    if(procentStorage != undefined) {
      
      if(procentStorage != -1){
      this.skidka = Number(procentStorage)
      this.typeProcent = localStorage.getItem("direction")
      }
      if(localStorage.getItem("iduser") != null && localStorage.getItem("iduser") != '') { // Если пользователь авторизован, то записываем в extended
        this.$axios.$post(
            "https://стильный-камень.рф/api/components/changeExtended.php",
            { id: localStorage.getItem("iduser"), take: 1 }
            
          ).then((res) => {
            console.log(res)
            this.skidka = res.skidka
            this.typeProcent = res.typeProcent
          })
            .catch((err) => {
                console.log(err)
          });
      }
      var koefSkidka = 1
        if(this.skidka != 0){
        if(this.typeProcent == '+') {
          koefSkidka =  +1 + this.skidka/100
        } else {
          koefSkidka = 1 - this.skidka/100
        }
        }
        this.$store.commit("changeProcent", [procentStorage, this.typeProcent])
        this.$store.commit("calc/setKoeffSkidka", koefSkidka);
    }
    // Делаем меню по пунктам
    
    const scene1 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#sec1",
        duration: document.getElementById("sec1").offsetHeight
      })
      .setClassToggle("#step1", "active")
      .on("end", function (event) {
        
      })
    this.$scrollmagic.addScene(scene1)
    const scene2 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#sec2",
        duration: document.getElementById("sec2").offsetHeight
      })
      .setClassToggle("#step2", "active")
    this.$scrollmagic.addScene(scene2)
    const scene3 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#sec3",
        duration: document.getElementById("sec3").offsetHeight
      })
      .setClassToggle("#step3", "active")
    this.$scrollmagic.addScene(scene3)
    const scene4 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#sec4",
        duration: document.getElementById("sec4").offsetHeight
      })
      .setClassToggle("#step4", "active")
    this.$scrollmagic.addScene(scene4)
    const scene5 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#sec5",
        duration: document.getElementById("sec5").offsetHeight
      })
      .setClassToggle("#step5", "active")
    this.$scrollmagic.addScene(scene5)
    const scene6 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#sec6",
        duration: document.getElementById("sec6").offsetHeight
      })
      .setClassToggle("#step6", "active")
    this.$scrollmagic.addScene(scene6)
    const scene7 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#sec7",
        duration: document.getElementById("sec7").offsetHeight
      })
      .setClassToggle("#step7", "active")
    this.$scrollmagic.addScene(scene7)
    const scene8 = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#sec8",
        duration: document.getElementById("sec8").offsetHeight
      })
      .setClassToggle("#step8", "active")
    this.$scrollmagic.addScene(scene8)
    // активная текстура карусели по умолчанию устанавливаемая после загрузки страницы
    this.carouselActiveArr = this.tempFilteredArr[0];
    // активная текстура карусели по умолчанию для жидкого камня
    this.categoryLiquidArr = this.liquidArr.filter((item) => item.group == 1);
    // толщина столешницы по умолчанию для кварца устанавливаемая после загрузки страницы
    this.tablePrice.valuta = "usd";
    this.tablePrice.price = this.carouselActiveArr["usd"]["20 мм"];
    this.tablePrice.fat = "20 мм";
    // торцевая кромка по умолчанию для кварца устанавливаемая после загрузки страницы
    this.selectKromka.id = 0;
    this.selectKromka.price = this.quartzKromkaArr[0].price["20 мм"];
    this.selectKromka.name = this.quartzKromkaArr[0].name;
    // пристеновой бортик по умолчанию для кварца устанавливаемая после загрузки страницы
    this.selectBortik.id = 0;
    this.selectBortik.price = this.quartzBortikArr[0].price["20 мм"];
    this.selectBortik.name = this.quartzBortikArr[0].name;
    this.selectMaterial = 1
    this.materialDefaultFun(1)
    this.fatDefaultFun(1)
  },
  computed: {
    // получение объекта текстур в зависимости от производителя и материала
    filteredMaterialArr: function () {
      var name =
        this.selectMaterial == 0 ? this.selectVedorQuartz : this.selectVedor;
      var arrIndex = this.selectMaterial;
      var arr = [];
      let result = [];
      switch (arrIndex) {
        case 0:
          arr = this.quartzArr;
          break;
        case 1:
          arr = this.categoryLiquidArr; // жидкий камень по ценовым категориям
          break;
        case 2:
          arr = this.acrilicArr;
          break;
        case 3:
          arr = this.naturalArr;
          break;
        default:
          arr = this.quartzArr;
      }
      if (arrIndex != 1) {
        // исключая жидкий камень
        result = arr.filter(function (elem) {
          if (name === "") return true;
          else return elem.material.toUpperCase().indexOf(name) > -1;
        });
      } else result = this.categoryLiquidArr;
      this.tempFilteredArr = result;

      if(this.filteredPalitra != '') {
      var tmpSearch = this.filteredPalitra
      var temp = []
      temp = result.filter(function (elem) {
        if(tmpSearch==='') {
        return true;
        }
        else {
        return elem['series'].toLowerCase().indexOf(tmpSearch) > -1;
        }
      })
      this.arrfilteredPalitra = temp
      this.tempFilteredArr = this.arrfilteredPalitra
      result = this.arrfilteredPalitra
      }
      return result;
    },
    // Основной расчет
    totalPrice() {
      let vm = {};
      let priceSlab = 0
      //let CurrentPriceCategory = this.CurrentPriceCategory
      let plusPanelSquare = this.checkboxPanel; // Иницаилизируем включение стеновой панели
      let tableWidth = this.tableWidth; // Ширина стола
      let tableLength = this.tableLength; // Длина стола
      let tableWidthLeft = this.tableWidthLeft; // Ширина Г стола
      let tableWidthRight = this.tableWidthRight; // Ширина Г стола
      let tableLengthLeft = this.tableLengthLeft; // Длина Г стола
      let tableLengthRight = this.tableLengthRight; // Длина Г стола
      let cutMixerPrice = 0; // цена за вырез под смеситель
      let cutMoikaPrice = 0; // цена за вырез под мойку
      let cutStovePrice = 0; // цена за вырез под варочную панель
      let kernelPrice = 0; // стоимость стержней под горячее
      let tablePrice = this.tablePrice; // объект с данными о ценах для выбранной столешницы за 1кв метр
      let calculationPrice = 0; // цена для расчетов
      let kromkaPriceArr = this.selectKromka.price; // массив с ценами кромки
      let bortikPriceArr = this.selectBortik.price; // массив с ценами бортика ()
      let kromkaLength = 0;
      let koeffUstanovka = 0
      let bortikLength = 0;
      let tableFat = this.tablePrice.fat; // толщина столешницы
      let kromkaPrice = kromkaPriceArr[tableFat]
        ? kromkaPriceArr[tableFat]
        : kromkaPriceArr; // Если есть данные о толщине цена кромки в рублях
      //let bortikPrice = bortikPriceArr[tableFat] ? bortikPriceArr[tableFat] : 0; // Если есть данные о толщине цена бортика в рублях
      let bortikPrice = this.selectBortik.price; // т.к. данные о ценах бортика не массив присваиваем цену напрямую
      

      if(this.selectMaterial == 2 || this.selectMaterial == 0) {
      bortikPrice = this.selectBortik.price['30 мм'];
      //console.log(bortikPrice)
      } else {
      bortikPrice = this.selectBortik.price; // т.к. данные о ценах бортика не массив присваиваем цену напрямую
      
      }
      let edgePrice = 0; // общая стоимость краевой обработки столешницы
      // Скидка менеджера
      this.skidka = Number(this.skidka)
      var koefSkidka = 1
      if(this.skidka != 0){
        if(this.typeProcent == '+') {
          koefSkidka =  +1 + this.skidka/100
        } else {
          koefSkidka = 1 - this.skidka/100
        }
      }
      this.htmlSkidka = koefSkidka
      this.$store.commit("calc/setKoeffSkidka", koefSkidka);
      //
      let tableSquare = 0; // площадь столешницы
      let showTableSquare = 0; // площадь столешницы, которую показываем в итогах
      let PanelSquare = 0; // площадь стеновой панели
      let PanelPrice = 0; // Стоимость стеновой панели 
      let showPanelSquare = 0; // площадь стеновой панели, которую показываем в итогах
      let tableSquareInstall = 0 // площадь столешницы для расчета установки кварца
      let PanelSquareInstall = 0 // площадь стеновой панели для расчета установки кварца
      let length = tableLength + tableLengthLeft + tableLengthRight; // общая длина столешницы
      let result = 0; // итоговая цена
      // конвертируем цену в рубли
      if (tablePrice.valuta == "euro") {
        calculationPrice = tablePrice.price * this.euro;
      } else if (tablePrice.valuta == "usd") {
        calculationPrice = tablePrice.price * this.usd;
      } else {
        calculationPrice = tablePrice.price;
      }
      // если материал кварц и длина более 3м
      if (this.selectMaterial == 0 && length > 3000) {
        // вводим специальную переменную для более чем 1 слеба.
      }
      // Назначаем цену за вырез под смеситель
      if ((this.selectMaterial == 1 || this.selectMaterial == 2) && this.checkboxCutMixer) {
        // если материал Жидкий камень
        cutMixerPrice = this.cutMixerLiquid;
      } else if (this.selectMaterial != 1 && this.selectMaterial != 2 && this.checkboxCutMixer) {
        // в остальных случаях..
        cutMixerPrice = this.cutMixer;
      } else {
        cutMixerPrice = 0
      }
      // Назначаем цену за вырез под мойку
      if (this.selectMaterial == 1 && this.checkboxCutMoika) {
        // если материал Жидкий камень и вырез под мойку
        cutMoikaPrice = this.cutWashingLiquid;
      } else if (this.selectMaterial == 2 && this.checkboxCutMoika) {
        // если акрил.
        cutMoikaPrice = this.cutWashingAcrylic;
      } else if (
        (this.selectMaterial == 0 || this.selectMaterial == 3) &&
        this.checkboxCutMoika
      ) {
        // если кварц или натур.
        cutMoikaPrice = this.cutWashing;
      } else {
        cutMoikaPrice = 0;
      }
      // Назначаем цену за вырез мойки, подклейка снизу
      let cutGluePrice = this.checkboxCutGlue ? 8100 : 0;
      //let moikaPrice = this.checkboxMoika ? this.carouselActiveArr.washing : 0; // стоимость мойки если отмечена мойка из камня
      let moikaPrice =
        this.checkboxMoika && this.moikaActiveArr
          ? this.moikaActiveArr.price
          : 0; // стоимость мойки если отмечена мойка из камня
      let moikaPrice2 =
        this.checkboxMoika && this.moikaActiveArr2
          ? this.moikaActiveArr2.price
          : 0;
      let moikaPrice3 =
        this.checkboxMoika && this.moikaActiveArr3
          ? this.moikaActiveArr3.price
          : 0;
      let moikaPrice4 =
        this.checkboxMoika && this.moikaActiveArr4
          ? this.moikaActiveArr4.price
          : 0;
      let moikaPrice5 =
        this.checkboxMoika && this.moikaActiveArr5
          ? this.moikaActiveArr5.price
          : 0;
      // цена за мойку по категориям
      if (this.flagCategory == 1) {
        moikaPrice =
          this.checkboxMoika && this.moikaActiveArr
            ? this.moikaActiveArr.price
            : 0; // стоимость мойки если отмечена мойка из камня I кат
        moikaPrice2 =
        this.checkboxMoika && this.moikaActiveArr2
          ? this.moikaActiveArr2.price
          : 0;
        moikaPrice3 =
        this.checkboxMoika && this.moikaActiveArr3
          ? this.moikaActiveArr3.price
          : 0;
        moikaPrice4 =
        this.checkboxMoika && this.moikaActiveArr4
          ? this.moikaActiveArr4.price
          : 0;
        moikaPrice5 =
        this.checkboxMoika && this.moikaActiveArr5
          ? this.moikaActiveArr5.price
          : 0;
      } else if (this.flagCategory == 2) {
        moikaPrice =
          this.checkboxMoika && this.moikaActiveArr
            ? this.moikaActiveArr.price2
            : 0; // стоимость мойки если отмечена мойка из камня II кат
        moikaPrice2 =
        this.checkboxMoika && this.moikaActiveArr2
          ? this.moikaActiveArr2.price2
          : 0;
        moikaPrice3 =
        this.checkboxMoika && this.moikaActiveArr3
          ? this.moikaActiveArr3.price2
          : 0;
        moikaPrice4 =
        this.checkboxMoika && this.moikaActiveArr4
          ? this.moikaActiveArr4.price2
          : 0;
        moikaPrice5 =
        this.checkboxMoika && this.moikaActiveArr5
          ? this.moikaActiveArr5.price2
          : 0;
      } else if (this.flagCategory == 3) {
        moikaPrice =
          this.checkboxMoika && this.moikaActiveArr
            ? this.moikaActiveArr.price3
            : 0; // стоимость мойки если отмечена мойка из камня III кат
        moikaPrice2 =
        this.checkboxMoika && this.moikaActiveArr2
          ? this.moikaActiveArr2.price3
          : 0;
        moikaPrice3 =
        this.checkboxMoika && this.moikaActiveArr3
          ? this.moikaActiveArr3.price3
          : 0;
        moikaPrice4 =
        this.checkboxMoika && this.moikaActiveArr4
          ? this.moikaActiveArr4.price3
          : 0;
        moikaPrice5 =
        this.checkboxMoika && this.moikaActiveArr5
          ? this.moikaActiveArr5.price3
          : 0;
      }
      // Назначаем цену за вырез под варочную панель
      if (this.selectMaterial == 1 && this.checkboxCutStove) {
        // если материал Жидкий камень и вырез
        cutStovePrice = this.cutStoveLiquid;
      } else if (this.selectMaterial == 2 && this.checkboxCutStove) {
        // если акрил.
        cutStovePrice = this.cutStoveAcrylic;
      } else if (
        (this.selectMaterial == 0 || this.selectMaterial == 3) &&
        this.checkboxCutStove
      ) {
        // если кварц или натур.
        cutStovePrice = this.cutStove;
      } else {
        cutStovePrice = 0;
      }
      // получение стоимости доставки в зависимости от километража
      let priceDelivery = 0
      let priceZamer = 0
      if(this.$store.state.calc.distance <= 50) {
      priceDelivery = 1600
      priceZamer = 1200
      } else if(this.$store.state.calc.distance > 50 && this.$store.state.calc.distance <= 100) {
      priceDelivery = 2400  
      priceZamer = 1600
      } else if(this.$store.state.calc.distance > 100 && this.$store.state.calc.distance <= 150) {
      priceDelivery = 3600  
      priceZamer = 2400
      } else if(this.$store.state.calc.distance > 150 && this.$store.state.calc.distance <= 200) {
      priceDelivery = 4800  
      priceZamer = 3200
      } else if(this.$store.state.calc.distance > 200 && this.$store.state.calc.distance <= 250) {
      priceDelivery = 6000  
      priceZamer = 4000
      } else if(this.$store.state.calc.distance > 250 && this.$store.state.calc.distance <= 300) {
      priceDelivery = 7200  
      priceZamer = 4800
      } else if(this.$store.state.calc.distance > 300) {
      priceDelivery = 9000  
      priceZamer = 6000
      }
      let zonePrice = this.checkboxDelivery ? priceDelivery : 0; // стоимость доставки
      let zamerPrice = this.checkboxZamer ? priceZamer : 0; // стоимость замера
      let ustanovkaPrice = this.checkboxUstanovka ? 1 : 0; // Стоимость установки
      let liftingPrice = this.checkboxLifting ? 800 : 0; // Стоимость подъема
      // Узнаем толщину столешницы
      let heightTable = parseInt(this.tablePrice.fat.replace(/\D+/g, ''))
      //
      // Столешница
      if (this.typeMain == 1) {
        // Столешница Прямая
        
        let sapozhok = Number(this.tablePrice.fat.replace(/\D+/g, ''))
        if (this.typeTabletop == 1) {
          
          // функция расчета длины торцевой кромки столешницы
          kromkaLength =
            (this.farEdge == 1 ? Number(tableLength) : 0) +
            (this.leftEdge == 1 ? Number(tableWidth) : 0) +
            (this.frontEdge == 1 ? Number(tableLength) : 0) +
            (this.rightEdge == 1 ? Number(tableWidth) : 0);
          // функция расчета длины бортика столешницы
          bortikLength =
            (this.farEdge == 2 ? Number(tableLength) : 0) +
            (this.leftEdge == 2 ? Number(tableWidth) : 0) +
            (this.frontEdge == 2 ? Number(tableLength) : 0) +
            (this.rightEdge == 2 ? Number(tableWidth) : 0);
          edgePrice =
            (kromkaLength / 1000) * kromkaPrice +
            (bortikLength / 1000) * bortikPrice; // расчет стоимости кромки

          //
          tableSquare = ((tableWidth / 1000) * (tableLength / 1000)).toFixed(2); // расчет площади столешницы
          PanelSquare = ((this.checkboxPanelWidth / 1000) * (this.checkboxPanelHeight / 1000)).toFixed(2); // расчет площади стеновой панели
          showTableSquare = tableSquare
          tableSquareInstall = tableSquare
          PanelSquareInstall = PanelSquare
          // Делаем для кварца по-слэбный расчет и учитываем интегрированную мойку
          if(this.selectMaterial == 0) {
            // учитываем общую длину вместе с мойкой
            let SumLengthTable = tableLength
            if(moikaPrice != 0) {
              SumLengthTable = Number(SumLengthTable) + 900
            }
            if(moikaPrice2 != 0) {
              SumLengthTable = Number(SumLengthTable) + 900
            }
            if(moikaPrice3 != 0) {
              SumLengthTable = Number(SumLengthTable) + 900
            }
            if(moikaPrice4 != 0) {
              SumLengthTable = Number(SumLengthTable) + 900
            }
            if(moikaPrice5 != 0) {
              SumLengthTable = Number(SumLengthTable) + 900
            }
            if(bortikLength > 0) {
              tableWidth = Number(tableWidth) +30 // Если имеется плинтус, то добавляем к ширине 30мм
            }
            if(sapozhok > 20) {
            tableWidth = Number(tableWidth) + Number(this.tablePrice.fat.replace(/\D+/g, '')) // Добавляем толщину столешницы, т.к. идет дополнительная ширина на сапожок столешницы
            }
            // далее учитываем ширину столешницы. Для того, чтобы она влезла в пол слэба. Пол слэба это 690 мм
            if(tableWidth <= 690) {
              tableSquare = (Math.ceil(SumLengthTable/3000))/2
            } else {
              if(tableLength <= 3000) {
                /*console.log('первый')
                let SquareMinusSleb = (3000 - tableLength)*1400
                console.log(SquareMinusSleb)
                // Далее проверяем, установлена ли у нас мойка
                if() {

                  if(SquareMinusSleb >= 900*900) {
                  tableSquare = (Math.ceil(SumLengthTable/3000))
                  } else {
                  tableSquare = (Math.ceil(SumLengthTable/3000)) + 0.5  
                  }

                } else { // Если мойка не нужна

                  tableSquare = (Math.ceil(SumLengthTable/3000))

                }*/
                tableSquare = (Math.ceil(SumLengthTable/3000))
              } else {
                let remainder = 3000 - tableLength % 3000
                console.log(remainder*1400)
                if(remainder*1400 > 900*900) {
                  tableSquare = (Math.ceil(SumLengthTable/3000))
                } else {
                  tableSquare = (Math.ceil(SumLengthTable/3000)) + 0.5
                }
              }

            }
            // Рассчитываем количество слэбов для стеновой панели
            if(this.checkboxPanelHeight <= 690) {
            PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000))/2
            } else {
              if(this.checkboxPanelWidth <= 3000) {
                PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000))
              } else {
                let remainder2 = 3000 - this.checkboxPanelWidth % 3000
                console.log(remainder2*1400)
                if(remainder2*1400 > 900*900) {
                  PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000))
                } else {
                  PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000)) + 0.5
                }
              }
            }
            //
            showPanelSquare = PanelSquare // Показываем площадь в количествах слэбов
            showTableSquare = tableSquare // Показываем площадь в количествах слэбов  
          }
          
          //Добавляем коэффициент для Акрила в случае, если столешница менее либо равна одному кв. метру
          if(tableSquare <= 1 && this.selectMaterial == 2) {
            tableSquare = (tableSquare*1.5).toFixed(2)
          }
          if(PanelSquare <= 1 && this.selectMaterial == 2) {
            PanelSquare = (PanelSquare*1.5).toFixed(2)
          }
          // Рассчитываем стоимость стрежней под горячее
          if(this.selectMaterial == 1 && this.checkboxKernel == 1) {
              console.log(this.kernelLiquid)
              kernelPrice = this.kernelLiquid
          }
          // Стоимость стеновой панели, чтобы учитывать радиокнопку включения стеновой панели
          if(this.checkboxPanel) {
            PanelPrice = Number(PanelSquare)*Number(calculationPrice);
          }
          else {
            PanelPrice = 0;
          }
          // Подсчитываем стоимость установки и потом клюсуем к общей цене
          if(ustanovkaPrice == 1) {
            // cutMixerPrice cutStovePrice - не используем при расчете стоимости установки
            if(this.selectMaterial == 2) { // Делаем условие для акрилового камня
              koeffUstanovka = +tableSquare*1700 + bortikLength*300/1000 + Number(PanelSquare)*1700
            } else if(this.selectMaterial == 0) {
              koeffUstanovka = +tableSquareInstall*1700 + bortikLength*300/1000 + Number(PanelSquareInstall)*1700
            }
            else {
            koeffUstanovka =  (tableSquare * calculationPrice + PanelPrice +
            edgePrice + Number(moikaPrice) + Number(moikaPrice2) + Number(moikaPrice3) + Number(moikaPrice4) + Number(moikaPrice5) + Number(cutGluePrice) + Number(cutMoikaPrice))*0.1
            }
          } else {
            koeffUstanovka = 0
          }
          // Добавляем стоимость метража слэба при использовании мойки
            priceSlab = calculationPrice // Для слэбов
          // итоговая цена столешницы
          result =
            (
            tableSquare * calculationPrice + PanelPrice +
            edgePrice +
            Number(moikaPrice) +
            Number(moikaPrice2) +
            Number(moikaPrice3) +
            Number(moikaPrice4) +
            Number(moikaPrice5) +
            Number(cutMixerPrice) +
            Number(cutMoikaPrice*this.CountcheckboxCutMoika) +
            Number(kernelPrice) +
            Number(cutStovePrice*this.CountcheckboxCutStove) +
            Number(cutGluePrice*this.CountcheckboxCutGlue)
            )*koefSkidka +
            zonePrice +
            koeffUstanovka +
            zamerPrice +
            liftingPrice;
          // Столешница Г-образная
        } else if (this.typeTabletop == 2) {
          PanelSquare = ((this.checkboxPanelWidth / 1000) * (this.checkboxPanelHeight / 1000)).toFixed(2); // расчет площади стеновой панели
          PanelSquareInstall = PanelSquare
          // Стоимость стеновой панели, чтобы учитывать радиокнопку включения стеновой панели
          if(this.checkboxPanel) {
            PanelPrice = Number(PanelSquare)*Number(calculationPrice);
          }
          else {
            PanelPrice = 0;
          }
          // функция расчета длины бортика столешницы
          bortikLength =
            (this.farEdge == 2 ? Number(tableLengthLeft) : 0) +
            (this.farEdge2 == 2 ? Number(tableLengthRight) : 0) +
            (this.leftEdge == 2 ? Number(tableWidthLeft) : 0) +
            (this.frontEdge == 2
              ? Number(tableLengthLeft) - Number(tableWidthRight)
              : 0) +
            (this.frontEdge2 == 2
              ? Number(tableLengthLeft) - Number(tableWidthRight)
              : 0) +
            (this.rightEdge == 2
              ? Number(tableLengthRight) - Number(tableWidthLeft)
              : 0);
          // Добавляем коэффициент добавляемой площади столешницы в случае угла со срезом
          if (this.innerCorner == 1 && this.selectMaterial == 1) {
            var tempArr =
              ((Number(tableLengthLeft) -
                Number(900) +
                Number(600) -
                Number(tableWidthRight)) *
                tableWidthLeft) /
                1000000 + // Левая часть без середины
              ((Number(tableLengthRight) -
                Number(900) +
                Number(600) -
                Number(tableWidthLeft)) *
                tableWidthRight) /
                1000000 + // Правая часть без середины
              ((Number(900) - Number(600) + Number(tableWidthRight)) *
                (Number(900) - Number(600) + Number(tableWidthLeft))) /
                1000000; // Центральная часть
          } else if(this.selectMaterial == 0) { // Делаем для кварца по-слэбный расчет и учитываем интегрированную мойку
            // учитываем общую длину вместе с мойкой
            tableLength = Number(tableLengthLeft) // Длина левой части Г-образки
            tableWidth = Number(tableWidthLeft)// Ширина левой части
            let SumLengthTable = tableLength
            if(moikaPrice != 0) {
              SumLengthTable = Number(SumLengthTable) + 900
            }
            if(moikaPrice2 != 0) {
              SumLengthTable = Number(SumLengthTable) + 900
            }
            if(moikaPrice3 != 0) {
              SumLengthTable = Number(SumLengthTable) + 900
            }
            if(moikaPrice4 != 0) {
              SumLengthTable = Number(SumLengthTable) + 900
            }
            if(moikaPrice5 != 0) {
              SumLengthTable = Number(SumLengthTable) + 900
            }
            // Далее узнаем дополнительную ширину для расчета слэбов
            let otherWidth = 0
            if(bortikLength > 0) {
              otherWidth = 30 // Если имеется плинтус, то добавляем к ширине 30мм
            }
            if(sapozhok > 20) {
            otherWidth = Number(otherWidth) + Number(this.tablePrice.fat.replace(/\D+/g, '')) // Добавляем толщину столешницы, т.к. идет дополнительная ширина на сапожок столешницы
            }
            // 1. Далее нам надо рассчитать левую часть и узнать какая ширина и длина остатка слэба
            
            // далее учитываем ширину столешницы. Для того, чтобы она влезла в пол слэба. Пол слэба это 690 мм
            if(tableWidth <= 690) {
              tableSquare = (Math.ceil(SumLengthTable/3000))/2
            } else {
              if(tableLength <= 3000) {
                /*let SquareMinusSleb = (3000 - tableLength)*1400
                if(SquareMinusSleb >= 900*900) {
                tableSquare = (Math.ceil(SumLengthTable/3000))
                } else {
                tableSquare = (Math.ceil(SumLengthTable/3000)) + 0.5  
                }*/
                tableSquare = (Math.ceil(SumLengthTable/3000))
              } else {
                let remainder = 3000 - tableLength % 3000
                if(remainder*1400 > 900*900) {
                  tableSquare = (Math.ceil(SumLengthTable/3000))
                } else {
                  tableSquare = (Math.ceil(SumLengthTable/3000)) + 0.5
                }
              }
            }
            // Остатки по длине и ширине от ЦЕЛОГО СЛЭБА
            let remainsWidth = 1380 - tableWidth
            let remainsLength = 3000*(Math.ceil(SumLengthTable/3000)) - SumLengthTable

            // 2. Смотрим вписывается ли в остаток правая часть и высчитываем количество слэбов для нее
            let secondLength = Number(tableLengthRight) - Number(tableWidthLeft)
            tableWidth = Number(tableWidthRight)
            if(bortikLength > 0) {
              otherWidth = Number(otherWidth) + 30 // Если имеется плинтус, то добавляем к ширине 30мм
            }
            if(sapozhok > 20) {
            otherWidth = Number(otherWidth) + Number(this.tablePrice.fat.replace(/\D+/g, '')) // Добавляем толщину столешницы, т.к. идет дополнительная ширина на сапожок столешницы
            }
            //2.1 Далее проверяем, вписывается правая часть в остаток
            if(remainsWidth >= tableWidth) { // Вписывается по ширине
              if(tableWidth <= 690 && remainsWidth >= 690) { // Смотрим, вписывается ли по ширине в пол слэба первая часть и вторая
               if(secondLength <= remainsLength) { // Смотрим, вписываемся ли в пол слэба. 
                  tableSquare = tableSquare //+ 0.5  Если всписываемся, то добавляем к общей площади всего пол слэба
               } else { // Если нет, то подсчитываем сколько еще нужно половинок за вычитом длины, которая уйдет на остаток пол слэба
                  tableSquare = +tableSquare + (Math.ceil((secondLength - remainsLength)/3000))/2 
               } 
               // Далее добавляем слэбы исходя из доп опций
                if((Number(remainsWidth) - tableWidth) < otherWidth) {
                      tableSquare = +tableSquare + 0.5
                }
              } else if(tableWidth > 690){ // Если же ширина второй стороны больше  пол слэба, но меньше ширины первой
                  if(secondLength > remainsLength) { // Смотрим, вписываемся ли в слэб.
                    tableSquare = +tableSquare + (Math.ceil((secondLength - remainsLength)/3000)) // Добавляем полные слэбы
                  } else {
                    tableSquare = +tableSquare + 0.5 // Либо добавляем только пол слэба
                  }
              } else { // Если же первая сторона больше по ширине больше половины слэба
                  if(secondLength > remainsLength) { // Смотрим, вписываемся ли в слэб.
                    tableSquare = +tableSquare + (Math.ceil((secondLength - remainsLength)/3000))/2 // Добавляем половинки слэба
                  } else {
                    tableSquare = +tableSquare + 0.5 // Либо добавляем только пол слэба
                  }
              }
              
            } else { // Если не вписываемся по ширине
              if(tableWidth <= 690) { // Смотрим, вписывается ли по ширине в пол слэба
                  tableSquare = +tableSquare + (Math.ceil((secondLength)/3000))/2 
              } else { // Иначе подсчитываем по полным слэбам
                  tableSquare = +tableSquare + (Math.ceil((secondLength)/3000))
              }
              // Далее добавляем слэбы исходя из доп опций
              if(Number(remainsWidth) < otherWidth) {
                    //tableSquare = +tableSquare + 0.5
              }
            }
            // Рассчитываем количество слэбов для стеновой панели
            if(this.checkboxPanelHeight <= 690) {
            PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000))/2
            } else {
              if(this.checkboxPanelWidth <= 3000) {
                PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000))
              } else {
                let remainder2 = 3000 - this.checkboxPanelWidth % 3000
                console.log(remainder2*1400)
                if(remainder2*1400 > 900*900) {
                  PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000))
                } else {
                  PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000)) + 0.5
                }
              }
            }
            //
            showPanelSquare = PanelSquare // Показываем площадь в количествах слэбов
            showTableSquare = tableSquare // Показываем площадь в количествах слэбов  
          }
          else {
            var tempArr =
              ((Number(tableLengthLeft) - Number(tableWidthRight)) *
                tableWidthLeft) /
                1000000 + // Левая часть без середины
              ((Number(tableLengthRight) - Number(tableWidthLeft)) *
                tableWidthRight) /
                1000000 + // Правая часть без середины
              (tableWidthLeft * tableWidthRight) / 1000000; // Центральная часть
          }
          // Площадь для установки кварца
          if(this.selectMaterial == 0) {
            tableSquareInstall =
              ((Number(tableLengthLeft) - Number(tableWidthRight)) *
                tableWidthLeft) /
                1000000 + // Левая часть без середины
              ((Number(tableLengthRight) - Number(tableWidthLeft)) *
                tableWidthRight) /
                1000000 + // Правая часть без середины
              (tableWidthLeft * tableWidthRight) / 1000000; // Центральная часть
          }
          //
          /*  tableSquare = (
            ((tableLengthLeft / 1000) * tableWidthLeft) / 1000 +
            ((tableLengthRight / 1000 - tableWidthLeft / 1000) *
              tableWidthRight) /
              1000
          ).toFixed(2); // расчет площади столешницы*/
          if(tempArr != undefined) {
          tableSquare = tempArr.toFixed(2);
          }
          //Добавляем коэффициент для Акрила в случае, если столешница менее либо равна одному кв. метру
          if(tableSquare <= 1 && this.selectMaterial == 2) {
            tableSquare = (tableSquare*1.5).toFixed(2)
          }
          if(PanelSquare <= 1 && this.selectMaterial == 2) {
            PanelSquare = (PanelSquare*1.5).toFixed(2)
          }
          showPanelSquare = PanelSquare // Показываем площадь в количествах слэбов
          showTableSquare = tableSquare
          // функция расчета длины торцевой кромки столешницы
          kromkaLength =
            (this.farEdge == 1 ? Number(tableLengthLeft) : 0) +
            (this.farEdge2 == 1 ? Number(tableLengthRight) : 0) +
            (this.leftEdge == 1 ? Number(tableWidthLeft) : 0) +
            (this.rightEdge == 1 ? Number(tableWidthRight) : 0) +
            (this.frontEdge == 1
              ? (Number(tableLengthLeft) - Number(tableWidthRight))
              : 0) +
            (this.frontEdge2 == 1
              ? (Number(tableLengthRight) - Number(tableWidthLeft))
              : 0);
        /*  console.log('1: ' + this.farEdge + ' 2: ' + this.farEdge2 + ' 3: ' + this.leftEdge + ' 4: ' + this.rightEdge + ' 5: ' + this.frontEdge + ' 6: ' + this.frontEdge2)
          console.log(tableWidthRight)
          console.log(Number(tableLengthLeft) - Number(tableWidthRight))
          console.log(Number(tableLengthLeft) - Number(tableWidthRight))*/
          
        //  console.log('1: ' + this.farEdge + ' 2: ' + this.farEdge2 + ' 3: ' + this.leftEdge + ' 4: ' + this.rightEdge + ' 5: ' + this.frontEdge + ' 6: ' + this.frontEdge2)
          edgePrice =
            (kromkaLength / 1000) * kromkaPrice +
            (bortikLength / 1000) * bortikPrice; // расчет стоимости кромки
          // Рассчитываем стоимость стрежней под горячее для Жидкого камня
          if(this.selectMaterial == 1 && this.checkboxKernel == 1) {
              kernelPrice = this.kernelLiquid
          }
          // Подсчитываем стоимость установки и потом клюсуем к общей цене
          if(ustanovkaPrice == 1) {
            // cutMixerPrice cutStovePrice - не используем при расчете стоимости установки
            if(this.selectMaterial == 2) { // Делаем условие для акрилового камня
              koeffUstanovka = +tableSquare*1700 + bortikLength*300/1000 + PanelSquareInstall*1700
            } else if(this.selectMaterial == 0) {
              console.log(tableSquareInstall)
              koeffUstanovka = +tableSquareInstall*1700 + bortikLength*300/1000 + PanelSquareInstall*1700
            }
            else {
            koeffUstanovka =  (tableSquare * calculationPrice + PanelPrice +
            edgePrice + Number(moikaPrice) + Number(moikaPrice2) + Number(moikaPrice3) + Number(moikaPrice4) + Number(moikaPrice5) + Number(cutGluePrice) + Number(cutMoikaPrice))*0.1
            }
          } else {
            koeffUstanovka = 0
          }
          priceSlab = calculationPrice // Для слэбов
          // итоговая цена столешницы
          result =
            (
            Number(tableSquare) * calculationPrice + PanelPrice +
            Number(edgePrice) +
            Number(moikaPrice) +
            Number(moikaPrice2) +
            Number(moikaPrice3) +
            Number(moikaPrice4) +
            Number(moikaPrice5) +
            Number(cutMixerPrice) +
            Number(cutMoikaPrice*this.CountcheckboxCutMoika) +
            Number(cutStovePrice*this.CountcheckboxCutStove) +
            Number(cutGluePrice*this.CountcheckboxCutGlue) +
            Number(kernelPrice)
            )*koefSkidka +
            Number(zonePrice) +
            Number(zamerPrice) +
            Number(koeffUstanovka) +
            Number(liftingPrice);
          // Столешница П-образная
        } else if (this.typeTabletop == 3) {
          PanelSquare = ((this.checkboxPanelWidth / 1000) * (this.checkboxPanelHeight / 1000)).toFixed(2); // расчет площади стеновой панели
          PanelSquareInstall = PanelSquare
          // Стоимость стеновой панели, чтобы учитывать радиокнопку включения стеновой панели
          if(this.checkboxPanel) {
            PanelPrice = Number(PanelSquare)*Number(calculationPrice);
          }
          else {
            PanelPrice = 0;
          }
          //
          let farSectionLength =
            Number(this.p_table_Far_LeftLength) -
            (Number(this.p_tableLeftWidth) + Number(this.p_table_Far_RightWidth)); // длина промежуточной средней секции П-стола
          //console.log(farSectionLength)
          if (this.innerCorner == 1 && this.selectMaterial == 1 && this.typeinnerCorner == 2) { // Учитываем два угла со срезом
          var tempArr = Number(this.p_tableLeftWidth)*(Number(this.p_tableLeftLength) - Number(900) + Number(600) - Number(this.p_table_Far_LeftWidth)) + // Левая часть
                      (Number(900) - Number(600) + Number(this.p_tableLeftWidth))*(Number(900) - Number(600) + Number(this.p_table_Far_LeftWidth)) + // Левый центральный блок
                      (Number(this.p_table_Far_LeftLength) - (Number(900) - Number(600) + Number(this.p_tableLeftWidth)) - (Number(900) - Number(600) + Number(this.p_table_Far_RightWidth)))*Number(this.p_table_Far_LeftWidth) + // Длина центральной части столешницы
                      (Number(900) - Number(600) + Number(this.p_table_Far_RightWidth))*(Number(900) - Number(600) + Number(this.p_table_Far_RightWidth)) + // Правый центральный блок 
                      (Number(this.p_table_Far_RightLength) - Number(900) + Number(600) - Number(this.p_table_Far_LeftWidth))*Number(this.p_table_Far_RightWidth)// Правая часть 
              tempArr = tempArr/1000000
          }
          else if(this.innerCorner == 1 && this.selectMaterial == 1 && this.typeinnerCorner == 0) {
          var tempArr = this.p_tableLeftWidth*(Number(this.p_tableLeftLength) - Number(900) + Number(600) - Number(this.p_table_Far_LeftWidth)) + // Левая часть
                      (Number(900) - Number(600) + Number(this.p_tableLeftWidth))*(Number(900) - Number(600) + Number(this.p_table_Far_LeftWidth)) + // Левый центральный блок
                      (Number(this.p_table_Far_LeftLength) - Number(900) + Number(600) - Number(this.p_tableLeftWidth) - Number(this.p_table_Far_RightWidth))*this.p_table_Far_LeftWidth + // Длина центральной части столешницы
                      this.p_table_Far_LeftWidth*this.p_table_Far_RightWidth + // Правый центральный блок 
                      (Number(this.p_table_Far_RightLength) - Number(this.p_table_Far_LeftWidth))*this.p_table_Far_RightWidth// Правая часть 
                      tempArr = tempArr/1000000
          }
          else if(this.innerCorner == 1 && this.selectMaterial == 1 && this.typeinnerCorner == 1) {
          var tempArr = this.p_tableLeftWidth*(Number(this.p_tableLeftLength) - Number(this.p_table_Far_LeftWidth)) + // Левая часть
                      this.p_tableLeftWidth*this.p_table_Far_LeftWidth + // Левый центральный блок
                      (Number(this.p_table_Far_LeftLength) - Number(900) + Number(600) - Number(this.p_table_Far_RightWidth) - Number(this.p_tableLeftWidth))*this.p_table_Far_LeftWidth + // Длина центральной части столешницы
                      (Number(900) - Number(600) + Number(this.p_table_Far_RightWidth))*(Number(900) - Number(600) + Number(this.p_table_Far_RightWidth)) + // Правый центральный блок 
                      (Number(this.p_table_Far_RightLength) - Number(900) + Number(600) - Number(this.p_table_Far_LeftWidth))*this.p_table_Far_RightWidth// Правая часть 
                      tempArr = tempArr/1000000
          }
          else {
           var tempArr =  ((this.p_tableLeftLength / 1000) * this.p_tableLeftWidth) / 1000 +
            ((this.p_table_Far_RightLength / 1000) *
              this.p_table_Far_RightWidth) /
              1000 +
            (this.p_table_Far_LeftWidth / 1000) * (farSectionLength/1000); // площадь П столешницы
            
          }
          // Площадь для установки
          if(this.selectMaterial == 0) {
            tableSquareInstall = ((this.p_tableLeftLength / 1000) * this.p_tableLeftWidth) / 1000 +
            ((this.p_table_Far_RightLength / 1000) *
              this.p_table_Far_RightWidth) /
              1000 +
            (this.p_table_Far_LeftWidth / 1000) * (farSectionLength/1000); // площадь П столешницы
          }
          // функция расчета длины бортика столешницы
          bortikLength =
            (this.pEdge_1 == 2 ? Number(this.p_tableLeftWidth) : 0) +
            (this.pEdge_2 == 2
              ? Number(this.p_tableLeftLength) -
                Number(this.p_table_Far_LeftWidth)
              : 0) +
            (this.pEdge_3 == 2 ? Number(this.p_tableLeftLength) : 0) +
            (this.pEdge_4 == 2 ? Number(this.p_table_Far_LeftLength) : 0) +
            (this.pEdge_5 == 2 ? Number(farSectionLength) : 0) +
            (this.pEdge_6 == 2 ? Number(this.p_table_Far_RightLength) : 0) +
            (this.pEdge_7 == 2 ? Number(this.p_table_Far_RightWidth) : 0) +
            (this.pEdge_8 == 2
              ? Number(this.p_table_Far_RightLength) -
                Number(this.p_table_Far_LeftWidth)
              : 0);



          // ДЛЯ КВАРЦА П-ОБРАЗКА

          if(this.selectMaterial == 0) {
/*  Вначале узнаем остаток от левой стороны. Далее проверяем три комбинации для оптимального подхода: 1-я и 2-я, 1-я и 3-я, 2-я и 3-я. 
А. Находим наибольший остаток по ширине от полученной площади комбинации. При этом за основу берем меньшее количество потраченных слэбов. Если остаток по ширине у какой-то 
комбинации больше, но слэбов больше чем у другой комбинации, то берем за основу ту комбинацию, у которой количество слэбов меньше.
Б. Далее смотрим, влазеет ли третья сторона в слэб.
В. Далее оставшуюся ширину делим на 30 и узнаем сколько уйдет остатка слэба на них и сколько останется в метраже кусков.
Г. Подсчитываем площадь  

*/

            // Дополнительная ширина и длина от условий для первой стороны
            let otherWidthFirst = 0
            let otherLengthFirst = 0
            // Первая сторона
            let FirstWidth = Number(this.p_tableLeftWidth)
            let FirstLength = Number(this.p_tableLeftLength)
            if(Number(this.pEdge_3) == 2) {
              otherWidthFirst = 30 // Если имеется плинтус, то добавляем к ширине 30мм
              otherLengthFirst = FirstLength
            }
            if(sapozhok > 20) { // Условие для сапожка
            otherWidthFirst = Number(otherWidthFirst) + Number(this.tablePrice.fat.replace(/\D+/g, '')) // Добавляем толщину столешницы, т.к. идет дополнительная ширина на сапожок столешницы
            }
            let SumLengthTable = FirstLength
            if(moikaPrice != 0) { // Если имеется мойка, то к длине добавляем 900 мм
              SumLengthTable = Number(FirstLength) + 900
            }
            if(moikaPrice2 != 0) { // Если имеется мойка, то к длине добавляем 900 мм
              SumLengthTable = Number(FirstLength) + 900
            }
            if(moikaPrice3 != 0) { // Если имеется мойка, то к длине добавляем 900 мм
              SumLengthTable = Number(FirstLength) + 900
            }
            if(moikaPrice4 != 0) { // Если имеется мойка, то к длине добавляем 900 мм
              SumLengthTable = Number(FirstLength) + 900
            }
            if(moikaPrice5 != 0) { // Если имеется мойка, то к длине добавляем 900 мм
              SumLengthTable = Number(FirstLength) + 900
            }
            // Рассчитываем остатки по длине и ширине от первой стороны
            if(FirstWidth <= 690) {
              tableSquare = (Math.ceil(SumLengthTable/3000))/2
              console.log(tableSquare)
            } 
            else {
                if(tableLength <= 3000) {
                  tableSquare = (Math.ceil(SumLengthTable/3000))
                } else {
                  let remainder = 3000 - tableLength % 3000
                  if(remainder*1400 > 900*900) {
                    tableSquare = (Math.ceil(SumLengthTable/3000))
                  } else {
                    tableSquare = (Math.ceil(SumLengthTable/3000)) + 0.5
                  }
                }
            }
            // Остатки по длине и ширине от ЦЕЛОГО СЛЭБА
            let remainsWidth = 1380 - FirstWidth
            let remainsLength = 3000*(Math.ceil(SumLengthTable/3000)) - SumLengthTable

            // Вторая сторона
            // 2. Узнаем толщину и ширину центральной столешницы. А также площадь дополнительных кусков.
            // Дополнительная ширина и длина от условий для первой стороны
            let otherWidthSecond = 0
            let otherLengthSecond = 0

            let SecondLength = Number(this.p_table_Far_LeftLength) - Number(this.p_tableLeftWidth) - Number(this.p_table_Far_RightWidth)
            let SecondWidth = Number(this.p_table_Far_LeftWidth)
            if(Number(this.pEdge_4) == 2) {
              otherWidthSecond = Number(otherWidthSecond) + 30 // Если имеется плинтус, то добавляем к ширине 30мм
              otherLengthSecond = SecondLength 
            }
            if(sapozhok > 20) {
            otherWidthSecond = Number(otherWidthSecond) + Number(this.tablePrice.fat.replace(/\D+/g, '')) // Добавляем толщину столешницы, т.к. идет дополнительная ширина на сапожок столешницы
            }
            let remainsLengthSecond = 3000*(Math.ceil(SecondLength/3000)) - SecondLength
            // Третья сторона
            // 3. Узнаем толщину и ширину последней столешницы. А также площадь дополнительных кусков.
            let otherWidthThird = 0
            let otherLengthThird = 0

            let ThirdLength = Number(this.p_table_Far_RightLength)
            let ThirdWidth = Number(this.p_table_Far_LeftWidth)
            if(Number(this.pEdge_6) == 2) {
              otherWidthThird = Number(otherWidthThird) + 30 // Если имеется плинтус, то добавляем к ширине 30мм
              otherLengthThird = ThirdLength 
            }
            if(sapozhok > 20) {
            otherWidthThird = Number(otherWidthThird) + Number(this.tablePrice.fat.replace(/\D+/g, '')) // Добавляем толщину столешницы, т.к. идет дополнительная ширина на сапожок столешницы
            }
            let remainsLengthThird = 3000*(Math.ceil(ThirdLength/3000)) - ThirdLength

            // Подсчитываем площадь всех кусков
            let SquarePlintus = otherLengthFirst*otherWidthFirst + otherWidthSecond*otherLengthSecond + otherWidthThird*otherLengthThird
            // Вводим универсальные переменные для подсчета остатков площадей от сторон комбинаций
            let remainsLengthFromFirst = 0
            let remainsWidthFromFirst = 0
            let remainsLengthFromSecond = 0
            let remainsWidthFromSecond = 0
            // Проверяем три комбинации
            // 1-я и 2-я
            let TempCountSlabeFirst = 0
            let remainsSquareFirst = 0
            console.log(Math.ceil((600 - 500)/3000))
              if(SecondWidth <= 690 && FirstWidth <= 690) { // Если первая и вторая сторона меньше 690, то мы количество слэбов просто считаем по длине
                TempCountSlabeFirst = Math.ceil((FirstLength + SecondLength)/3000)/2
                remainsLengthFromFirst = Math.ceil((FirstLength + SecondLength)/3000)*3000 - FirstLength - SecondLength
                console.log(remainsLengthFromFirst)
                console.log(FirstLength)
                console.log(ThirdLength - remainsLengthFromFirst)
                if(ThirdWidth <= 690) {
                TempCountSlabeFirst = TempCountSlabeFirst + Math.ceil(Math.abs(ThirdLength - remainsLengthFromFirst)/3000)/2
                console.log(TempCountSlabeFirst)
                } else {
                  if( ((ThirdWidth + FirstWidth) <= 1300 && FirstLength >= ThirdLength) || ((ThirdWidth + SecondWidth) <= 1300 && SecondLength >= ThirdLength)  
                  || ((ThirdWidth + FirstWidth) <= 1300 && (ThirdWidth + SecondWidth) <= 1300 && (FirstLength + SecondLength) >= ThirdLength) ) {
                    TempCountSlabeFirst = TempCountSlabeFirst + Math.ceil(ThirdLength/3000)/2
                  } else {
                    TempCountSlabeFirst = TempCountSlabeFirst + Math.ceil(ThirdLength/3000)
                  }
                }
              }
              if(FirstWidth > 690 && SecondWidth <= 690) { // Если первая сторона больше
                TempCountSlabeFirst = Math.ceil(FirstLength/3000) // Количество слэбов от первой стороны
                TempCountSlabeFirst = TempCountSlabeFirst + Math.ceil((SecondLength - remainsLength*2)/3000)/2
                if( ((1300 - FirstWidth) >= ThirdWidth && FirstLength >= ThirdLength) || ((ThirdWidth + SecondWidth) <= 1300 && SecondLength >= ThirdLength) || 
                ((ThirdWidth + FirstWidth) <= 1300 && (ThirdWidth + SecondWidth) <= 1300 && (FirstLength + SecondLength) >= ThirdLength) ) {
                    TempCountSlabeFirst = TempCountSlabeFirst + Math.ceil(ThirdLength/3000)/2
                } else {
                    TempCountSlabeFirst = TempCountSlabeFirst + Math.ceil(ThirdLength/3000)
                }
              }
              if(FirstWidth <= 690 && SecondWidth > 690) { // Если вторая сторона больше
                TempCountSlabeFirst = Math.ceil(SecondLength/3000) // Количество слэбов от второй стороны
                TempCountSlabeFirst = TempCountSlabeFirst + Math.ceil((FirstLength - remainsLengthSecond*2)/3000)/2
                if( ((1300 - FirstWidth) >= ThirdWidth && FirstLength >= ThirdLength) || ((ThirdWidth + SecondWidth) <= 1300 && SecondLength >= ThirdLength) || 
                ((ThirdWidth + FirstWidth) <= 1300 && (ThirdWidth + SecondWidth) <= 1300 && (FirstLength + SecondLength) >= ThirdLength) ) {
                    TempCountSlabeFirst = TempCountSlabeFirst + Math.ceil(ThirdLength/3000)/2
                } else {
                    TempCountSlabeFirst = TempCountSlabeFirst + Math.ceil(ThirdLength/3000)
                }
              }
              if(FirstWidth > 690 && SecondWidth > 690) { // Если обе
                TempCountSlabeFirst = Math.ceil((FirstLength + SecondLength)/3000) // Количество слэбов от первой и второй стороны
              }

              // Подсчитываем остаток площади
                remainsSquareFirst = 1300*3000*TempCountSlabeFirst - Number(FirstWidth*FirstLength) - Number(SecondLength*SecondWidth) - Number(ThirdWidth*ThirdLength)
                console.log(remainsSquareFirst + " : " + SquarePlintus)
              // Вписываем куски плинтусов
              if(SquarePlintus > remainsSquareFirst) {
                  TempCountSlabeFirst = TempCountSlabeFirst + Math.ceil((SquarePlintus - remainsSquareFirst)/(3000*690)/2)
              } 
            tempArr = TempCountSlabeFirst



              // 1-я и 3-я
            let TempCountSlabeSecond = 0
            let remainsSquareSecond = 0
            
              if(ThirdWidth <= 690 && FirstWidth <= 690) { // Если первая и вторая сторона меньше 690, то мы количество слэбов просто считаем по длине
                TempCountSlabeSecond = Math.ceil((FirstLength + ThirdLength)/3000)/2
              }
              if(FirstWidth > 690 && ThirdWidth <= 690) { // Если первая сторона больше
                TempCountSlabeSecond = Math.ceil(FirstLength/3000) // Количество слэбов от первой стороны
                TempCountSlabeSecond = TempCountSlabeSecond + Math.ceil((ThirdLength - remainsLength*2)/3000)/2
              }
              if(FirstWidth <= 690 && ThirdWidth > 690) { // Если вторая сторона больше
                TempCountSlabeSecond = Math.ceil(ThirdLength/3000) // Количество слэбов от третьей стороны
                TempCountSlabeSecond = TempCountSlabeSecond + Math.ceil((FirstLength - remainsLengthThird*2)/3000)/2
              }
              if(FirstWidth > 690 && ThirdWidth > 690) { // Если обе
                TempCountSlabeSecond = Math.ceil((FirstLength + ThirdLength)/3000) // Количество слэбов от первой и второй стороны
              }

              // Подсчитываем остаток площади
                remainsSquareSecond = 690*3000*TempCountSlabeSecond - Number(FirstWidth*FirstLength) - Number(ThirdLength*ThirdWidth)
              /* Вписываем оставшуюся сторону. Для начала узнаем остаток площади по самой большой ширине сторон. В том случае, если количество слэбов более 0.5
              */
             if(FirstWidth > 690 && SecondWidth <= (1300 - FirstWidth)) { // Если первая сторона более 690, то узнаем остаток ширины и длины от этой стороны
                
             }
             if(FirstWidth <= 690 && ThirdWidth <= 690) { // В данном случае нас будет интересовать только остаток по длине

             }
              let remainsWidthFirst 
              let remainsLengthFirst 
              // Вписываем куски плинтусов
              if(SquarePlintus > remainsSquareSecond) {
                  TempCountSlabeSecond = TempCountSlabeSecond + Math.ceil((SquarePlintus - remainsSquareSecond)/(3000*690)/2)
              } 



                // 2-я и 3-я
            let TempCountSlabeThird = 0
            let remainsSquareThird = 0

              if(ThirdWidth <= 690 && SecondWidth <= 690) { // Если третья и вторая сторона меньше 690, то мы количество слэбов просто считаем по длине
                TempCountSlabeThird = Math.ceil((SecondLength + ThirdLength)/3000)/2
              }
              if(SecondWidth > 690 && ThirdWidth <= 690) { // Если первая сторона больше
                TempCountSlabeThird = Math.ceil(SecondLength/3000) // Количество слэбов от первой стороны
                TempCountSlabeThird = TempCountSlabeThird + Math.ceil((ThirdLength - remainsLengthSecond*2)/3000)/2
              }
              if(SecondWidth <= 690 && ThirdWidth > 690) { // Если вторая сторона больше
                TempCountSlabeThird = Math.ceil(ThirdLength/3000) // Количество слэбов от третьей стороны
                TempCountSlabeThird = TempCountSlabeThird + Math.ceil((SecondLength - remainsLengthThird*2)/3000)/2
              }
              if(SecondWidth > 690 && ThirdWidth > 690) { // Если обе
                TempCountSlabeThird = Math.ceil((SecondLength + ThirdLength)/3000) // Количество слэбов от первой и второй стороны
              }

              // Подсчитываем остаток площади
                remainsSquareThird = 690*3000*TempCountSlabeThird - Number(SecondWidth*SecondLength) - Number(ThirdLength*ThirdWidth)
              // Вписываем куски плинтусов
              if(SquarePlintus > remainsSquareThird) {
                  remainsSquareThird = remainsSquareThird + Math.ceil((SquarePlintus - remainsSquareThird)/(3000*690)/2)
              } 
              // Теперь узнаем какая комбинация более компактная. Для начала сравнимаем количество полученных слэбов. При одинаковом количество, берем комюинацию с 
              // большим остатком по площади.
              console.log(TempCountSlabeThird + ',' + TempCountSlabeSecond + ',' + TempCountSlabeFirst)
             // tempArr = Math.min(TempCountSlabeThird, TempCountSlabeSecond, TempCountSlabeFirst)
              console.log(tempArr)
          }



          // Рассчитываем количество слэбов для стеновой панели
            if(this.checkboxPanelHeight <= 690) {
            PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000))/2
            } else {
              if(this.checkboxPanelWidth <= 3000) {
                PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000))
              } else {
                let remainder2 = 3000 - this.checkboxPanelWidth % 3000
                console.log(remainder2*1400)
                if(remainder2*1400 > 900*900) {
                  PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000))
                } else {
                  PanelSquare = (Math.ceil(this.checkboxPanelWidth/3000)) + 0.5
                }
              }
            }
          if(PanelSquare <= 1 && this.selectMaterial == 2) {
            PanelSquare = (PanelSquare*1.5).toFixed(2)
          }
          showPanelSquare = PanelSquare // Показываем площадь в количествах слэбов  
          tableSquare = (tempArr).toFixed(2)
          showTableSquare = tableSquare
          //Добавляем коэффициент для Акрила в случае, если столешница менее либо равна одному кв. метру
          if(tableSquare <= 1 && this.selectMaterial == 2) {
            tableSquare = (tableSquare*1.5).toFixed(2)
          }  
          // функция расчета длины торцевой кромки столешницы
          kromkaLength =
            (this.pEdge_1 == 1 ? Number(this.p_tableLeftWidth) : 0) +
            (this.pEdge_2 == 1
              ? Number(this.p_tableLeftLength) -
                Number(this.p_table_Far_LeftWidth)
              : 0) +
            (this.pEdge_3 == 1 ? Number(this.p_tableLeftLength) : 0) +
            (this.pEdge_4 == 1 ? Number(this.p_table_Far_LeftLength) : 0) +
            (this.pEdge_5 == 1 ? Number(farSectionLength) : 0) +
            (this.pEdge_6 == 1 ? Number(this.p_table_Far_RightLength) : 0) +
            (this.pEdge_7 == 1 ? Number(this.p_table_Far_RightWidth) : 0) +
            (this.pEdge_8 == 1
              ? Number(this.p_table_Far_RightLength) -
                Number(this.p_table_Far_LeftWidth)
              : 0);
          //console.log(this.p_tableLeftWidth + '|' + this.p_tableLeftLength + '|' + this.p_table_Far_LeftWidth + '|' + farSectionLength + '|' + this.p_table_Far_RightLength + '|' + this.p_table_Far_RightWidth + '|' + this.p_table_Far_RightLength + '|' + this.p_table_Far_LeftWidth)
          
          edgePrice =
            (kromkaLength / 1000) * kromkaPrice +
            (bortikLength / 1000) * bortikPrice; // расчет стоимости кромки
          // Рассчитываем стоимость стрежней под горячее
          if(this.selectMaterial == 1 && this.checkboxKernel == 1) {
              kernelPrice = this.kernelLiquid
          }
          // Подсчитываем стоимость установки и потом клюсуем к общей цене
          if(ustanovkaPrice == 1) {
            // cutMixerPrice cutStovePrice - не используем при расчете стоимости установки
            if(this.selectMaterial == 2) { // Делаем условие для акрилового камня
              koeffUstanovka = +tableSquare*1700 + bortikLength*300/1000 + Number(PanelSquare)*1700
              console.log(koeffUstanovka)
            } else if(this.selectMaterial == 0) {
              koeffUstanovka = +tableSquareInstall*1700 + bortikLength*300/1000 + Number(PanelSquareInstall)*1700
            }
            else {
            koeffUstanovka =  (tableSquare * calculationPrice + PanelPrice +
            edgePrice + Number(moikaPrice) + Number(moikaPrice2) + Number(moikaPrice3) + Number(moikaPrice4) + Number(moikaPrice5) + Number(cutGluePrice) + Number(cutMoikaPrice))*0.1
            }
          } else {
            koeffUstanovka = 0
          }
          priceSlab = calculationPrice // Для слэбов
          // итоговая цена столешницы
          result =
            (
            Number(tableSquare) * calculationPrice + Number(PanelPrice) +
            Number(edgePrice) +
            Number(moikaPrice) +
            Number(moikaPrice2) +
            Number(moikaPrice3) +
            Number(moikaPrice4) +
            Number(moikaPrice5) +
            Number(cutMixerPrice) +
            Number(cutMoikaPrice*this.CountcheckboxCutMoika) +
            Number(cutGluePrice*this.CountcheckboxCutGlue) +
            Number(kernelPrice) +
            Number(cutStovePrice*this.CountcheckboxCutStove)
            )*koefSkidka +
            Number(zonePrice) +
            Number(zamerPrice) +
            Number(koeffUstanovka) +
            Number(liftingPrice);
        } else {
          tableSquare = 1; // площадь столешницы
        }
        // Подоконник
      } else if (this.typeMain == 2) {
        tableSquare = ((tableWidth / 1000) * (tableLength / 1000)).toFixed(2); // расчет площади подоконника
        showTableSquare = tableSquare
        tableSquareInstall = tableSquare
        //Добавляем коэффициент для Акрила в случае, если столешница менее либо равна одному кв. метру
          if(tableSquare <= 1 && this.selectMaterial == 2) {
            tableSquare = (tableSquare*1.5).toFixed(2)
          }
          
        // Подсчитываем стоимость установки и потом клюсуем к общей цене
          if(ustanovkaPrice == 1) {
            // cutMixerPrice cutStovePrice - не используем при расчете стоимости установки
            if(this.selectMaterial == 2) { // Делаем условие для акрилового камня
              koeffUstanovka = +tableSquare*1500 + bortikLength*200/1000
              console.log(koeffUstanovka)
            } else if(this.selectMaterial == 0) { // Для кварца
              koeffUstanovka = +tableSquareInstall*1700 + bortikLength*300/1000
            }
            else { // Жижкий
            koeffUstanovka =  (tableSquare * calculationPrice +
            edgePrice)*0.2
            }
          } else {
            koeffUstanovka = 0
          }
          priceSlab = calculationPrice // Для слэбов
        // итоговая цена подоконника
        result =
          (Number(tableSquare) * calculationPrice)*koefSkidka +
          Number(zonePrice) +
          Number(koeffUstanovka) +
          Number(liftingPrice);
        // Ванная - умывальник
      } else if (this.typeMain == 3) {
        tableSquare = ((tableWidth / 1000) * (tableLength / 1000)).toFixed(2); // расчет площади
        showTableSquare = tableSquare
        tableSquareInstall = tableSquare
        //Добавляем коэффициент для Акрила в случае, если столешница менее либо равна одному кв. метру
          if(tableSquare <= 1 && this.selectMaterial == 2) {
            tableSquare = (tableSquare*1.5).toFixed(2)
          }
        // функция расчета длины торцевой кромки столешницы
        kromkaLength =
          (this.farEdge == 1 ? Number(tableLength) : 0) +
          (this.leftEdge == 1 ? Number(tableWidth) : 0) +
          (this.frontEdge == 1 ? Number(tableLength) : 0) +
          (this.rightEdge == 1 ? Number(tableWidth) : 0);
        // функция расчета длины бортика столешницы
        bortikLength =
          (this.farEdge == 2 ? Number(tableLength) : 0) +
          (this.leftEdge == 2 ? Number(tableWidth) : 0) +
          (this.frontEdge == 2 ? Number(tableLength) : 0) +
          (this.rightEdge == 2 ? Number(tableWidth) : 0);
        edgePrice =
          (kromkaLength / 1000) * kromkaPrice +
          (bortikLength / 1000) * bortikPrice; // расчет стоимости кромки
          // Подсчитываем стоимость установки и потом клюсуем к общей цене
          if(ustanovkaPrice == 1) {
            // cutMixerPrice cutStovePrice - не используем при расчете стоимости установки
            if(this.selectMaterial == 2) { // Делаем условие для акрилового камня
              koeffUstanovka = +tableSquare*1700 + bortikLength*300/1000
            } else if(this.selectMaterial == 0) {
              koeffUstanovka = +tableSquareInstall*1700 + bortikLength*300/1000
            }
            else {
            koeffUstanovka =  (tableSquare * calculationPrice +
            edgePrice + Number(moikaPrice) + Number(moikaPrice2) + Number(moikaPrice3) + Number(moikaPrice4) + Number(moikaPrice5) + Number(cutMoikaPrice))*0.1
            }
          } else {
            koeffUstanovka = 0
          }
          priceSlab = calculationPrice // Для слэбов
        // итоговая цена столешницы
        result =
          (tableSquare * calculationPrice +
          edgePrice +
          Number(moikaPrice) +
          Number(moikaPrice2) +
          Number(moikaPrice3) +
          Number(moikaPrice4) +
          Number(moikaPrice5) +
          Number(cutMoikaPrice*this.CountcheckboxCutMoika) +
          Number(cutGluePrice*this.CountcheckboxCutGlue)
           )*koefSkidka +
          zonePrice +
          koeffUstanovka +
          liftingPrice;
      } else {
        return false;
      }
      // Выбор подхлёста кромки (подхлест снизу)
      if (this.selectPathlist.price) {
        result = result + (this.selectPathlist.price * kromkaLength) / 1000;
      }
      // Коэффициент для акрилового камня
     // tableSquare = tableSquare*1.5
      //
      vm.tableWidth = tableWidth; // Ширина
      vm.tableLength = tableLength; // Длина
      vm.tablePrice = tablePrice; // массив с данными о столешнице
      vm.priceSlab = priceSlab // стоимость одного слэба
      vm.tableSquare = tableSquare; // Площадь столешницы
      vm.PanelSquare = PanelSquare; // Площадь стеновой панели
      vm.showTableSquare = showTableSquare; // Показываемая площадь
      vm.showPanelSquare = showPanelSquare; // Показываем площадь стеновой панели
      vm.kromkaPrice = (kromkaPrice * kromkaLength) / 1000; // Цена кромки
      vm.kromkaLength = kromkaLength; // длина кромки
      vm.bortikPrice = (bortikPrice * bortikLength) / 1000; // Цена бортика
      vm.bortikLength = bortikLength; // длина бортика
      vm.allKromkaPrice = edgePrice.toFixed(1); // Цена всей кромки по периметру
      vm.cutMixerPrice = cutMixerPrice; // Цена выреза под смешитель
      vm.cutMoikaPrice = cutMoikaPrice; // Цена выреза под мойку
      vm.moikaPrice = moikaPrice; // Цена за мойку из камня
      vm.moikaPrice2 = moikaPrice2; // Цена за мойку из камня
      vm.moikaPrice3 = moikaPrice3; // Цена за мойку из камня
      vm.moikaPrice4 = moikaPrice4; // Цена за мойку из камня
      vm.moikaPrice5 = moikaPrice5; // Цена за мойку из камня
      vm.cutGluePrice = cutGluePrice; // Цена за вырез под мойку, подклейка снизу
      vm.cutStovePrice = cutStovePrice; // Цена выреза под варочную панель
      vm.zonePrice = zonePrice; // Стоимость доставки
      vm.zamerPrice = zamerPrice; // Стоимость замера
      vm.ustanovka = koeffUstanovka.toFixed(1); // Стоимость установки
      vm.lifting = liftingPrice; // Стоимость подъема
      vm.result = result ? Math.ceil(result.toFixed(1)/10)*10 : 0; // Итоговая цена
      return vm;
    },
  },
};
</script>

<style scoped>
.inputPanel {
  padding: 5px;
  border: 1px solid #ccc !important;
  width: 60px !important;
}
.Logout {
  color: red;
  border-bottom: 1px dotted red;
  margin-left: 10px;
  cursor: pointer;
}
.count_vyrezy {
  position: relative;
    top: -10px;
    margin-left: 10px;
}
.input_count_vyrezy {
      padding: 4px !important;
    border: 1px solid #e2e2e2 !important;
}
.typeProcent {
  border: 1px solid #ccc;
    padding: 4px;
}
.changeParams {
  padding: 10px;
  background: #e37600;
  color: white;
  cursor: pointer;
}
.green {
  background: #42b983;
}
.changeParams:hover {
  opacity: 0.7;
}
.applySkidka {
  padding: 6px;
    background: green;
    color: white;
    margin-right: 10px;
}
.noChange {
  padding: 6px;
    background: #e95c00;
    color: white;
    margin-left: 10px;
}
.skidka {
  padding: 5px;
  border: 1px solid #e2e2e2;
}
.clearMoika {
  font-size: 12px;
    display: inline-block;
    top: -1px;
    position: relative;
    margin-left: 10px;
    color: #e37600;
}
.listActiveMoika {
  margin-top: 10px;
}
.listActiveMoika ul {
margin-top: -20px;
    margin-left: 73px;
    margin-bottom: 0;
}
.listMoika {
  margin-left: 73px;
    display: block;
    width: fit-content;
    margin-top: -17px;
  color: #c8601b;
    font-size: 14px;
    border-bottom: 1px dotted;
    cursor: pointer;
}
.icon_poisk {
  position: relative;
  left: -16px;
    opacity: 0.6;
}
.filteredPalitra {
  border: 1px solid black;
  margin-left: 5px;
  padding: 5px;
}
.clearFilter {
  color: #e37600;
  font-size: 14px;
    border-bottom: 1px dotted;
    cursor: pointer;
}
.clear {
  clear: both;
}
.calc_wrapper {
  padding: 25px;
}
.calc_wrapper .select_type {
  margin: 0 0 25px;
}
.calc_wrapper .select_type li {
  display: inline-block;
  margin: 0 40px 5px 0;
}
.calc_wrapper li::before {
  content: "";
}
.calc_wrapper .select_type li {
  outline: 2px solid #999;
  display: inline-block;
  text-align: center;
  width: 150px;
  padding: 0 0 10px;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
}
.calc_wrapper .select_type li.active {
  outline: 2px solid #000;
  box-shadow: 0 0 8px #000;
}
.calc_wrapper .select_type li i {
  display: inline-block;
  width: 129px;
  height: 110px;
  background: url("/pictures/img/calc/type-calc.jpg");
}
.calc_wrapper .select_type li i.tabletop {
  background-position: bottom left;
}
.calc_wrapper .select_type li i.sill {
  background-position: bottom center;
}
.calc_wrapper .select_type li i.bathroom {
  background-position: bottom right;
}
.calc_wrapper .select_type li span {
  font-size: 16px;
  color: #000;
}
.calc_wrapper .select.select_hem li .desc p {
  font-size: 13px;
  color: black;
}
.calc_wrapper .title {
  font-size: 18px;
  margin-bottom: 20px;
}
.calc_wrapper .select {
  margin: 0 0 15px;
}
.calc_wrapper .select li .img {
  width: 170px;
}
.calc_wrapper .select li img {
  max-width: 100%;
}
.calc_wrapper .select li {
  display: inline-block;
  vertical-align: top;
  margin: 0 20px 15px 0;
  text-align: center;
  font-size: 16px;
  color: #000;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
}
.calc_wrapper .select:not(.select_manufacturer) li {
  padding: 5px 15px;
  outline: 1px solid #999;
  overflow: hidden;
}
.calc_wrapper .select:not(.select_manufacturer) li.active {
  outline: 1px solid #000;
}
.calc_wrapper .select.select_manufacturer li {
  cursor: pointer;
  padding: 7px;
}
.calc_wrapper .select.select_manufacturer li img {
  width: 100px;
  height: 60px;
  outline: 1px solid #999;
  display: block;
  margin-bottom: 10px;
  transition: 0.3s;
  max-width: 100%;
}
.calc_wrapper .select.select_manufacturer li.active {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.calc_wrapper .select.select_manufacturer li.active img {
  outline: none;
}
.calc_wrapper .select:not(.select_manufacturer, .select_table) li.active {
  outline: 1px solid #000;
  background: rgba(255, 132, 0, 0.56);
  box-shadow: 0 0 5px #000;
}
.calc_wrapper .select li.active .name {
  color: white;
}
.calc_wrapper .select li .name,
.calc_wrapper .select li.active .name {
  outline: 0;
  background: transparent;
  transform: scale(1) !important;
 /* margin: 5px 0 0; */
  font-size: 14px;
}
.calc_wrapper .select li a.name:hover {
  text-decoration: none;
}
.calc_wrapper .select.select_table li {
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  padding: 12px 0 0;
  background-size: cover;
  box-sizing: border-box;
  cursor: pointer;
}
.calc_wrapper .select.select_table li.active {
  transform: scale(1.1);
  box-shadow: 0 0 5px #000;
}
.calc_wrapper .select.select_manufacturer {
  margin: 0;
}
.calc_wrapper .select.select_manufacturer li img,
.calc_wrapper .select.select_series li a {
  padding: 0;
}
.calc_wrapper .select.select_manufacturer li.active img,
.calc_wrapper .select.select_manufacturer li.active .img,
.calc_wrapper .select.select_series li.active a {
  transform: scale(1.06);
}
.calc_wrapper .select.select_manufacturer li,
.calc_wrapper .select.select_series li {
  width: 114px;
}
.calc_wrapper .select.select_series li a img {
  width: 100px;
  height: 60px;
  display: block;
}
.calc_wrapper .comment p {
  font-size: 16px;
  margin: 0 0 15px;
}
.calc_wrapper .select_sizes {
  margin: 0 0 20px;
}
.calc_wrapper .select_sizes span {
  font-size: 16px;
  margin: 0 10px 0 0;
}
.calc_wrapper .scheme {
  margin: 0 0 30px;
}
.calc_wrapper .scheme .one_scheme {
  position: relative;
  margin-top: 3rem;
  margin-bottom: 6rem;
}
.calc_wrapper .scheme .one_scheme img {
  display: block;
}
.calc_wrapper .scheme .one_scheme label {
  position: absolute;
  font-weight: normal;
  cursor: pointer;
  text-align: center;
}
.calc_wrapper .scheme .one_scheme input,
.calc_wrapper .scheme .one_scheme span {
  vertical-align: middle;
}
.calc_wrapper .scheme .one_scheme span {
  font-size: 14px;
}
.calc_wrapper .scheme .one_scheme input[type="text"] {
  width: 45px;
  text-align: center;
  height: 20px;
  border: 1px solid #333;
}
.calc_wrapper .scheme .one_scheme select {
  height: 24px;
  cursor: pointer;
}
.calc_wrapper .select.select_hem {
  text-align: center;
  margin: 0;
}
.calc_wrapper .select.select_hem.show_all {
  margin: 0 0 20px;
}
.calc_wrapper .select.select_hem li {
  float: left;
  margin: 0 25px 20px 0;
}
.calc_wrapper .select.select_hem li:nth-child(3n) {
  margin-right: 0;
}
.calc_wrapper .select.select_hem li:nth-child(3n + 1) {
  clear: both;
}
.calc_wrapper .select.select_hem.hem li:nth-child(n + 7) {
  display: none;
}
.calc_wrapper .select.select_hem.hem.show_all li:nth-child(n + 7) {
  display: inline-block;
}
.calc_wrapper .select.select_hem li a {
  width: 225px;
  padding: 10px 10px;
}
.calc_wrapper .select.select_hem li.active a {
  background: #ffe0c3;
}
.calc_wrapper .select.select_hem.kromka li a .img {
  text-align: center;
  width: 110px;
  transition: 0.3s;
}
.calc_wrapper .select.select_hem li a .img {
  float: left;
  width: 120px;
  transition: 0.3s;
}
.calc_wrapper .select.select_hem li.active a .img {
  transform: scale(1.1);
}
.calc_wrapper .select.select_hem li a .img img {
  width: 100%;
  display: block;
}
.calc_wrapper .select.select_hem li a .desc {
  width: 70px;
  float: left;
  text-align: left;
  margin-left: 10px;
  font-size: 13px;
}
.calc_wrapper .select.select_hem li.active a .desc .name {
  text-decoration: underline;
}
.calc_wrapper .hem_show_all {
  text-align: right;
  margin: 0 70px 20px 0;
}
.calc_wrapper .hem_show_all a {
  color: #000;
  text-decoration: underline;
}
.calc_wrapper .hem_show_all a:hover {
  text-decoration: none;
}
.calc_wrapper .select_delivery {
  list-style-type: none;
  margin: 0 0 30px;
}
.calc_wrapper .select_delivery li {
  margin: 0 0 5px;
}
.calc_wrapper .select_delivery .one_delivery {
  display: inline-block;
  cursor: pointer;
}
.calc_wrapper .select_delivery .one_delivery input[type="radio"] {
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px 0 0;
}
.calc_wrapper .select_delivery .one_delivery span {
  display: inline-block;
  vertical-align: middle;
  font-size: 17px;
}
.calc_wrapper .select_delivery .one_delivery select {
  display: inline-block;
  vertical-align: middle;
  min-width: 200px;
  height: 20px;
  cursor: pointer;
}
.calc_wrapper .results {
  border: 1px solid #999;
  padding: 10px 20px 20px;
  margin: 0 0 20px;
}
.calc_wrapper .results > .title {
  color: #2e2e2e;
  text-transform: uppercase;
}
.calc_wrapper .results p {
  border: none;
}
.calc_wrapper .buttons {
  margin: 40px 0 25px;
}
.calc_wrapper .buttons a {
  display: inline-block;
  padding: 10px 30px;
  margin: 0 30px 0 0;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  background: #ff8400;
  transition: 0.3s;
}
.calc_wrapper .buttons a:hover {
  background: #e37600;
}
.calc_wrapper .buttons .order {
  display: none;
}
.calc_wrapper .order_form {
  border: 1px solid #666;
  padding: 20px;
}
.calc_wrapper .order_form label {
  margin: 0 0 10px;
}
.calc_wrapper .order_form label p {
  font-size: 14px;
  margin: 0 0 3px;
}
.calc_wrapper .order_form label input {
  display: block;
  width: 300px;
  border: 1px solid #999;
  height: 32px;
  padding: 0 10px;
  font-size: 16px;
}
.calc_wrapper .order_form .button {
  display: inline-block;
  padding: 10px 30px;
  margin: 10px 0 0;
  font-size: 16px;
  text-decoration: none;
  color: #fff;
  background: #ff8400;
  transition: 0.3s;
}
.calc_wrapper .order_form .button:hover {
  background: #e37600;
}
.calc_wrapper .order_form .success {
  text-align: center;
  font-size: 24px;
  padding: 30px 0;
}
.table-calc {
  display: inline-block;
  margin-left: 10px;
}
.managerresults ul.resultscalc li {
  padding: 5px;
  width: 100%;
}
.managerresults ul.resultscalc li:hover {
  background: rgba(255, 186, 112, 0.64);
}
.show-palitra {
  cursor: pointer;
}
.zamer-region {
  display: none;
}
input.form-control {
  display: inline-block;
}
.btn-success {
  margin-top: -1px !important;
}
input[type="number"i] {
  width: 48px;
  border: none;
}
.scheme input[type="checkbox"],
input[type="radio"] {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  outline: none;
  margin: 0;
  box-sizing: border-box;
  border-radius: 3px;
}
.scheme input[type="checkbox"]:checked:before {
  content: ">";
  font-size: 32px;
  color: rgb(58, 153, 45);
  display: block;
  transform: rotateZ(90deg);
  margin: -21px 9px;
  pointer-events: none;
  border: none;
}
.scheme input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: none;
}
.scheme select {
  border: 1px solid #ccc;
  height: 24px;
  border-radius: 4px;
}
input[type="number"] {
  -moz-appearance: textfield;
  background-color: rgba(240, 255, 255, 0);
  color: #ff8400;
}
.moika-input {
  border: 1px solid #999 !important;
  border-radius: 4px;
  width: 50px !important;
  padding: 2px 0 2px 2px;
}
.select_series_zoom {
  border-top: 0.5px solid #2e2e2e;
}
.select_series_zoom img {
  width: 12px !important;
  height: 12px !important;
  margin: 5px;
}
.calc_wrapper .select.select_series li.active a.select_series_zoom,
.calc_wrapper .select.select_series li a.select_series_zoom {
  font-size: 13px !important;
  line-height: 21px !important;
  background: #ccc;
}
.calc_wrapper .select.select_series li a img {
  display: inline-block;
}
/*============= Актуальные стили =============*/
.select-wrapper {
  margin-bottom: 4rem;
}
.change-see {
  display: block;
  margin-bottom: 1rem;
}
.select_material span {
  display: inline-block;
  text-decoration: none;
  padding: 5px;
}
.select_manufacturer .name {
  padding: 0;
  text-decoration: underline;
}
.map-block {
  margin: 2rem 0;
}
.results b {
  color: #000;
}
.fat-table {
  padding: 8px 20px;
  height: auto !important;
  border: 1px solid #000;
  display: block;
    margin-bottom: 10px;
}
.select_material span {
  font-size: 12px !important;
  font-weight: 500;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
}
.link-see {
  color: #79a6a6;
  text-decoration: none;
  cursor: pointer;
  margin-left: 10px;
}
.link-see.active {
  color: #e37600 !important;
  border-bottom: 1px dotted #e37600 !important;
}
.select-category > li {
  padding: 0.5rem 1rem !important;
}
.select-category > li > a {
  text-decoration: none;
}
.select-category > li.active a {
  color: #fff;
  text-decoration: dotted;
}
.moika-label {
  position: static !important;
}
.moika-active_title {
  margin-left: 7px;
    cursor: pointer;
    position: relative;
    top: -10px;
}
.moika-active_title > i {
  margin-left: 2px;
}
/* модальное окно */
.show-modal,
.modal-default-button,
.moika-block {
  cursor: pointer;
}
.moika-block:hover {
  box-shadow: 0 0 5px #f90;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  padding: 1rem;
}
.modal-container {
  max-width: 900px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  max-height: 400px;
  overflow-y: auto;
}
.modal-default-button {
  float: right;
}
/* --transition="modal" -- */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.showPodhlest {
  border-bottom: 1px dotted;
  font-size: 18px;
  cursor: pointer;
  color: #ffba70;
}
.numStyle {
  color: white;
    background: #9f4000;
    display: inline-block;
    text-align: center;
    margin: 0 10px 5px 0;
    line-height: 23px;
    width: 20px;
    height: 20px;
    float: left;
    font-size: 12px;
}
.right-menu {
  position: fixed;
    right: 0;
    display: grid;
}
.right-menu li:before{
  margin-right: 0;
}
.right-menu li {
  text-align: center;
  width: 30px;
  cursor: pointer;
}
.right-menu span.active{
  background: #e37600;
  
  transition: 0.5s;
}
.select-wrapper ul li:before{
  margin-right: 0;
}
/* Красивый переключатель */
.box_radio {
  display: inline-block;
}
.title_radio {
  margin-left: 10px;
    /* line-height: 14px; */
    position: relative;
    top: -10px;
    font-size: 20px;
    color: #808080;
}
.title_radio.active {
  color:#e37600;
}
.tgl {
    display: none;
}
.tgl, .tgl:after, .tgl:before, .tgl *, .tgl *:after, .tgl *:before, .tgl + .tgl-btn {
    box-sizing: border-box;
}
.tgl::-moz-selection, .tgl:after::-moz-selection, .tgl:before::-moz-selection, .tgl *::-moz-selection, .tgl *:after::-moz-selection, .tgl *:before::-moz-selection, .tgl + .tgl-btn::-moz-selection {
    background: none;
}
.tgl::selection, .tgl:after::selection, .tgl:before::selection, .tgl *::selection, .tgl *:after::selection, .tgl *:before::selection, .tgl + .tgl-btn::selection {
    background: none;
}
.tgl + .tgl-btn {
    outline: 0;
    display: block;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.tgl + .tgl-btn:after, .tgl + .tgl-btn:before {
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
}
.tgl + .tgl-btn:after {
    left: 0;
}
.tgl + .tgl-btn:before {
    display: none;
}
.tgl:checked + .tgl-btn:after {
    left: 50%;
}
.tgl-light + .tgl-btn {
    background: #f0f0f0;
    border-radius: 2em;
    padding: 2px;
    transition: all .4s ease;
}
.tgl-light + .tgl-btn:after {
    border-radius: 50%;
    background: #fff;
    transition: all .2s ease;
}
.tgl-light:checked + .tgl-btn {
   background: #ff9900a3;
}
.title_choose {
  color: #999;
    font-size: 15px;
}
.chooseTypeColor {
  color:#999;
  font-size: 16px;
}
/* Красивые радио-кнопки */
.form_radio_btn {
	display: inline-block;
	margin-right: 10px;
}
.form_radio_btn input[type=radio] {
	display: none;
}
.form_radio_btn label {
	display: inline-block;
	cursor: pointer;
	padding: 0px 15px;
	line-height: 34px;
	border: 1px solid #999;
	border-radius: 6px;
	user-select: none;
}
 
/* Checked */
.form_radio_btn input[type=radio]:checked + label {
	background: #ffe0a6;
}
 
/* Hover */
.form_radio_btn label:hover {
	color: #666;
}
 
/* Disabled */
.form_radio_btn input[type=radio]:disabled + label {
	background: #efefef;
	color: #666;
}
/* Расположение размеров на картинке */
.label1 {
  top: 187px; left: -50px;
}
.label2 {
  top: 153px; left: -50px;
}
.label3 {
  top: 28px; left: 409px;
}
.label4 {
  top: 236px; left: 733px;
}
.label5 {
  top: 91px; left: 165px;
}
.label6 {
  top: 109px; left: 433px;
}
.label7 {
  top: 197px; left: 286px;
}
.label8 {
  top: 206px; left: -51px;
}
.label9 {
  top: -18px; left: 299px;
}
.label10 {
  top: -24px; left: 467px;
}
.label11 {
  top: 195px; left: 736px;
}
.label12 {
  top: 228px; left: 553px;
}
.label13 {
  top: 103px; left: 94px;
}
.label14 {
  top: 72px; left: 240px;
}
.label15 {
  top: 62px; left: 556px;
}
.label16 {
  top: 82px; left: 690px;
}
.label17 {
  top: 298px; left: 280px;
}
.label18 {
  top: 299px; left: 442px;
}
.label19 {
  top: 203px; left: -47px;
}
.label20 {
  top: -23px; left: 165px;
}
.label21 {
  top: 8px; left: 327px;
}
.label22 {
  top: -26px; left: 459px;
}
.label23 {
  top: 194px; left: 723px;
}
.label24 {
  top: 276px; left: 632px;
}
.label25 {
  top: 161px; left: 360px;
}
.label26 {
  top: 127px; left: 121px;
}
.label27 {
  top: 156px; left: 98px;  
}
.label28 {
  top: 62px; left: 264px;
}
.label29 {
  top: 63px; left: 558px;
}
.label30 {
  top: 114px; left: 697px;
}
.label31 {
  top: 414px; left: 607px;
}
.label32 {
  top: 562px; left: 398px;
}
.label33 {
  top: 288px; left: 74px;
}
.label34 {
  top: 105px; left: 74px;
}
.label35 {
  top: 170px; left: 74px;
}
.label36 {
  top: 331px; left: 74px;
}
.label37 {
  top: 89px; left: 313px;
}
.label38 {
  top: 73px; left: 481px;
}

/**/
@media (max-width: 800px){
  .moika-block {
    flex: 42%;
    max-width: 42%;
  }
  .moika-block h5 {
    font-size: 13px;
  }
  .calc_wrapper .select li {
    width: 43%;
  }
  .calc_wrapper .select li .img {
    width: 100%;
  }
  .title_radio {
    font-size: 13px;
  }
  .calc_wrapper .scheme .one_scheme select {
    font-size: 10px;
  }
  /* Расположение размеров на картинке */
.label1 {
  top: 187px; left: 44px;
}
.label2 {
  top: 137px; left: 40px;
}
.label3 {
  top: 28px; left: 409px;
}
.label4 {
  top: 236px; left: 733px;
}
.label5 {
  top: 91px; left: 165px;
}
.label6 {
  top: 109px; left: 433px;
}
.label7 {
  top: 197px; left: 286px;
}
.label8 {
  top: 206px; left: 1px;
}
.label9 {
  top: 0; left: 299px;
}
.label10 {
  top: -1px; left: 467px;
}
.label11 {
  top: 195px; left: 736px;
}
.label12 {
  top: 228px; left: 553px;
}
.label13 {
  top: 103px; left: 94px;
}
.label14 {
  top: 72px; left: 240px;
}
.label15 {
  top: 62px; left: 556px;
}
.label16 {
  top: 82px; left: 690px;
}
.label17 {
  top: 298px; left: 280px;
}
.label18 {
  top: 299px; left: 442px;
}
.label19 {
  top: 203px; left: 0px;
}
.label20 {
  top: -1px; left: 192px;
}
.label21 {
  top: 8px; left: 327px;
}
.label22 {
  top: -1px; left: 459px;
}
.label23 {
  top: 194px; left: 723px;
}
.label24 {
  top: 276px; left: 632px;
}
.label25 {
  top: 161px; left: 360px;
}
.label26 {
  top: 127px; left: 121px;
}
.label27 {
  top: 156px; left: 98px;  
}
.label28 {
  top: 62px; left: 264px;
}
.label29 {
  top: 63px; left: 558px;
}
.label30 {
  top: 114px; left: 697px;
}
.label31 {
  top: 414px; left: 607px;
}
.label32 {
  top: 562px; left: 398px;
}
.label33 {
  top: 288px; left: 74px;
}
.label34 {
  top: 105px; left: 74px;
}
.label35 {
  top: 170px; left: 74px;
}
.label36 {
  top: 331px; left: 74px;
}
.label37 {
  top: 89px; left: 313px;
}
.label38 {
  top: 73px; left: 481px;
}
 
   .calc_wrapper .select_type li {
    width: 22%;
    margin: 0 20px 5px 0;
  }
  .calc_wrapper .select_type li i {
    width: 100%;
    background: no-repeat left/300% url("/pictures/img/calc/type-calc.jpg");
  background-position: left;
  height: 64px;
  }
  .calc_wrapper .select_type li span {
    font-size: 10px;
  }
  .calc_wrapper .select.select_table li {
    width: 65px;
    height: 65px;
  }
  .calc_wrapper .select li {
    font-size: 11px;
  }
  .select_material span {
    font-size: 10px !important;
  }
  .select_material li {
    margin-right: 5px !important;
    padding: 5px 5px !important;
  }
  .calc_wrapper {
    padding: 0;
  }
  .main-container {
    padding-right: 10px;
    padding-left: 10px;
  }
  .changeParams {
    margin-bottom: 5px;
    font-size: 10px;
  }
  .link-see {
    font-size: 12px;
  }
  .filteredPalitra {
    margin-left: 0px;
    margin-top: 8px;
  }
  
  .card-plitka-cards .card-plitka_item {
    width: 40%;
  }
  .modal-content img {
    width: 100%;
  }
  .one_scheme {
   overflow-x:scroll;
  }
  ::-webkit-scrollbar {
    width: 12px;
    height: 5px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
}
</style>