
import axios from 'axios'

const baseurl = `http://localhost:5000`


//store user first registration data
export const createuser = async ({name,password,email,state,city,phoneno}) =>{
        return axios.post(`${baseurl}/signin`,{name,password,email,state,city,phoneno}).then(res=>res.data)
}