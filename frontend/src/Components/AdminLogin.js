import { Button, Input, Form, Carousel } from "antd"
import React from "react"
import Header from "./Elements/Header"
import { useForm, Controller } from "react-hook-form";


const AdminLogin = () => {
    const { handleSubmit, control, reset } = useForm();



    //form submit
    const onsubmit = (data) => {
        console.log(data);
        reset({
            email: "",
            password: ""
        })
    }

    return (
        <React.Fragment>
            <Header active={"login"} />
            <main className="adminlogin">
                <section className="adminform">
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

                </section>
                <section className="adminposter">
                    <Carousel autoplay effect="fade">

                    </Carousel>
                </section>
            </main>
        </React.Fragment>
    )
}


export default AdminLogin