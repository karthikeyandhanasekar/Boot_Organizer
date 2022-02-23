
import axios from 'axios'

const baseurl = `http://localhost:5000`


//store user first registration data
export const createuser = async ({ name, password, email, state, city, phoneno }) => {
    return axios.post(`${baseurl}/signin`, { name, password, email, state, city, phoneno }).then(res => res.data)
}


//user login process
export const validuserlogin = async ({ email, password }) => {
    return axios.post(`${baseurl}/userlogin`, { email, password }).then(res => res.data)
}

//admin login process
export const validadminlogin = async ({ email, password }) => {
    return axios.post(`${baseurl}/adminlogin`, { email, password }).then(res => res.data)
}