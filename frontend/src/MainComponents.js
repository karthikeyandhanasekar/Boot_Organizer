import { Route, Routes } from "react-router-dom"
import Addbootcamp from "./Components/Addbootcamp"
import AdminLogin from "./Components/AdminLogin"
import ForgotPassword from "./Components/forgotpassword"
import Home from "./Components/Home"
import SigninPage from "./Components/SignInPage"
import UserLogin from "./Components/UserLogin"

const MainComponents = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/signin" element={<SigninPage />} />

            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/addcamp" element={<Addbootcamp />} />

            <Route path="/forgotpassword" element={<ForgotPassword />} />


        </Routes>
    )
}


export default MainComponents