import { Route, Routes } from "react-router-dom"
import AdminLogin from "./Components/AdminLogin"
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

        </Routes>
    )
}


export default MainComponents