<template>
	<div class="container">
	  <h2>브랜드 & 상점 등록</h2>

          <hr class="mb-4">

          <h4 class="mb-3">브랜드 등록</h4>

          <div class="row">
            <div class="col-md-6 mb-3">
              
              <input type="text" class="form-control" id="cc-name" placeholder="브랜드명을 입력하세요" required="" v-model="brandName">
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div class="col-md-6 mb-3">
               <button class="btn btn-primary btn-sm" type="submit" v-on:click="saveBrandData">저장</button>
               <button class="btn btn-danger btn-sm" type="submit">삭제</button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th>번호</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="brand in brands">
                 <td>
                  <div class="checkbox checkbox-success">
                    <input type="checkbox" id="checkbox1" class="styled"><label></label>
                  </div>
                </td>
                  <td>{{brand.id}}</td>
                  <td>{{brand.name}}</td>
                </tr>
              </tbody>
            </table>
          </div>


           <hr class="mb-4">

            <h4 class="mb-3">상점 등록</h4>

            <div class="row">
              <div class="col-md-3">
                <select class="custom-select" v-model="brandSelect" :required="true">
                  <option value="">브랜드</option>
                  <option v-for="brand in brands" v-bind:value="brand.id">{{brand.name}}</option>
                </select>
              </div>

              <div class="col-md-3">
                
                <input type="text" class="form-control" v-model="storeName" placeholder="상점을 입력하세요" required="">
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-3">
                
                <input type="number" class="form-control" v-model="longitude" placeholder="경도" value = "0"required="">
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-3">
                
                <input type="number" class="form-control" v-model="latitude" placeholder="위도" value = "0" required="">
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              
              
            </div>

            <br/>

            <div class="row container">
               <div class="mb-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Tel</span>
                  </div>
                  <input type="text" class="form-control" placeholder="" required="" v-model="tel">
                </div>
              </div>
              <div class="col-md-3 text-right">
                 <button class="btn btn-primary btn-sm" type="submit" v-on:click="saveStoreData">저장</button>
                 <button class="btn btn-danger btn-sm" type="submit">삭제</button>
              </div>
            </div>
            <br/>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>상점아이디</th>
                    <th>상점이름</th>
                    <th>상점번호</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="store in stores">
                   <td><div class="checkbox checkbox-success"><input type="checkbox" id="checkbox1" class="styled"><label></label></div></td>
                    <td>{{store.id}}</td>
                    <td>{{store.name}}</td>
                    <td>{{store.tel}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
         
	</div>
</template>
<script>
	import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css' 

  export default {
      name: "admin-brand",
      mounted() {
        this.getBrandData();
        this.getStoreData();
      },
      methods:{
        getBrandData(){
          this.axios.get('http://10.19.1.121:8083/brands')
          .then((response) => {
            this.brands = response.data
          })  
          .catch(e => {
            this.errors.push(e)
          })
        },
        getStoreData(){
          this.axios.get('http://10.19.1.121:8083/stores')
          .then((response) => {
            this.stores = response.data
          })  
          .catch(e => {
            this.errors.push(e)
          })
        },
        saveBrandData(){
          this.axios.post('http://10.19.1.121:8083/brands',{
            name : this.brandName
          })
          .then((response) => {
            if(response.status == '200'){
              alert('저장 되었습니다.');
              this.getBrandData();
            }else{
              alert('저장 실패 되었습니다.');
            }
          })
          .catch(e => {
            this.errors.push(e)
          })
        },
        saveStoreData(){
          this.axios.post('http://10.19.1.121:8083/brands/'+this.brandSelect+'/stores',{
              latitude: this.latitude,
              longitude: this.longitude,
              name :this.storeName,
              tel: this.tel
          })
          .then((response) => {
            if(response.status == '200'){
              alert('저장 되었습니다.');
              this.getStoreData();
            }else{
              alert('저장 실패 되었습니다.');
            }
          })
          .catch(e => {
            this.errors.push(e)
          })
        }

      },
      data(){
      	return {
	        brands : '',
          stores : '',
          brandName: '',
          errors:[],
          brandSelect:'',
          latitude : '',
          longitude:'',
          storeName:'',
          tel:''
	    } 
	  }
	 
  }
</script>
<style scoped>
</style>