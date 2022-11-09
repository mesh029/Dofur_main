/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import * as React from 'react'
import PropTypes from 'prop-types'

import axios from "axios";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";


//card components
import UserDetails from "./components/userDetails";
import GuardianDetails from "./components/guardianDetails";
import PersonalDetails from "./components/credentialDetails";
import AdminDetails from "./components/adminDetails";
import DonorDetails from "./components/donorDetails";
// Images
import curved6 from "assets/images/curved-images/curved14.jpg";



function SignUp() {
  const[step, setStep] = useState(1)





  const [formData, setFormData] = useState([
    'username', 
    'userEmail',
    'building',
    'city',
    'state',
    'phone',
    'school',
    'schoolAddress',
    'schoolCity',
    'userClass',
    'description',
    40000,
    0,
    'gname',
    'gEmail',
    'gBuilding',
    'gCity',
    'gState',
    'gPhone',
    'password',
    'confirmPassword',
    'admin username',
    'admin email',
    'admin position',
    'admin password',
    'donor username',
    'donor email',
    'donor password'

  ])

  const username = formData[0]
  const email = formData[1]
  const building = formData[2]
  const city = formData[3]
  const state = formData[4]
  const phone = formData[5]
  const school = formData[6]
  const schoolAddress = formData[7]
  const schoolCity = formData[8]
  const userClass =formData[9]
  const description = formData[10]
  const funds = formData[11]
  var currentFunds = 0
  const gname = formData[12]
  const gEmail = formData[13]
  const gBuilding = formData[14]
  const gCity = formData[15]
  const gState =formData[16]
  const gPhone = formData[17]
  const password = formData[18]
  const confirmPassword = formData[19]
  const ausername = formData[20]
  const aemail = formData[21]
  const aposition = formData[22] 
  const apassword = formData[23]
  const dusername = formData[24]
  const demail = formData[25]
  const dpassword = formData[26]



  const values = {username, email, building, city, state, phone, school, schoolAddress, userClass, description, funds,currentFunds, gname, gEmail, gBuilding, gCity, gState, gPhone }
  


  function prevStep(){
     setStep(step-1)
  }
  function nextStep(){
    setStep(step+1)
  }

  const handleSubmitA = async(e)=>{
    e.preventDefault()
    const newDetails={
      ausername,
      aemail,
      apassword,
      aposition
    }

    try {
      await axios.post("http://localhost:4000/auth/admin", newDetails);
      
     console.log("successful!", newDetails)
     console.log(formData)

     /**window.location.replace("/post/" + res.data._id);**/
   } catch (err) { 
     console.log(err)
   }
  }

  const handleSubmitD = async(e)=>{
    e.preventDefault()
    const newDetails = {
      dusername,
      demail,
      dpassword,
  
    }

    try {
      await axios.post("http://localhost:4000/auth/donor", newDetails);
      
     console.log("successful!", newDetails)
     console.log(formData)

     /**window.location.replace("/post/" + res.data._id);**/
   } catch (err) { 
     console.log(err)
   }

  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    //works!!
    const newDetails = {
      username,
      gname,
      school,
      schoolAddress,
      userClass,
      description,
      address:{
        email,
        building,
        city,
        state
      },
      gadress:{
        gEmail,
        gCity,
        gPhone,
        gState,
        gBuilding
      },
      funds,
      currentFunds,
      password,
      confirmPassword,
      schoolCity
    }

    try {
       await axios.post("http://localhost:4000/auth/recipient", newDetails);
       
      console.log("successful!", newDetails)

      /**window.location.replace("/post/" + res.data._id);**/
    } catch (err) { 
      console.log(err)
    }
  };
  
  const handleChange = input =>async(e)=>{
 
    let newArr = [...formData]
    newArr[input] = e.target.value
    setFormData(newArr)

    console.log(newArr)
    console.log("username",username)
    console.log("gname", gname)
    

    var moa= newArr[1]
    console.log("arrayyyyy",moa)

    e.preventDefault()

    }

  
    const handleStep = input => async(e)=>{
      setStep(input)
    }

    switch(step) {
      case 1: 
        return (
            <BasicLayout
              title="Welcome!"
              description="Use these awesome forms to login or create new account in your project for free."
              image={curved6}
            >
        
            <UserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values = {values}
            handleStep={handleStep}
            />
            </BasicLayout>
        )
      case 2: 
        return (
          <BasicLayout
          title="Welcome!"
          description="Use these awesome forms to login or create new account in your project for free."
          image={curved6}
        >
          <GuardianDetails 
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
  
          />
                      </BasicLayout>

        )
      case 3: 
          return (
            <BasicLayout
              title="Welcome!"
              description="Use these awesome forms to login or create new account in your project for free."
              image={curved6}
            >
            <PersonalDetails 
            nextStep={nextStep}
            prevStep={prevStep}
            handleSubmit= {handleSubmit}
            handleChange = {handleChange}
            />
                        </BasicLayout>

          )
          case 4: 
          return (
            <BasicLayout
              title="Welcome!"
              description="Use these awesome forms to login or create new account in your project for free."
              image={curved6}
            >
            <DonorDetails 
            nextStep={nextStep}
            prevStep={prevStep}
            handleSubmit= {handleSubmitD}
            handleChange = {handleChange}
            handleStep={handleStep}
            />
                        </BasicLayout>

          )


          case 5: 
          return (
            <BasicLayout
              title="Welcome!"
              description="Use these awesome forms to login or create new account in your project for free."
              image={curved6}
            >
            <AdminDetails 
            nextStep={nextStep}
            prevStep={prevStep}
            handleSubmit= {handleSubmitA}
            handleChange = {handleChange}
            handleStep = {handleStep}
            />
                        </BasicLayout>

          )

      default: 
          // do nothing
    }

}

export default SignUp;
