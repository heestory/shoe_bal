<template>
  <div id="container">
    <header class="container-fluid center">
      <div class="row title">
        <h2 class="col-lg-2">logo</h2>
        <h1 class="col-lg-8">Shoebal</h1>
      </div>
    </header>
    <nav></nav>
    <section>
      <figure class="vid">
        <video loop autoplay>
          <source src="../assets/nike.mp4" type="video/mp4"/>
        </video>
      </figure>
      <article>
        <form action="">
          <div class="form-group">
            <label for="ID">ID:</label>
            <input type="text" class="form-control" id="ID">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd">
          </div>
          <div class="checkbox">
            <label><input type="checkbox"> Remember me</label>
          </div>
          <button router-link to="dash" type="submit" class="btn btn-primary">Submit</button>
        </form>

      </article>
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
  header{position:fixed; width:15%; height: 100%; background:#fff; top:10px; left:0px;}
  nav{position:relative; width:85%; height:35px; background:#212121; margin-left:15%;}
  section{width:85%; position:relative; margin-left:15%;}
  .vid{width:100%; height:100%; position:fixed; top:80px; left:0px; opacity: 0.9;}
  .vid video{width:100%; min-width:1600px;}
  article{width:60%; height:300px; position:absolute; top:20%; left:20%;}
  label{color:white}


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
    section{width:50%; margin-left:25%; margin-top:5%; height:500px;
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
