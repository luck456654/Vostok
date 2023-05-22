<template>
<div class="breadcrumbs">
  <div class="container">
    <ol itemscope itemtype="http://schema.org/BreadcrumbList">
      <li class="breadcrumbs-links" itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
        <nuxt-link :to="$store.state.sityFolder + '/'"  itemprop="item" >
          <span itemprop="name">Главная</span>
        </nuxt-link>
        <meta itemprop="position" content="1" />
      </li>
      <li class="breadcrumbs-links" itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
        <nuxt-link v-if="firstParent" :to="$store.state.sityFolder + firstParent[0].url"  itemprop="item" >
          <span itemprop="name"  v-html='firstParent[0].name'></span>
        </nuxt-link>
        <span v-else itemprop="name"  v-html='pagetitle'></span>
        <meta itemprop="position" content="2" />
      </li>
      <li v-if="firstParent" class="breadcrumbs-links" itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
        <nuxt-link v-if="secondParent" :to="$store.state.sityFolder + secondParent[0].url"  itemprop="item" >
          <span itemprop="name" v-html='secondParent[0].name'></span>
        </nuxt-link>
        <span v-else itemprop="name" v-html='pagetitle'></span>
        <meta itemprop="position" content="3" />
      </li>
      <li v-if="secondParent" class="breadcrumbs-links" itemprop="itemListElement" itemscope
        itemtype="http://schema.org/ListItem">
        <span itemprop="name" v-html='pagetitle'></span>
        <meta itemprop="position" content="4" />
      </li>
    </ol>
  </div>
</div>
</template>
<script>
export default {
  props: {
    pagetitle: String,
    firstParent: Array,
    secondParent: Array,
  },
}
</script>

<style scoped>
.breadcrumbs{
  background: #F9F9FA;
  padding-top: 12px;
  padding-bottom: 12px;
}
.breadcrumbs ol{
  display: inline-block;
}
.breadcrumbs ol li{
  margin-right: 20px;
  float: left;
}
.breadcrumbs ol li::after,
.breadcrumbs-links a,
.breadcrumbs-links span {
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  position: relative;
}

.breadcrumbs-links a span,
.breadcrumbs ol li::before{
  color:#FF3F3F;
}
.breadcrumbs-links span {
  color:#271717;
}
.breadcrumbs ol li:not(:last-child)::after{
  content: ">";
  position: relative;
  left: 10px;
}
</style>
