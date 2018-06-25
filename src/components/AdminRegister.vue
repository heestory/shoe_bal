<template>
	<div class="container">
	  <h2>발매 등록</h2>
	  <p>매장정보와 이벤트는 필수 입니다.</p>
	 <form class="needs-validation" novalidate="">
	 		<div class="row">
              <div class="col-md-4 mb-3">
                <label for="country">브랜드명{{brandName}}</label>
                <select class="custom-select d-block w-100" id="brandName" required="" v-model="brandName">
                  <option value="">선택하세요</option>
                  <option>Nike</option>
                  <option>Adidas(origin)</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">매장 전국</label>
                <select class="custom-select d-block w-100" id="shopCountry" required="" v-model="shopCountry">
                  <option value="">선택하세요</option>
                  <option>서울</option>
                  <option>경기</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
               <div class="col-md-4 mb-3">
                <label for="state">매장 시/도</label>
                <select class="custom-select d-block w-100" id="shopState" required="" v-model="shopState">
                  <option value="">선택하세요</option>
                  <option>노원점</option>
                  <option>중구점</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="firstName">발매 제목{{eventTile}}</label>
                <input type="text" class="form-control" v-model="eventTile" id="firstName" placeholder="" value="" required="">
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
            </div>
            <div class="form-group">
		      <label for="comment">발매 내용</label>
		      <textarea class="form-control" rows="5" id="comment" name="text" v-model="eventContent"></textarea>
		    </div>
		 

			 <div class="row">
		      <div class="col-md-6">
		      	<label for="comment">발매 시작일</label>
		        <date-picker  :config="config" v-model="startDate"></date-picker>
		      </div>
		      <div class="col-md-6">
		      	<label for="comment">발매 종료일</label>
		        <date-picker  :config="config" v-model="endDate"></date-picker>
		      </div>
		    </div>
		    <br/>

            <div class="mb-3">
              <label for="username">매장번호</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Tel</span>
                </div>
                <input type="text" class="form-control" id="username" placeholder="" required="">
                <div class="invalid-feedback" style="width: 100%;">
                  Your username is required.
                </div>
              </div>
            </div>
            

              <div class="form-group">
			    <label for="exampleFormControlFile1">발매 이미지</label>
			    <input type="file" class="form-control-file" id="exampleFormControlFile1">
			  </div>

       

         
            
            <hr class="mb-4">

            <h4 class="mb-3">상품상세정보</h4>

            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">상품명</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">상품가격</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">상품사이즈</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-cvv">기타</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            <hr class="mb-4">
            <button class="btn btn-primary btn-lg btn-block" type="submit">저장</button>
          </form>
	</div>
</template>
<script>
	import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css' 
    // Import this component
  	import datePicker from 'vue-bootstrap-datetimepicker';
  
  	//Import date picker css
  	import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';	

    export default {
        name: "admin-dash",
        data(){
        	return {
		        date: new Date(),
		        config: {
		          format: 'YYYY/MM/DD',
		          useCurrent: false,
		        },
		        eventTile:'',
		        brandName:'',
		        shopCountry:'',
		        shopState:'',
		        eventTile:'',
		        eventContent:'',
		        startDate:'',
		        endDate:''
		    }
		  },
		  components: {
		     datePicker
		  }
    }
</script>
<style scoped>
</style>