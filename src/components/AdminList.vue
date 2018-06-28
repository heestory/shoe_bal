<template>
	<div class="container">

	  <h2>발매 리스트</h2>
	  <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              
              <th>컨텐츠번호</th>
              <th>발매명</th>
              <th>전화번호</th>
              <th>등록일</th>
              <th>브랜드이름</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="release in releases">
             
              <td>{{release.id}}</td>
              <td>{{release.name}}</td>
              <td>{{release.store.tel}}</td>
              <td>{{release.regDate}}</td>
              <td>{{release.store.brand.name}}</td>
              <td> 
	            <button class="btn btn-danger btn-sm" type="submit" v-on:click="contentDelete(release.id)">삭제</button>		
	             
              </td>

            </tr>
          </tbody>
        </table>
      </div>
      <div class="row">
      	 
         
      </div>

	</div>
	
</template>
<script>
	import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css' 

    export default {
        name: "admin-dash",
        mounted(){
        	this.getReleaseData()
        },
        methods:{
        	getReleaseData(){
        		this.axios.get('http://10.19.1.121:8083/shoes')
        			.then((response) => {this.releases = response.data})
        	},
        	contentDelete(id){
        		this.axios.delete('http://10.19.1.121:8083/shoes/'+id)
        			.then(response => {
        				if(response.status == '200'){
			              alert('삭제 되었습니다.');
			              this.getReleaseData();
			            }else{
			              alert('삭제 실패 되었습니다.');
			            }
        			})
        	}
        },
        data(){
        	return {
        		releases : ''
        	}
        }
    }
</script>
<style scoped>
</style>