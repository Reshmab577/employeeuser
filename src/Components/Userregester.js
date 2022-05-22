import React, { useState } from 'react'
import Navbar from './Navbar'

const Userregester = () => {
  
      var[uname,setUname]=useState("")
      var[email,setEmail]=useState("")
      var[address,setAddress]=useState("")
      var[phnno,setPhnno]=useState("")
      var[website,setWebsite]=useState("")
      var[company,setCompany]=useState("")
      var[username,setUsername]=useState("")
      var[password,setPassword]=useState("")
      var[confirmpassword,setConfimpassword]=useState("")
      const reg=()=>{
          const data={"name":uname,"email":email,"address":address,"phnno":phnno,"website":website,"company":company,"username":username,"password":password,"confirmpassword":confirmpassword}
          console.log(data)

      }
      return (
          


    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Name
                    <input onChange={(e)=>{setUname(e.target.value)}}  type="text" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Email
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="" id="" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-12 col-xxl-12">Address
                    <textarea onChange={(e)=>{setAddress(e.target.value)}} name="" id="" cols="10" rows="5" className="form-control"></textarea>
                </div>
                <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Phn No
                    <input onChange={(e)=>{setPhnno(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Website
                    <input onChange={(e)=>{setWebsite(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Company
                    <input onChange={(e)=>{setCompany(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">User Name
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> Password
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Confirm Password
                    <input onChange={(e)=>{setConfimpassword(e.target.value)}} type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={reg} className="btn btn-success">REGESTER</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

  )
}

export default Userregester