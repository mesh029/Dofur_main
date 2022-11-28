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
import { Context } from "context/Context";
import { useContext, useRef } from "react";

// react-router-dom components
import { Link, Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";


//mine

// Soft UI Dashboard React context
import {
  useSoftUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";




function SignIn() {
  const userRef = useRef()
  const passwordRef = useRef()
  const [rememberMe, setRememberMe] = useState(true);
  const [username, setUserName] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate()



  const [controller, dispatch] = useSoftUIController();
  const { user } = controller;

  const isFeto = false

  const [error, setError] = useState(false);

  const handleLogout = () =>{

    dispatch({ type: "LOGIN_START" });

    console.log( user)
  }



  var cors = require('cors')



  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setError(false)


    try {
      const res = await axios.post("http://localhost:5000/auth/login",{
        username: address,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      
      console.log("payload",user)

      navigate("/profile",{state:user})
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });

      setError(true)
      console.log(err)

    }

    console.log(user)
  }


  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form" onSubmit={handleSubmit}>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput placeholder="Email" onChange={e=>setAddress(e.target.value)} ref={userRef}/>
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="Password" autoFocus = {true} onChange={e=>setUserName(e.target.value)} ref={passwordRef} />
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth type= "submit" role ="submit" disabled={isFeto}>
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSubmit}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Submi
          </SoftTypography>
            
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
