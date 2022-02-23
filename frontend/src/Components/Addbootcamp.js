
import React from 'react'
import { Button, Input, Form, DatePicker, TimePicker } from "antd"
import { useForm, Controller } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Header from './Elements/Header';
import ButtonGroup from 'antd/lib/button/button-group';

const Addbootcamp = () => {
    const { handleSubmit, control, reset } = useForm();
    const navigate = useNavigate()
    const [orgdate, setdate] = React.useState()
    const [starttime, setstartime] = React.useState()
    const [endtime, setendtime] = React.useState()

    //dateformat
    const format = 'HH:mm';

    const onsubmit = (data) => {
        console.log(data);
        console.log(orgdate);
        console.log(starttime);
        console.log(endtime);
        reset({
            name: "",
            company: "",
            organizer: "",
            organizer2: "",
            phone1: "",
            phone2: ""
        })
    }

    return (
        <React.Fragment>
            <Header />
            <main>

                <section className='addcamp formsection'>
                    <Form layout='vertical' className='addcampform' onFinish={handleSubmit(onsubmit)}>
                        {/* name */}
                        <Form.Item label="Name" required tooltip="Name is required" >
                            <Controller control={control}
                                name="name"
                                render={({ field }) =>
                                    <Input className="addcampfield" {...field} placeholder="Name" required />
                                } />
                        </Form.Item>
                        {/* Company */}
                        <Form.Item label="Company" required tooltip="Company is required" >
                            <Controller control={control}
                                name="company"
                                render={({ field }) =>
                                    <Input className="addcampfield" {...field} placeholder="company" required />
                                } />
                        </Form.Item>
                        {/* organizer */}
                        <Form.Item label="Organizer" required tooltip="Organizer is required" >
                            <Controller control={control}
                                name="organizer"
                                render={({ field }) =>
                                    <Input className="addcampfield" {...field} placeholder="Organizer" required />
                                } />
                        </Form.Item>

                        {/* organizer number */}
                        <Form.Item label="Number 1" required tooltip="Number1 is required" >
                            <Controller control={control}
                                name="phone1"
                                render={({ field }) =>
                                    <Input className="addcampfield" minLength={10} maxLength={10} {...field} required />
                                } />
                        </Form.Item>

                        <Form.Item label="Organizer2" required tooltip="Organizer2 is required" >
                            <Controller control={control}
                                name="organizer2"
                                render={({ field }) =>
                                    <Input className="addcampfield" {...field} placeholder="Organizer" required />
                                } />
                        </Form.Item>

                        {/* organizer number2 */}
                        <Form.Item label="Number 2" required tooltip="Number is required" >
                            <Controller control={control}
                                name="phone2"
                                render={({ field }) =>
                                    <Input className="addcampfield" minLength={10} maxLength={10} {...field} required />
                                } />
                        </Form.Item>

                        {/* Date */}
                        <Form.Item label="Date" required tooltip="Organizer is required" >

                            <DatePicker onChange={(date, dateString) => setdate(dateString)} required />
                        </Form.Item>
                        {/* Start time */}
                        <Form.Item label="Start" required tooltip="Time is required" >

                            <TimePicker onChange={(time, timeString) => setstartime(timeString)} format={format} required />

                        </Form.Item>
                        {/* End time */}
                        <Form.Item label="End" required tooltip="Time is required" >
                            <Controller control={control}
                                name="endtime"
                                render={({ field }) =>
                                    <TimePicker onChange={(time, timeString) => setendtime(timeString)} format={format} required />
                                } />
                        </Form.Item>

                        <ButtonGroup>
                            <Button type="primary" style={{ background: '#FF2853' }} htmlType="submit">
                                Create
                            </Button>
                            <Button type="text" htmlType="reset">
                                Reset
                            </Button>
                        </ButtonGroup>
                    </Form>
                </section>
            </main>

        </React.Fragment>
    )
}


export default Addbootcamp