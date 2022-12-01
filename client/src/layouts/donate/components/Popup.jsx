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

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";


// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import CardSingle from "./cardSingle";
// Data



//mine 

import './popUp.css'

const Popup =props=> {



  return (
      <SoftBox py={3}
      position= "fixed"
      bgColor=" #00000050"
      width="100%"
      height="100vh"
      top= "0"
      right="45"
      textAlign="center"
      
      
      >
        <SoftBox
        position="relative"
        width="30%"
        height="auto"
        maxHeight="70vh"
        background="#fff"
        bgColor= "#fff"
        marginTop= "300px"
        marginLeft="30%"
        marginRight="35%"
        
        >
            <span className="close-icon" onClick={props.handleClose}>

            </span>
            {props.content}
        </SoftBox>

      </SoftBox>
  );
}

export default Popup;
