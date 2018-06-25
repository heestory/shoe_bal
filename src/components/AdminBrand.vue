<template>
	<div class="container">
	  <h2>브랜드 & 상점 등록</h2>

          <hr class="mb-4">

          <h4 class="mb-3">브랜드 등록</h4>

          <div class="row">
            <div class="col-md-6 mb-3">
              
              <input type="text" class="form-control" id="cc-name" placeholder="브랜드명을 입력하세요" required="">
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div class="col-md-6 mb-3">
               <button class="btn btn-primary btn-sm" type="submit">저장</button>
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
                <tr>
                 <td><div class="checkbox checkbox-success"><input type="checkbox" id="checkbox1" class="styled"><label></label></div></td>
                  <td>1</td>
                  <td>브랜드명</td>
                </tr>
              </tbody>
            </table>
          </div>


           <hr class="mb-4">

            <h4 class="mb-3">상점 등록</h4>

            <div class="row">
              <div class="col-md-4">
                <select class="custom-select d-block w-100" id="shopCountry" required="" v-model="shopCountry">
                  <option value="">선택하세요</option>
                  <option>서울</option>
                  <option>경기</option>
                </select>
              </div>

              <div class="col-md-4">
                
                <input type="text" class="form-control" id="cc-name" placeholder="브랜드명을 입력하세요" required="">
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-4">
                 <button class="btn btn-primary btn-sm" type="submit">저장</button>
                 <button class="btn btn-danger btn-sm" type="submit">삭제</button>
              </div>
            </div>
            <br/>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>번호</th>
                    <th>브랜드명</th>
                    <th>지점</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   <td><div class="checkbox checkbox-success"><input type="checkbox" id="checkbox1" class="styled"><label></label></div></td>
                    <td>1</td>
                    <td>Nike</td>
                    <td>강동점</td>
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
      data(){
      	return {
	        
	    }
	  }
	 
  }
</script>
<style scoped>
</style>