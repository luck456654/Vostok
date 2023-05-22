<template>
  <div class="container error-block">
    <h1 v-if="error.statusCode === 404"><span class="error-span">Ошибка</span> 404 <br>Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    <nuxt-link :to="$store.state.sityFolder + '/'" >Вернуться на главную</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],

}
</script>
<style scoped>
.error-block {
  min-height: 400px;
  text-align: center;
}
.error-block h1 {
  font-weight: 700;
  text-transform: uppercase;
  color: #271717;
  margin-top: 0px;
  font-size: 46px;
  line-height: 60px;
  text-align: center;
  margin-top: 60px;
}
 .error-span {
  text-transform: none;
}
.error-block a {
  color: #af272d;
  font-size: 1.8rem;
  color: #FF3F3F;
  display: block;
  margin-top: 60px;
}
</style>
