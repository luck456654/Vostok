<template>
    <div class="tables">
      <div class="wrapper">
        <div v-for="(item, index) in user"
                  :key="index" class="mark" @click="changeMark" :id="item">        
                 {{ item }}
       </div>
       <div v-for="(item, index) in arr"
                  :key="index" class="mark" @click="changeMark" :id="item">        
        {{ item }}
       </div>
    </div>
     
    <table class="table">
      <tbody>
              <tr class="dnone"><th colspan="5" style="background-color: #bdd0d0!important;">Резерв неоплаченных остатков держится 14 календарных дней</th></tr>
              <tr class="dnone" style="background-color: #bdd0d0!important;"><th>Чертежи необходимо обязательно согласовать с Пашей</th><th colspan="4">проведена инвентаризация 25.01.2023г</th></tr>
              <tr style="background-color: #bdd0d0!important;"><th>Пистолет записывается с нижнего угла по часовой стрелке</th><th>Менеджер</th><th>Дата</th><th>Статус</th><th>Комментарий</th><th>Оттенок</th><th>Удалить</th></tr>
              <tr style="background-color: #bdd0d0!important;"><th>Цвет</th><th>Размер</th><th colspan="3">Внутр. обозначение</th><th></th><th></th></tr>
            
               <tr v-for="(item, index) in getell"  
                    :key="index" :class = "(index % 2 != 0)?'bgcolor':'bgc'">
                    <td class="value wrapp"   v-if="item.id==activeMark"><input :placeholder="item.name" v-model="item.name" @input = "edit(item.idx,'name')" class="input inputs"/></td>
                    <td class="value"  v-if="item.id==activeMark"><input :placeholder="item.nameMen" v-model="item.nameMen" @input = "edit(item.idx,'nameMen')" class="input inputs"/></td>
                    <td class="value"  v-if="item.id==activeMark"><input :placeholder="item.data" v-model="item.data" @input = "edit(item.idx,'data')" class="input inputs"/></td>
                    <td  class="value" v-if="item.id==activeMark"><input :placeholder="item.statusEls" v-model="item.statusEls" @input = "edit(item.idx,'statusEls')" class="input inputs"/></td>
                    <td class="value"  v-if="item.id==activeMark"><input :placeholder="item.comments" v-model="item.comments" @input = "edit(item.idx,'comments')" class="input inputs"/></td>
                    <td class="value"  v-if="item.id==activeMark"><input v-if="item.ott==''" type="text" class="input inputlinck" placeholder="Введите ссылку" @input = "edit(item.idx,'ott')"/>
                      <img v-if="item.ott!=''" :src="item.ott" class="imgott"/>
                    </td>
                    <td class="value dellicon"  v-if="item.id==activeMark"><input type="button" value="🗑" :id="index" class="btn btninput" @click="delbd(item.idx)"/></td>
                  </tr>
         </tbody>
  
    </table>
    <div class="wrappbtn">
    <input type="button" class="addbtn" value="+" @click="addElls"/>
    </div>
    <p><input placeholder="Наименование вкладки"  v-model="nameMark" class="input"/>
    <input type="button" value="Добавить вкладку" class="btn" @click="addMark">
    </p> 
    
    
  </div>
  </template>
    
    <script>
    export default {
    name: "Table",
    data() {
      return {
       activeMark:"Акрил", 
       nameMark:"",
       name:"",
       nameMen:"",
       data:"",
       statusEls:"",
       info:"",
       idx:0,
       arrElls:[],
       arr:[],
       temp:[],
       temp2:'',
       user:[],
       getell:[],
       num:0,
       };
    },
    mounted() {
    this.$nextTick(function () {
      this.getdata()
      console.log(this.$route)
      
    })
    },
    methods: {
    async edit(index,nval){
      const edit = await this.$axios
            .$post("https://стильный-камень.рф/api/components/saveTable.php",{
              action: 'edit',
              idx:index,
              value:event.target.value,
              nameval:nval
              })
            .then((data) => {
               this.temp = edit
              })
            .catch((err) => {
              console.log(err);
              });
     },
     async delbd(index){
      const del = await this.$axios
            .$post("https://стильный-камень.рф/api/components/saveTable.php",{
              action: 'delete',
              idx:index,
              id:this.activeMark,
              })
            .then((data) => {
              console.log(del);
              this.temp=data
              this.getdata("del");
              })
            .catch((err) => {
              console.log(err);
              });
      },
      async getdata(ins){
        const user = await this.$axios
            .$post("https://стильный-камень.рф/api/components/saveTable.php",{
              action: 'getting',            
            })
            .then((data) => {
              
              console.log(data);
              this.getell=data;
              if(!ins){
              this.user = data;
              this.temp2 = data;
              this.num=this.user.length
              this.gettabs();
              }
             })
            .catch((err) => {
              console.log(err);
              });
      },
      addMark(){
        this.arr.push(this.nameMark)
        },
      gettabs(){
        for (let i=0; i<this.user.length; i++) {
          this.temp.push(this.user[i].id)
        }
        this.user=this.temp
        this.user = new Set(this.user);
        this.user = this.user 
      },
       async addElls(){
        const data = await this.$axios
          .$post("https://стильный-камень.рф/api/components/saveTable.php", {            
              action: 'add', 
              id:this.activeMark,
              })
            .then((data) => {
               this.temp = data;
               this.getdata('insert');
               })
            .catch((err) => {
              console.log(err);
            });   
      }, 
      changeMark(ev){
        this.activeMark=ev.target.id
      }
    }
    };
    </script>
    <style scoped>
    .table{
      border: 1px solid black;
      border-collapse: collapse; 
    }
    .input{
      border: 1px solid black;
      height: 53px;
      padding: 10px;
      }
    .btn{
      background-color: #c8601b;
      color: white;
    }  
    .wrapper{
      display: flex;
      flex-direction: row;
      margin-bottom: 3vw;
    }
    .mark{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: none;
      padding: 1vw;
      background:  #F0F0F0;
      color:  black;
      margin-right: 0.5vw;
      cursor: pointer;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 5px 10px;
      font-family: Arial;
      font-size: 1vw;
    } 
    .mark:hover{
    background: #c8601b;
    color: #fff ;
    }
    .value{
    font-weight: 400;
    } 
    .wrapp{
    display: flex;
    flex-direction: row;
    border: none;
    }
    .btninput {
      border-radius: 50px;
      width: 10px;
      height: 26px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color: #c8601b;
    }
    .inputs{
    background-color: unset;
      border: none;
      outline: none;
      color: black;
      font-size: 18px;
    }
    tbody{
    background-color: #BDD0D0;
    }
    th{
      padding: 10px;
      font-size: 20px; 
    }
    tr:hover{
    background-color: #E3AF8D;
    } 
    .bgcolor{
    background-color: #FFFFFF;
    }
    .bgc{
    background-color: #EEEEEE;
    }  
    .dnone{
      display: none;
    } 
    .left-menu {
      display: none;
    }
    .tables{
      margin-left: -51%;
      padding: 5vw;
    }
    .dellicon{
      display: flex;
      flex-direction: row;
      justify-content: center;
      border: none;
    }
    .wrappbtn{
      display: flex;
      flex-direction: row;
    }
    .addbtn,.delbtn{
      border-radius: 50px;
      width: 55px;
      height: 55px;
      font-size: 49px;
      margin-right: 10px;
      cursor: pointer;
    }
    .addbtn:hover,.delbtn:hover{
      background-color: #c8601b;
      color: white; 
    }
    .inputlinck{
      margin-left: 9px;
      padding: 10px;
      font-size: 20px;
      margin-right: 12px;
      margin-bottom: 10px;
      margin-top: 10px;
    }
    .imgott{
      width: 287px;
      height: 54px;
    }
    </style>