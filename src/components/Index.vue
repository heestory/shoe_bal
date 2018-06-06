<template>
  <div id="container">
    <header>
      <h2>logo</h2>
      <div class="title">
        <h1>Administer</h1>
      </div>
    </header>
    <nav></nav>
    <section>
      <article>
        ID: <input type="text" value="" placeholder="Enter your ID"/><br>
        PW: <input type="text" value="" placeholder="Enter your ID"/>

      </article>
    </section>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  header{position:fixed; width:15%; height: 100%; background:#fff; top:0px; left:0px;}
  nav{position:relative; width:85%; height:35px; background:#212121; margin-left:15%;}
  section{width:85%; position:relative; margin-left:15%;}
  article{width:60%; height:300px; position:absolute; top:20%; left:20%; background: white}


  /*1280px~1599px*/
  @media screen and (min-width:1280px) and (max-width:1599px) {
    header {position:relative; width:100%; height: 80px;}
    header h2 {
      width:350px; height:100px; background:url(../assets/images.png) no-repeat 0px 0px;
      background-size: contain; position:absolute; top:0%; left:10%; margin-left:-90px; text-indent:-999999px;
    }
    header div {
      position:absolute; top:0%; left:40%; width:350px; height:50px; font-size: 30px;
    }
    nav {width:100%; margin-left:0%;}
    section{width:50%; margin-left:25%; margin-top:5%; height:500px;background:url(../assets/shoess.jpg) 0px 0px;
      background-size: contain;}
  }

  /*1024px~1279px*/
  @media screen and (min-width:780px) and (max-width:1279px){
    header { position:relative; width:100%; height:80px;}
    nav{width:100%; margin-left:0;}
    section{width:100%; margin-left:0px;background:#ddd; height:500px;}
  }

  /*480px~639px*/
  @media screen and (min-width:480px) and (max-width:779px){
    header { position:relative; width:100%; height: 80px}
    nav {display:none;}
    section{width:100%; margin-left:0px; background: #ddd;height:500px;}
  }

  /*479px*/
  @media screen and (max-width:479px){
    header{position:fixed; width:100%; height:40px;}
    nav{display:none;}
    section {width:100%; margin-left:0px; background:blue;height:500px;}
  }
</style>
