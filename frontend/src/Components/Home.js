import { Divider } from "antd"
import React from "react"
import { getbootcamp } from "../apiCalls"
import Campdetails from "./Elements/campdetails"
import Header from "./Elements/Header"



const Home = () => {

    const [login, setlogin] = React.useState(!!sessionStorage.getItem("email"))
    const [camplist, setcamplist] = React.useState()
    const [registeredcamp, setregisteredcamp] = React.useState()
    const [nonregisteredcamp, setnonregisteredcamp] = React.useState()


    React.useEffect(() => {
        getbootcamp().then((res) => {
            if (login) {

                const registedbootcampid = new Set([...res.registeredbootcamp[0].userlists.map(ele => ele.bootcampid)])

                //filter non-register camp
                console.log(typeof res.bootlist);
                setnonregisteredcamp(res.bootlist.map(ele => {
                    if (!registedbootcampid.has(ele._id))
                        return ele
                }).filter(Boolean))



                //filter registercamp
                setregisteredcamp(res.bootlist.map(ele => {
                    if (registedbootcampid.has(ele._id))
                        return ele
                }).filter(Boolean))
            }
            else
                setcamplist(res.bootlist)

        })
    }, [login])

    const dividerstyle = { color: "#800000", fontSize: "2em" }


    return (
        <React.Fragment>
            <Header active="home" />
            <main>
                <section className={login ? null : "camplist"}>
                    {
                        login ?
                            <React.Fragment>
                                <Divider orientation="left" style={dividerstyle} >Registered</Divider>
                                <br />
                                <div className="camplist">
                                    {
                                        registeredcamp ?
                                            registeredcamp.map(ele => <Campdetails isregistered={true} data={ele} key={ele.bootcampid} />)
                                            :
                                            null


                                    }</div>
                                <br />
                                <Divider orientation="left" style={dividerstyle} >Not Registered</Divider>
                                <br />
                                <div className="camplist">
                                    {
                                        nonregisteredcamp ?
                                            nonregisteredcamp.map(ele => <Campdetails isregistered={false} data={ele} key={ele.bootcampid} />)
                                            :
                                            null


                                    }</div>
                                <br />
                            </React.Fragment>
                            :
                            camplist?.map(ele => <Campdetails isregistered={false} data={ele} key={ele.bootcampid} />)

                    }

                </section>
            </main>
        </React.Fragment>
    )
}

export default Home