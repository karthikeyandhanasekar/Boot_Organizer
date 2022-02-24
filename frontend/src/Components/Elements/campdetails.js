import { Button } from "antd"
import { useNavigate } from "react-router-dom"



const Campdetails = ({ data }) => {

    const navigate = useNavigate()

    const currentuser = sessionStorage.getItem("email")


    return (
        <div key={data._id} className="campcard">
            <div>
                <h4>{data.name}</h4>
                <h6>{`by ${data.company}`}</h6>
            </div>
            <div>
                <p>{`Date : ${data.orgdate}`}</p>
                <p>{`Start : ${data.starttime} && End : ${data.endtime}`}</p>

                <p>{`Status : ${data.status}`}</p>
                <p>{`Only ${data.userlimit} are remaining`}</p>
                <p className="price">{`INR ${data.price}`}</p>
                {
                    currentuser ?
                        <Button type="primary" style={{ background: "#008000", color: "#ffffff" }}>Pay</Button>
                        :
                        <Button type="secondary" style={{ background: "#ffffff" }} onClick={() => navigate("/userlogin")}    >Login</Button>


                }

            </div>
        </div>
    )
}

export default Campdetails

/**
 * company: "AWS"
createdAt: "2022-02-24T06:16:00.619Z"
endtime: "17:03"
name: "AWS Beginner"
organizer: "Prakash"
organizer2: "Karthik"
orgdate: "2022-02-26"
phone1: 1324567890
phone2: 1234567890
price: 2000
starttime: "11:46"
status: "open"
userlimit: 100
userlists: []
__v: 0
_id: "621722f99ff832cecb1265d2"
 */