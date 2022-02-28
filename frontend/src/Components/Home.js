import React from "react"
import { getbootcamp } from "../apiCalls"
import Campdetails from "./Elements/campdetails"
import Header from "./Elements/Header"



const Home = () => {

    const [camplist, setcamplist] = React.useState()

    React.useEffect(() => {
        getbootcamp().then((res) => {
            setcamplist(res.value);
        })
    }, [])
    console.log(camplist);
    return (
        <React.Fragment>
            <Header active="home" />
            <main>
                <section className="camplist">
                    {
                        camplist ?
                            camplist.map(ele => <Campdetails data={ele} key={ele._id} />)
                            : null
                    }
                </section>
            </main>
        </React.Fragment>
    )
}

export default Home