import React, { useState } from 'react'
import CustomButton from '../items/CustomButton'
import './dash.css'
const ServiceCard = (props) => {
    return (
        <div className='rounded row align-items-center border py-2 my-3 px-3 mx-auto col-12'>
            <div className='col-8 my-auto'>

            <p className='my-2'><i className='fa fa-tasks mx-2'></i>{props.obj.taskType}</p>
            <p style={{fontSize:'10px', opacity:0.6}} className="my-1"><i className='fa fa-calendar mx-2'></i>{props.obj.date}</p>
            <p style={{fontSize:'10px', opacity:0.6}} className="my-1"><i className='fa fa-person mx-2'></i>{(props.obj.assigned=="")?"None":props.obj.assigned}</p>
            </div>
            <p className='col-4  my-auto' style={{opacity:0.4}}>{props.obj.status}</p>
        </div>
    )
}
function CustomerHome() {

    const [showTab, setTab] = useState(0)
    const [arr, setArr] = useState([
        {
            taskType: "Review Sales",
            assigned:"",
            date:"3/4/2023",
            status: "Kandivali"
        },
        {
            taskType: "Review Purchase",
            assigned:"",
            date:"3/4/2023",
            status: "Kandivali West"
        },
        {
            taskType: "Compute Tax",
            assigned:"",
            date:"3/4/2023",
            status: "Kandivali North"
        },
        {
            taskType: "Add Tax to Book",
            assigned:"",
            date:"3/4/2023",
            status: "Kandivali"
        },
        {
            taskType: "Review Purchase",
            assigned:"",
            date:"3/4/2023",
            status: "Kandivali West"
        },
        {
            taskType: "Compute Tax",
            assigned:"",
            date:"3/4/2023",
            status: "Kandivali North"
        },
        {
            taskType: "Add Tax to Book",
            assigned:"",
            date:"3/4/2023",
            status: "Kandivali"
        },

    ])
    return (
        <div style={{height:'82vh', marginTop:105}} className=' col-sm-11 col-lg-5 mx-auto'>
            <div className='d-flex  mx-auto'>
                <CustomButton text="Add New Request" onPress={() => setTab(0)} />
                <CustomButton text="Your Requests" onPress={() => setTab(1)} />
            </div>

            {
                (showTab == 1) ? <div className='w-100 abcd' style={{height:'80vh', overflowY:'scroll'}}>
                    {
                        arr.map(e => {
                            return <ServiceCard obj={e} />
                        })
                    }
                </div> : <form className='container my-3 d-flex' style={{height:'75vh'}}>
                    <div className='my-auto w-100'>

                    <input value={"Ram Goel"} title="Change in Profile" className='form-control my-2 p-2' style={{
                        backgroundColor: 'transparent',
                    }} type={'text'} placeholder='Ram Goel'></input>
                    <select id="cars" placeholder='Request Type' className='my-2' style={{
                        background: 'transparent',
                        color: 'white',
                        padding: 7,
                        borderRadius: 5,
                        width: '100%'

                    }}>
                        <option style={{
                            color: 'black'
                        }} value="1">Review Sales</option>
                        <option style={{
                            color: 'black'
                        }} value="2">Review Purchases</option>
                        <option style={{
                            color: 'black'
                        }} value="3">Compute Tax</option>
                        <option style={{
                            color: 'black'
                        }} value="4">Add Tax to Books</option>
                    </select>
                    <CustomButton text="Create" />
                    </div>
                </form>
            }
        </div>
    )
}

export default CustomerHome