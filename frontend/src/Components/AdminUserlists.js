import { Button, Table } from "antd";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import React from "react";
import { useParams } from "react-router"
import { retirvespecificbootcamp, updateuserlist, verifytranscationdetails } from "../apiCalls";
import Header from "./Elements/Header";

import { ToastContainer, toast } from 'react-toastify';


const AdminUserList = () => {
    const [bootcampdata, setbootcampdata] = React.useState()
    const params = useParams()
    const id = params.id

    React.useEffect(() => {
        retirvespecificbootcamp({ id: id }).then((res) => {
            setbootcampdata(res.bootlist)
        })

    }, [id])

    const verifytranscation = async (data) => {
        console.log(data.row);
        try {
            const success = () => {
                // const filterdata = bootcampdata.userlists.filter(ele => ele.email !== data.row.name)
                // console.log(filterdata);
                // setbootcampdata(filterdata)
                toast.success("Verified")
            }
            const result = await verifytranscationdetails({ email: data.row.email, bname: bootcampdata.name, name: data.row.name })
            result.message === "OK" ? success() : toast.error("Error Received")
        } catch (error) {
            console.error(error.message);
        }
    }

    document.title = bootcampdata?.name
    console.log(bootcampdata?.userlists);
    /**email: "dkkarthik2000@gmail.com"
name: "KARTHIKEYAN D"
phoneno: "919123565978"
price: 20
status: "pending"
transcationid: "1234657890" */
    return (
        <React.Fragment>
            <Header active={"home"} />
            <main>
                <section className="bootcampdata">
                    <div className="bootcampdetails">
                        <h1>{bootcampdata?.name}</h1>

                        <h3>{bootcampdata?.orgdate}</h3>
                        <h3>{bootcampdata?.starttime + "-" + bootcampdata?.endtime}</h3>
                        <p>{`Only ${bootcampdata?.userlimit - bootcampdata?.userlists.length} are remaining`}</p>

                    </div>
                    <div className="usertablelist">
                        <Table dataSource={bootcampdata?.userlists}>
                            <ColumnGroup>
                                <Column title="Name" dataIndex="name" key="name" responsive={['sm']} />
                                <Column title="Phone Number" dataIndex="phoneno" key="phoneno" responsive={['sm']} />
                                <Column title="Transcation ID" dataIndex="transcationid" key="transctionid" />
                                {/* <Column title="Status" dataIndex="status" key="status" responsive={["sm"]} /> */}
                                <Column title="Verify" dataIndex="email" key="verify" render={
                                    (text, row) => <Button type="primary" onClick={() => verifytranscation({
                                        row
                                    })}   >Verify</Button>
                                } />


                            </ColumnGroup>
                        </Table>
                    </div>
                </section>
                <ToastContainer />
            </main>
        </React.Fragment>
    )
}

export default AdminUserList