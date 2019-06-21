import axios from "axios";

const ApiService= {
    
    getAllAssets(){
        axios.get("/api/asset/")
        .then((response) => {
           return response.data;
        });
    },
}

export default ApiService;
