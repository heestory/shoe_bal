<template>
	<div class="container">
	  <h2>Inline form</h2>
	  <p>Make the viewport larger than 576px wide to see that all of the form elements are inline and left-aligned. On small screens, the form groups will stack horizontally.</p>
	  <form class="form-inline" role="form">
	    <label for="email2" class="mb-2 mr-sm-2">Email:</label>
	    <input type="text" class="form-control mb-2 mr-sm-2" id="email2" placeholder="Enter email">
	    <label for="pwd2" class="mb-2 mr-sm-2">Password:</label>
	    <input type="text" class="form-control mb-2 mr-sm-2" id="pwd2" placeholder="Enter password">
	    <div class="form-check mb-2 mr-sm-2">
	      <label class="form-check-label">
	        <input class="form-check-input "type="checkbox"> Remember me
	      </label>
	    </div>    
	  <button type="button" class="btn btn-primary mb-2">Submit</button>
	  </form>
	</div>
</template>
<script>
	import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css' 

    export default {
        name: "admin-dash"
    }
</script>
<style scoped>
</style>