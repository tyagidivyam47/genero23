import React, { useState } from 'react'

const ServiceCard=(props)=>{
    return(
        <div className='bg-light rounded border my-2 p-3 mx-3 col-3'>
            <div style={{width:'30vw'}}>
                        <h2 className='' style={{width:'fit-content'}}>{props.obj.worker}</h2>
                        <p style={{width:'fit-content'}}><i className='fa fa-tasks'></i>   {props.obj.task}</p>
                        <p style={{width:'fit-content'}}><i className='fa fa-location'></i>   {props.obj.location}</p>
                        <p style={{width:'fit-content'}}><i className='fa fa-location'></i>   {props.obj.location}</p>
            </div>
        </div>
    )
}
function Home() {
    const res=[
        {
            task:"I will clean Home",
            worker:"Seeta Verma",
            location:"Kandivali"
        },
        {
            task:"I will clean Bike",
            worker:"Shivam Verma",
            location:"Kandivali West"
        },
        {
            task:"I will fix Air Condition",
            worker:"Sahil Verma",
            location:"Kandivali North"
        },
        {
            task:"I will make food",
            worker:"Krishan Singh",
            location:"Kandivali"
        },


    ]
    const [arr,setArr]=useState([
        {
            task:"I will clean Home",
            worker:"Seeta Verma",
            location:"Kandivali"
        },
        {
            task:"I will clean Bike",
            worker:"Shivam Verma",
            location:"Kandivali West"
        },
        {
            task:"I will fix Air Condition",
            worker:"Sahil Verma",
            location:"Kandivali North"
        },
        {
            task:"I will make food",
            worker:"Krishan Singh",
            location:"Kandivali"
        },


    ])
  return (
    <div>
        <div className='w-25 mx-auto'>

        <h1>Find Workers for your Task</h1>
        <input className='form-control my-2' placeholder='Enter a Location' onChange={(e)=>{
           
            if(e.target.value===''){
                setArr(res)
            }else{
                var k=arr.filter(s=>{
                    return s.location.includes(e.target.value)
                })
                setArr(k)
            }
        }} />
        <input className='form-control my-2' placeholder='Enter a Task' onChange={(e)=>{
            console.log(e)
            if(e.target.value===''){
                setArr(res)
            }else{
                var k=arr.filter(s=>{
                    return s.task.includes(e.target.value)
                })
                setArr(k)
            }
        }}/>
        </div>
        <div className='row justify-content-around w-100'>
            {
                arr.map(e=>{
                    return <ServiceCard obj={e} />
                })
            }
        </div>
    </div>
  )
}

export default Home