import { Button, Input, Form, Carousel } from "antd"
import React from "react"
import Header from "./Elements/Header"
import { useForm, Controller } from "react-hook-form";
import { validadminlogin } from "../apiCalls";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const AdminLogin = () => {
    const { handleSubmit, control, reset } = useForm();
    const navigate = useNavigate()

    //form submit
    const onsubmit = async (data) => {

        const submitsuccess = (data) => {
            // sessionStorage.setItem("email", data.email)
            // sessionStorage.setItem("name", data.name)
            // sessionStorage.setItem("phoneno", data.phoneno)
            navigate('/addcamp')
        }

        const result = await validadminlogin({ email: data.email, password: data.password })
        console.log(result);
        result.message === 'OK' ? submitsuccess(result) : toast.error(result.message)
        reset({
            email: "",
            password: ""
        })
    }

    return (
        <React.Fragment>
            <Header active={"login"} />
            <main className="adminlogin">
                <section className="adminform formsection">
                    <Form layout="vertical" onFinish={handleSubmit(onsubmit)}>
                        {/* email */}
                        <Form.Item label="Email" required tooltip="Email is required" >
                            <Controller control={control}
                                name="email"
                                render={({ field }) =>
                                    <Input {...field} placeholder="Email" required />
                                } />
                        </Form.Item>
                        {/* password */}
                        <Form.Item label="Password" required tooltip="Password is required" >
                            <Controller control={control}
                                name="password"
                                render={({ field }) =>
                                    <Input.Password {...field} placeholder="password" autoComplete="on" required />
                                } />
                        </Form.Item>
                        <Button type="primary" style={{ background: '#FF2853' }} htmlType="submit">
                            Log in
                        </Button>
                    </Form>
                    <ToastContainer />


                </section>
                <section className="adminposter">
                    <Carousel autoplay effect="fade">
                        {/* need to add slideshow of post */}

                    </Carousel>
                </section>
            </main>
        </React.Fragment>
    )
}


export default AdminLogin