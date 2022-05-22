import React, { useState } from 'react'
import Navbar from './Navbar'

const Login = () => {
    var[name,setName]=useState("")
    var[password,setPassword]=useState("")
    const subdata=()=>{
     const  data={"name":name,"password":password}
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Username
                    <input  onChange={(e)=>{setName(e.target.value)}} className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Password
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="" id="" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subdata} className="btn btn-success">LOGIN</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Login