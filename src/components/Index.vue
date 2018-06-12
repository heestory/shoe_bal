<template>
  <div id="container">
   
    <section>
      <figure class="vid">
        <video loop autoplay>
          <source src="../assets/nike.mp4" type="video/mp4"/>
        </video>

        <article>
          <div class="row title">
            <h2 class="col-lg-3">logo</h2>
            <h1 class="col-lg-9 display-3 text-white">Shoebal</h1>

            <form action="" class="col-lg-12" @submit.prevent="login">
              <div class="form-group">
                <label for="ID">ID:</label>
                <input type="text" required v-model="username" class="form-control" id="ID">
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" required v-model="password" class="form-control" id="pwd">
              </div>
              <div class="checkbox">
                <label><input type="checkbox">Remember me</label>
              </div>
              <!-- <button type="submit">Login</button> -->
              <router-link to="dash" type="submit" tag="button" class="btn btn-primary">Login</router-link>
            </form>
          </div>
        </article>

      </figure>
      
    </section>
  </div>
</template>

<script>

  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: ""

    }
</script>

<style scoped>
  section{width:85%; position:relative; margin-left:15%;}
  .vid{width:100%; height:100%; position:fixed; top:0px; left:0px; opacity: 0.9;}
  .vid video{width:100%; min-width:1600px;}
  article{width:30%; height:300px; position:absolute; top:10%; left:10%;}
  label{color:white}
  h2{width:300px; height:60px; background:url(../assets/shoes.png) no-repeat 0px 0px;
    background-size: contain; text-indent:-999999px;}


  /*1280px~1599px*/
 /* @media screen and (min-width:1280px) and (max-width:1599px) {
    header {position:relative; width:100%; height: 80px;}
    header h2 {
      width:350px; height:100px; background:url(../assets/images.png) no-repeat 0px 0px;
      background-size: contain; position:absolute; top:0%; left:10%; margin-left:-90px; text-indent:-999999px;
    }
    header div {
      position:absolute; top:0%; left:40%; width:350px; height:50px; font-size: 30px;
    }
    nav {width:100%; margin-left:0%;}
    section{width:50%; margin-left:25%; margin-top:5%; height:500px;
      background-size: contain;}
  }*/

  /*1024px~1279px*/
  /*@media screen and (min-width:780px) and (max-width:1279px){
    header { position:relative; width:100%; height:80px;}
    nav{width:100%; margin-left:0;}
    section{width:100%; margin-left:0px;background:#ddd; height:500px;}
  }
*/
  /*480px~639px*/
  /*@media screen and (min-width:480px) and (max-width:779px){
    header { position:relative; width:100%; height: 80px}
    nav {display:none;}
    section{width:100%; margin-left:0px; background: #ddd;height:500px;}
  }*/

  /*479px*/
 /* @media screen and (max-width:479px){
    header{position:fixed; width:100%; height:40px;}
    nav{display:none;}
    section {width:100%; margin-left:0px; background:blue;height:500px;}
  }*/
</style>
