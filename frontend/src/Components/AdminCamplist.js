import React from "react"
import { admingetbootcamp } from "../apiCalls"
import Campdetails from "./Elements/campdetails"
import Header from "./Elements/Header"



const AdminCamplist = () => {
    const [camplist, setcamplist] = React.useState()


    React.useEffect(() => {
        admingetbootcamp().then((res) => {
            setcamplist(res.bootlist)
        })
    }, [])
    document.title = "Admin"
    console.log(camplist);
    return (
        <React.Fragment>
            <Header />
            <main>
                <section className={"camplist"}>
                    {
                        camplist?.map(ele => <Campdetails isregistered={false} data={ele} key={ele.bootcampid} />)

                    }

                </section>
            </main>
        </React.Fragment>
    )
}

export default AdminCamplist