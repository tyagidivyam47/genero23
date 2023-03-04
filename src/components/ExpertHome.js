import React, { useEffect, useState } from 'react'
import CustomButton from '../items/CustomButton'
import './dash.css'
const ServiceCard = (props) => {
    return (
        <div style={{
            border: `1px solid ${(props.obj.status == "Resolved") ? "lightgreen" : "yellow"}`
        }} className='rounded py-2 my-3 row align-items-center px-3 mx-auto col-12'>
            <div className='col-8 my-auto'>

                <p className='my-2'><i className='fa fa-tasks mx-2'></i>{props.obj.taskType}</p>
                <p style={{ fontSize: '10px', opacity: 0.6 }} className="my-1"><i className='fa fa-calendar mx-2'></i>{props.obj.date}</p>
                <p style={{ fontSize: '10px', opacity: 0.6 }} className="my-1"><i className='fa fa-person mx-2'></i>{props.obj.customerName}</p>
               {(props.obj.status!="Resolved")?<p style={{ fontSize: '10px', opacity: 0.6 }} className="my-1"><i className='fa fa-clock mx-2'></i>{props.obj.timeLeft + " left"}</p>:null}
            </div>
            {(props.obj.status != "Resolved") ? <div className="col-4 d-flex">
                <CustomButton text="Start" />
                <CustomButton text="Reject" />
            </div> : <div className="col-4 d-flex">
                <p style={{ fontSize: '10px', opacity: 0.6 }} className="my-1">{"Resolved on "+ props.obj.resolveDate}</p>

            </div>}
        </div>
    )
}
export default function ExpertHome() {

    const [showTab, setTab] = useState(0)

    const res = [{
        taskType: "Review Sales",
        customerName: "Seeta Verma",
        date: '21/1/23',
        time: '2 Hours',
        resolveDate: '24/1/23',
        timeLeft: '1D 16H',
        status: "Resolved",

    },
    {
        taskType: "Review Purchase",
        customerName: "Shivam Verma",
        date: '21/1/23',
        time: '2 Hours',
        resolveDate: '24/1/23',
        timeLeft: '1D 16H',
        status: "Pending"
    },
    {
        taskType: "Compute Tax",
        customerName: "Sahil Verma",
        date: '21/1/23',
        time: '2 Hours',
        resolveDate: '24/1/23',
        timeLeft: '1D 16H',
        status: "Queued"
    },
    {
        taskType: "Add Tax to Book",
        customerName: "Krishan Singh",
        date: '21/1/23',
        time: '2 Hours',
        resolveDate: '24/1/23',
        timeLeft: '1D 16H',
        status: "Resolved"
    },]
    const [arr, setArr] = useState([
        {
            taskType: "Review Sales",
            customerName: "Seeta Verma",
            status: "Resolved"
        },
        {
            taskType: "Review Purchase",
            customerName: "Shivam Verma",
            status: "Pending"
        },
        {
            taskType: "Compute Tax",
            customerName: "Sahil Verma",
            status: "Queued"
        },
        {
            taskType: "Add Tax to Book",
            customerName: "Krishan Singh",
            status: "Resolved"
        },
    ])

    useEffect(k => {
        var k = res.filter(e => e.status == "Pending")
        setArr(k)
    }, [])
    return (
        <div className='col-sm-11 col-lg-6 mx-auto'>
            <div className="py-3 my-2 d-flex flex-row justify-content-between" style={{ opacity: 0.6, borderBottom: '1px solid white' }}>
                <p className='my-0 py-0'><i className='fa fa-user mx-2 my-0'></i>Akshit Singh</p>
                <p className='my-0 py-0'><i className='fa fa-settings mx-2 my-0'></i>Account Expert</p>

            </div>
            <div className='row my-3 mx-auto'>
                <button className={`btn ${(showTab == 0) ? 'btn-primary' : 'btn-dark'} mx-1 col-2 my-0`} onClick={() => {
                    var k = res.filter(e => e.status == "Pending")
                    setArr(k)
                    setTab(0)
                }}>Pending</button>
                <button className={`btn ${(showTab == 1) ? 'btn-primary' : 'btn-dark'} mx-1 col-2 my-0`} onClick={() => {
                    var k = res.filter(e => e.status == "Queued")
                    setArr(k)
                    setTab(1)
                }}>Queued</button>
                <button className={`btn ${(showTab == 2) ? 'btn-primary' : 'btn-dark'} mx-1 col-2 my-0`} onClick={() => {
                    var k = res.filter(e => e.status == "Resolved")
                    setArr(k)
                    setTab(2)
                }}>Resolved</button>
            </div>
            <div className='w-100 mx-auto abcd' style={{ overflowY: 'scroll' }}>
                {

                    arr.map(e => {
                        return <ServiceCard obj={e} />
                    })
                }
            </div>

        </div>
    )
}

