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
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";


//mine 

import './popUp.css'

const Popup =props=> {


  const closePopUp = e => {
    e.preventDefault();
    props.handleClose();
  }



  return (
      <SoftBox py={3}
      position= "fixed"
      bgColor=" #00000050"
      width="100%"
      height="100vh"
      top= "0"
      left="45"
      
      >
        <SoftBox
        position="relative"
        width="70%"
        height="auto"
        maxHeight="70vh"
        background="#fff"
        bgColor= "#fff"
        marginTop= "300px"
        
        >
            <span className="close-icon" onClick={closePopUp}></span>

            {props.content}
        </SoftBox>

      </SoftBox>
  );
}

export default Popup;
