<template>
    <div>
        <h1>Прайс-листы</h1>
        <div class="panel">
            <button v-bind:class="[currentStone == index ? 'current_button' : '', '']"  @click="currentStone = index" v-for="(item, index) in arr" :key="index">{{ index }}</button>
        </div>
        <div class="listing">
            
            <table>
            <caption>
                <div class="wrapli">
                <img :src="brands[currentStone]" alt="" />
                <a :href="'https://xn----8sbpjfhemeg8am4jmj.xn--p1ai/exel/' + arr[currentStone]['file']" target="_blank" class="lnk" ><input type="button" class="lnkbtn" value="Cкачать прайс-лист"/></a>
             </div>           
            </caption>
                <tr class="head_table">
                    <th>Серия</th>
                    <th v-for="(item2, key) in arr[currentStone].stones[0]" :key="key" v-if="key > 1">{{item2}}</th>
                </tr>
                <tr  v-for="(item2, key) in arr[currentStone].stones" :key="key" v-if="key > 0">
                    <td v-for="(item3, key2) in item2" :key="key2" v-if="key2 > 0">
                       <span v-if="item3 != '' && item3 != '-'">{{ item3 }} </span>
                       <span v-else>--</span>
                       <span v-if="key2 > 1 && item3 != '' && item3 != '-'">{{ typePrices[arr[currentStone]['type']] }}</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
        typePrices: [
            '₽/м²',
            '$/м²',
            '$/слэб',
            '€/м²',
            '€/слэб',
        ],
        currentStone: 'Granistone',
        brands: {
            'Granistone': 'https://стильный-камень.рф/exel/brand/granistone.svg',
            'Avant': 'https://стильный-камень.рф/exel/brand/avant.jpg',
            'Ceasarstone': 'https://стильный-камень.рф/exel/brand/Ceasarstone.jpg',
            'Cirrus': 'https://стильный-камень.рф/exel/brand/Cirrus.png',
            'Grandex': 'https://стильный-камень.рф/exel/brand/Grandex.jpg',
            'Hi-Macs': 'https://стильный-камень.рф/exel/brand/Hi-Macs.png',
            'Neomarm': 'https://стильный-камень.рф/exel/brand/Neomarm.jpg',
            'Pluton_Hanex': 'https://стильный-камень.рф/exel/brand/pluton.jpg',
            'Radianz': 'https://стильный-камень.рф/exel/brand/Radianz.jpg',
            'Silestone': 'https://стильный-камень.рф/exel/brand/silestone.jpg',
            'Smartquartz': 'https://стильный-камень.рф/exel/brand/Smartquartz.png',
            'Staron': 'https://стильный-камень.рф/exel/brand/staron.png',
            'Technistone': 'https://стильный-камень.рф/exel/brand/Technistone.png',
            'Vicostone': 'https://стильный-камень.рф/exel/brand/Vicostone.png'
        },
        arrPrice:{
            'Granistone': 'https://стильный-камень.рф/exel/granistone_id.xlsx',
            'Avant': 'https://стильный-камень.рф/exel/avant_id.xlsx',
            'Ceasarstone': 'https://стильный-камень.рф/exel/Ceasarstone_id.xlsx',
            'Cirrus': 'https://стильный-камень.рф/exel/Cirrus_id.xlsx',
            'Grandex': 'https://стильный-камень.рф/exel/Grandex_id.xlsx',
            'Hi-Macs': 'https://стильный-камень.рф/exel/Hi-Macs_id.xlsx',
            'Neomarm': 'https://стильный-камень.рф/exel/Neomarm_id.xlsx',
            'Pluton_Hanex': 'https://стильный-камень.рф/exel/pluton_id.xlsx',
            'Radianz': 'https://стильный-камень.рф/exel/Radianz_id.xlsx',
            'Silestone': 'https://стильный-камень.рф/exel/silestone_id.xlsx',
            'Smartquartz': 'https://стильный-камень.рф/exel/Smartquartz_id.xlsx',
            'Staron': 'https://стильный-камень.рф/exel/staron_id.xlsx',
            'Technistone': 'https://стильный-камень.рф/exel/Technistone_id.xlsx',
            'Vicostone': 'https://стильный-камень.рф/exel/Vicostone_id.xlsx'
        }
        }
    }, 
    async asyncData({
        $axios,
        app,
        error
    }) {
        return await app.$axios
            .$get(
                `https://стильный-камень.рф/api/components/updatePricesesByXml.php?take=all`
            )
            .then(arr => {
                return {
                    arr:arr.result,
                };
            })
            .catch(err => {
                error(err);
            });
    },
}
</script>
<style  scoped>
caption {
    text-align: left;
    min-height: 100px;
    position: relative;
}
caption img{
    max-height: 100px;
    position: absolute;
    bottom: 0;
}
.panel {
    margin-bottom: 30px;
}
.panel button {
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
}
.current_button {
    background: #c8601b;
    color: white;
}
.panel button:hover {
    transition: 0.5s;
    background: #c8601b;
    color: white;
}
table {
   border: 1px solid #bdd0d0;
   border-collapse: separate;
   empty-cells: hide;
   width:100%;
   table-layout: fixed;
   overflow-wrap: break-word;
   margin-bottom: 30px;
}
table * {
    border: none;
}
th, td {
    text-align: left;
    padding: 10px;
   /*border: 2px solid #69c;*/
}
tr:hover td {
  background: #c8601b80;
}
/* Нечетные строки */
tr:nth-child(odd){
	background: #eee;
}
.head_table {
    background: #bdd0d0;
}
.lnkbtn{
    padding: 10px;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 28px;
    }
.lnkbtn:hover{
    color: white;
    background-color: #EF6900;    
}
.wrapli{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
} 
.lnk{
    margin-left: auto;
    margin-top: 10px;
}   
</style>