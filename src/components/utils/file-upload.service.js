import * as axios from 'axios';


const BASE_URL = 'http://13.209.64.156:8083';

function upload(formData, id) {

	var tempArry = [];




    const url = `${BASE_URL}/shoes/`+id+`/images`;
   
    return axios.post(url, formData,{
    	headers:{
    		'Content-Type' : 'multipart/form-data'
    	}
    })
        // get data
        .then((x) => {
        	debugger
        	x.data})
        // add url field
        .then(x => x.map(img => Object.assign({},
            img, { url: `${BASE_URL}/shoes`+id+`/images/` })));
}

export { upload }