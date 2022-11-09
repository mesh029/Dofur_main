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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";


// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftTypography from "components/SoftTypography";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";



import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";





// @mui material components
import Checkbox from "@mui/material/Checkbox";


function GuardianDetails({ nextStep, prevStep, values, handleChange, handleSubmit }) {
    const [agreement, setAgremment] = useState(true);
    const handleSetAgremment = () => setAgremment(!agreement);

    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
    
      const Previous = e => {
        e.preventDefault();
        prevStep();
      }


  return (

    <Card>
      <SoftBox pt={2} px={3} >
      <SoftTypography variant="h3" fontWeight="small">
      Your password:
      </SoftTypography>
    </SoftBox>
      

<SoftBox pt={2} px={3} >
      <SoftTypography variant="h6" fontWeight="small">
       Tip: Choose a strong password to secure account
      </SoftTypography>
    </SoftBox>
      
    <SoftBox pt={2} pb={3} px={3}>
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftInput type="password" placeholder="password" onChange={handleChange(19)} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftInput type="password" placeholder="Confirm Password" onChange={handleChange(20)}/>
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Checkbox checked={agreement} onChange={handleSetAgremment} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetAgremment}
            sx={{ cursor: "poiner", userSelect: "none" }}
          >
            &nbsp;&nbsp;I agree with the the&nbsp;
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            variant="button"
            fontWeight="bold"
            textGradient
          >
            Terms and Conditions
          </SoftTypography>
        </SoftBox>
      

        <SoftBox mt={4} mb={1} display="flex">
          <SoftBox >
          <SoftButton variant="gradient" color="dark" onClick={Previous}>
            Previous
          </SoftButton>

          </SoftBox>

          <SoftBox textAlign="right" ml="auto" mr={0}>
          <SoftButton variant="gradient" color="dark" onClick={handleSubmit}>
            Finish
          </SoftButton>

          </SoftBox>

        </SoftBox>


        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Already have an account?&nbsp;
            <SoftTypography
              component={Link}
              to="/authentication/sign-in"
              variant="button"
              color="dark"
              fontWeight="bold"
              textGradient
            >
              Sign in
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </SoftBox>
</Card>
  );
}

// Setting default values for the props of BasicLayout
BasicLayout.defaultProps = {
  title: "",
  description: "",
};

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GuardianDetails;
