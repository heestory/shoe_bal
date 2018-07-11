<template>
	<div class="container">
	  <h2>발매 등록</h2>
	  <p class="text-danger">상점명은 필수 입니다.</p>
	 
	 		<div class="row">
              <div class="col-md-4">
                <label for="country">상점명</label>
                <select class="custom-select d-block w-100" id="storeName" required="" v-model="storeName">
                  <option value="">선택하세요</option>
                  <option v-for="store in stores" v-bind:value="store.id">{{store.name}}({{store.brand.name}})</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4">
                <label for="comment">발매일</label>
                <date-picker  :config="config" v-model="startDate"></date-picker>
              </div>
                <div class="col-md-4">
                <label for="firstName">가격</label>
                <input type="number" class="form-control" v-model="contentPrice"  placeholder="" value="" required="">
              </div>
              
             
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="firstName">발매 제목</label>
                <input type="text" class="form-control" v-model="contentTitle"  placeholder="" value="" required="">
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
            </div>
            <div class="form-group">
		      <label for="comment">발매 내용</label>
		      <textarea class="form-control" rows="5" id="comment" name="text" v-model="content"></textarea>
		    </div>
		 
        <button class="btn btn-primary btn-lg btn-block" type="submit" v-on:click="saveContentData">저장</button>
			 
		    <br/>

        
			    <h2>발매 이미지 등록</h2>
          <p class="text-danger">발매 번호선택은 필수 입니다.</p>
          <div class="row">
            <div class="col-md-12">
              <select class="custom-select d-block w-100" id="" required="" v-model="releaseName">
                <option value="">발매번호</option>
                <option v-for="release in releases" v-bind:value="release.id">{{release.name}}</option>
              </select>

            </div>
          </div>
			    <upLoadComponent v-bind:id="releaseName"/>
        <br/>			

            
   
	</div>
</template>
<script>
	import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css' 
    // Import this component
  	import datePicker from 'vue-bootstrap-datetimepicker';
    import upLoadComponent from './utils/UploadFiles.vue';
  
  	//Import date picker css
  	import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';	

    const BASE_URL = 'http://13.209.64.156:8083';

    export default {
        name: "admin-dash",
        mounted(){
          this.getStoreData();
          this.getReleaseData();
        },
        methods:{
         getStoreData(){
            this.axios.get(BASE_URL+'/stores')
            .then((response) => {
              this.stores = response.data
            })  
            .catch(e => {
              this.errors.push(e)
            })
          },
          saveContentData(){
            var url = BASE_URL+'/stores/'+this.storeName+'/shoes';
            this.axios.post(url, {
              contents : this.content,
              launchDate : this.startDate,
              name: this.contentTitle,
              price:this.contentPrice
            }).
            then((response) => {
              if(response.status == '200'){
              alert('저장 되었습니다.');
          
              }else{
                alert('저장 실패 되었습니다.');
              }  
            })

          },
          getReleaseData(){
            this.axios.get(BASE_URL+'/shoes')
              .then((response) => {this.releases = response.data})
          }
        },
        data(){
        	return {
		        date: new Date(),
		        config: {
		          format: 'YYYY-MM-DD',
		          useCurrent: false,
		        },
		        storeName:'',
		        startDate:'',
		        contentTitle:'',
            content:'',
            stores:'',
            contentPrice:'',
            releases:'',
            releaseName:''

		    }
		  },
		  components: {
		     datePicker,
         upLoadComponent
		  }
    }
</script>
<style scoped>
</style>