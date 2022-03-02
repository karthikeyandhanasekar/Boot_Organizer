import { Route, Routes } from "react-router-dom"
import Addbootcamp from "./Components/Addbootcamp"
import AdminCamplist from "./Components/AdminCamplist"
import AdminLogin from "./Components/AdminLogin"
import AdminUserList from "./Components/AdminUserlists"
import ForgotPassword from "./Components/forgotpassword"
import Home from "./Components/Home"
import SigninPage from "./Components/SignInPage"
import Support from "./Components/Support"
import UserLogin from "./Components/UserLogin"

const MainComponents = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/support" element={<Support />} />


            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/addcamp" element={<Addbootcamp />} />
            <Route path="/camplists" element={<AdminCamplist />} />

            <Route path="/bootcamp/:id" element={<AdminUserList />} />


            <Route path="/forgotpassword" element={<ForgotPassword />} />


        </Routes>
    )
}


export default MainComponents