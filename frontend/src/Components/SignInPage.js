
import { Button, Input, Form, Carousel, InputNumber } from "antd"
import React from "react"
import Header from "./Elements/Header"
import { useForm, Controller } from "react-hook-form";
import { createuser } from "../apiCalls";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
    const navigate = useNavigate()

    const { handleSubmit, control, reset } = useForm();

    //form submit
    const onsubmit = async (data) => {
        try {
            console.log(data);
            if (data.password.length >= 8 && data.password.length <= 12) {
                const res = await createuser({
                    name: data.name,
                    password: data.password,
                    email: data.email,
                    phoneno: data.phoneno,
                    city: data.city,
                    state: data.state,
                })
                res === "OK" ? navigate('/userlogin') : toast.error(res)

                reset({
                    city: "",
                    email: "",
                    name: "",
                    password: "",
                    phoneno: "",
                    state: "",
                })
            }
            else
                toast.error("Password length should be between 8 and 12 characters")
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <React.Fragment>
            <Header active={"signin"} />
            <main className="signmain">
                <section >
                    <h1>Hey Trainee!</h1>
                    <Form layout="vertical" className="createform" onFinish={handleSubmit(onsubmit)}>
                        {/* Name */}
                        <Form.Item label="Name" className="formitem" required tooltip="Name is required" >
                            <Controller control={control}
                                name="name"
                                render={({ field }) =>
                                    <Input {...field} placeholder="Name" required />
                                } />
                        </Form.Item>
                        {/* Phone */}
                        <Form.Item label="Phone" className="formitem" required tooltip="Phone is required" >
                            <Controller control={control}
                                name="phoneno"
                                render={({ field }) =>
                                    <InputNumber addonBefore="+91" {...field} placeholder="Phone" required />
                                } />
                        </Form.Item>
                        {/* City */}
                        <Form.Item label="City" className="formitem" required tooltip="City is required" >
                            <Controller control={control}
                                name="city"
                                render={({ field }) =>
                                    <Input {...field} placeholder="City" required />
                                } />
                        </Form.Item>

                        {/* City */}
                        <Form.Item label="State" className="formitem" required tooltip="State is required" >
                            <Controller control={control}
                                name="state"
                                render={({ field }) =>
                                    <Input {...field} placeholder="State" required />
                                } />
                        </Form.Item>

                        {/* Email */}
                        <Form.Item label="Email" className="formitem" required tooltip="Email is required" >
                            <Controller control={control}
                                name="email"
                                render={({ field }) =>
                                    <Input {...field} placeholder="Email" required />
                                } />
                        </Form.Item>

                        {/* Password */}
                        <Form.Item label="Password" className="formitem" required tooltip="Password is required" >
                            <Controller control={control}
                                name="password"
                                render={({ field }) =>
                                    <Input.Password {...field} placeholder="Password" required />
                                } />
                        </Form.Item>
                        <Button type="primary" style={{ background: '#FF2853' }} htmlType="submit">
                            Log in
                        </Button>
                        <Button type="text" htmlType="reset">
                            Clear
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



export default SigninPage