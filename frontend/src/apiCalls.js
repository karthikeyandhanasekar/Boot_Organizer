
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

//forget password
export const forgotpassword = async ({ email, password }) => {
    return axios.put(`${baseurl}/forgotpassword`, { email, password }).then(res => res.data)
}

//create bootcamp
export const createbootcamp = async ({ name, price, company, organizer, organizer2, phone1, phone2, userlimit, orgdate, starttime, endtime }) => {
    return axios.post(`${baseurl}/addcamp`, { name, price, company, organizer, organizer2, phone1, phone2, userlimit, orgdate, starttime, endtime }).then(res => res.data)
}

//get bootcamp
export const getbootcamp = async () => {
    return axios.get(`${baseurl}/`).then(res => res.data)
}

//get bootcamp
export const updateuserlist = async ({ id, userdata, status, bootcampdata }) => {
    return axios.put(`${baseurl}/`, { id, userdata, status, bootcampdata }).then(res => res.data)
}