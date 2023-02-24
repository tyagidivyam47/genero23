import React, { useState } from 'react'

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
        <h1>Find Workers for your Task</h1>
        <input placeholder='Enter a Location' onChange={(e)=>{
           
            if(e.target.value==''){
                setArr(res)
            }else{
                var k=arr.filter(s=>{
                    return s.location.includes(e.target.value)
                })
                setArr(k)
            }
        }} />
        <input placeholder='Enter a Task' onChange={(e)=>{
            console.log(e)
            if(e.target.value==''){
                setArr(res)
            }else{
                var k=arr.filter(s=>{
                    return s.task.includes(e.target.value)
                })
                setArr(k)
            }
        }}/>
        <div>
            {
                arr.map(e=>{
                    return <div style={{width:'30vw'}}>
                        <h1>{e.worker}</h1>
                        <div style={{display:'flex', justifyContent:'space-between', textAlign:'left'}}>
                            <p>{e.task}</p>
                            <p>{e.location}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Home