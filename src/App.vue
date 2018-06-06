<template>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*reset*/
  * {margin:0; padding:0}
  ol,ul {list-style:none;}
  a{outline:0; text-decoration: none; color:#555;}
  img{border:0;}
  body{font:12px/1.6 'Poiret One';color:#555}
</style>
