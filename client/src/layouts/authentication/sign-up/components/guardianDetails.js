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


function PersonalDetails({ nextStep,prevStep, values, handleChange }) {
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
        Guardian Details
      </SoftTypography>
    </SoftBox>
    <SoftBox pt={2} pb={3} px={3}>
    <SoftBox  >
      <SoftTypography variant="h6" fontWeight="small">
        Name and email address:
      </SoftTypography>
    </SoftBox>
      <SoftBox component="form" role="form">
      <SoftBox mb={2}>
          <SoftInput type="name"  placeholder="Full Names" onChange={handleChange(13)}/>
        </SoftBox>

        <SoftBox mb={2}>
          <SoftInput type="email" placeholder="Guardian email address" onChange={handleChange(14)} />
        </SoftBox>
        <SoftBox  >
      <SoftTypography variant="h6" fontWeight="small">
        Address details:
      </SoftTypography>

      <SoftBox mb={2} display="flex" flexDirection="row">
        
          <SoftBox mr={4}>
          <SoftInput type="name" placeholder="Building : eg 404, Streetwise" onChange={handleChange(15)}/>

          </SoftBox>

          <SoftBox>
          <SoftInput type="name" placeholder="City: eg Nairobi" onChange={handleChange(16)}/>
       </SoftBox>
          
      </SoftBox>


    <SoftBox mb={2} width="50%">
          <SoftInput type="name" marginBottom="20px" placeholder="State: eg Kenya " onChange={handleChange(17)} />

      </SoftBox>
      <SoftBox mb={2} width="50%">
          <SoftInput type="name" marginBottom="20px" placeholder="Phone: eg 0712345678 " onChange={handleChange(18)}/>

      </SoftBox>

    </SoftBox>
      
        <SoftBox mt={4} mb={1} display="flex">
          <SoftBox >
          <SoftButton variant="gradient" color="dark" onClick={Previous}>
            Previous
          </SoftButton>

          </SoftBox>

          <SoftBox textAlign="right" ml="auto" mr={0}>
          <SoftButton variant="gradient" color="dark" onClick={Continue}>
            Next
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

export default PersonalDetails;
