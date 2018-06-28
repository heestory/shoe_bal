<template>
	<div class="container">
		<form enctype="multiplart/form-data" novalidate v-if="isInitial || isSaving">
			
			<div class="dropbox">
				<input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file">
				 <p v-if="isInitial">
	              업로드할 이미지를 드래그 하세요.
	            </p>
	            <p v-if="isSaving">
	              파일 {{ fileCount }} 업로드중...
	            </p>
			</div>
		</form>

		 <!--SUCCESS-->
		  <div v-if="isSuccess">
		    <h2> {{ uploadedFiles.length }} 파일 업로드 성공.</h2>
		    <p>
		      <a href="javascript:void(0)" @click="reset()">업로드 다시하기</a>
		    </p>
		    <ul class="list-unstyled">
		      <li v-for="item in uploadedFiles">
		        <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">
		      </li>
		    </ul>
		  </div>
		  <!--FAILED-->
		  <div v-if="isFailed">
		    <h2>업로드 실패.</h2>
		    <p>
		      <a href="javascript:void(0)" @click="reset()"> 업로드 다시하기</a>
		    </p>
		    <pre>{{ uploadError }}</pre>
		  </div>
		</div>
	</div>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css' 
  import {upload} from './file-upload.service'

  const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

  export default{
  	name:"upload",
  	data(){
  		return{
  			uploadedFileds: [],
  			uploadError: null,
  			currentStatus:null,
  			uploadFieldName: 'photos'
  		}
  	},
  	computed:{
  		isInitial(){
  			return this.currentStatus == STATUS_INITIAL;
  		},
  		isSaving(){
  			return this.currentStatus == STATUS_SAVING;
  		},
  		isSuccess(){
  			return this.currentStatus == STATUS_SUCCESS;
  		},
  		isFailed(){
  			return this.currentStatus == STATUS_FAILED;
  		}
  	},
  	methods:{
  		reset(){
  			this.currentStatus = STATUS_INITIAL;
  			this.uploadFileds = [];
  			this.uploadError = null;
  		},
  		save(formData){

  			this.currentStatus = STATUS_SAVING;

  			upload(formData)
	          .then(x => {
	            this.uploadedFiles = [].concat(x);
	            this.currentStatus = STATUS_SUCCESS;
	          })
	          .catch(err => {
	            this.uploadError = err.response;
	            this.currentStatus = STATUS_FAILED;
	          });


  		},
  		filesChange(fieldName, fileList){

  			const formData = new FormData();

  			if(!fileList.length) return;

  			Array
  				.from(Array(fileList.length).keys())
  				.map(x => {
  					formData.append(fieldName, fileList[x], fileList[x].name);
  				});
  		}
  	},
  	mounted(){
  		this.reset();
  	}
  }
</script>
<style scroped>
	 .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>