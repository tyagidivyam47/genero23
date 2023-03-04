import React, { useState } from 'react'
import CustomButton from '../items/CustomButton'

const ServiceCard = (props) => {
    return (
        <div className='rounded border my-2 p-3 mx-3 col-3'>
            <div style={{ width: '30vw' }}>
                <h2 className='' style={{ width: 'fit-content' }}>{props.obj.worker}</h2>
                <p style={{ width: 'fit-content' }}><i className='fa fa-tasks'></i>   {props.obj.task}</p>
                <p style={{ width: 'fit-content' }}><i className='fa fa-location'></i>   {props.obj.location}</p>
                <p style={{ width: 'fit-content' }}><i className='fa fa-location'></i>   {props.obj.location}</p>
            </div>
        </div>
    )
}
function Home() {

    const [showTab, setTab] = useState(0)
    const res = [
        {
            task: "I will clean Home",
            worker: "Seeta Verma",
            location: "Kandivali"
        },
        {
            task: "I will clean Bike",
            worker: "Shivam Verma",
            location: "Kandivali West"
        },
        {
            task: "I will fix Air Condition",
            worker: "Sahil Verma",
            location: "Kandivali North"
        },
        {
            task: "I will make food",
            worker: "Krishan Singh",
            location: "Kandivali"
        },


    ]
    const [arr, setArr] = useState([
        {
            task: "I will clean Home",
            worker: "Seeta Verma",
            location: "Kandivali"
        },
        {
            task: "I will clean Bike",
            worker: "Shivam Verma",
            location: "Kandivali West"
        },
        {
            task: "I will fix Air Condition",
            worker: "Sahil Verma",
            location: "Kandivali North"
        },
        {
            task: "I will make food",
            worker: "Krishan Singh",
            location: "Kandivali"
        },


    ])
    return (
        <div className='col-sm-11 col-lg-5 mx-auto'>
            <div className='d-flex  mx-auto'>
                <CustomButton text="Add New Request" onPress={() => setTab(0)} />
                <CustomButton text="Your Requests" onPress={() => setTab(1)} />
            </div>

            {
                (showTab == 1) ? <div className='row justify-content-around w-100'>
                    {
                        arr.map(e => {
                            return <ServiceCard obj={e} />
                        })
                    }
                </div> : <form className='container my-3'>
                    <input className='form-control my-2 p-2' style={{
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
                </form>
            }
        </div>
    )
}

export default Home