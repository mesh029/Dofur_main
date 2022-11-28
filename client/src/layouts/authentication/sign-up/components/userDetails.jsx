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
import { Link} from "react-router-dom";

// @mui material components

// Soft UI Dashboard React components
import SoftTypography from "components/SoftTypography";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";



import BasicLayout from "layouts/authentication/components/BasicLayout";





// @mui material components
import Checkbox from "@mui/material/Checkbox";

//mine
import { RadioGroup, FormControl, FormControlLabel, FormLabel } from "@mui/material";
import Radio from '@mui/material/Radio';

import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import colors from "assets/theme/base/colors";


import { pink, red, yellow } from '@mui/material/colors';
import { TextFields } from "@mui/icons-material";
import { borderBottom, color, height } from "@mui/system";

import OutlinedInput from "@mui/material/OutlinedInput";


const { info, dark, text } = colors;


function UserDetails({ handleStep, nextStep, values, handleChange, setRecDate }) {
    const [agreement, setAgremment] = useState(true);
    const handleSetAgremment = () => setAgremment(!agreement);
    const [selectedValue, setSelectedValue] =useState(true);
    const [value, setValue] = useState(null);



    //mine

    const handleChange2 = (event) => {
      setSelectedValue(event.target.value);
      console.log("hello worlddlldldl",selectedValue)
    };
  
    const controlProps = (item) => ({
      onChange: ((handleChange2, handleChange(29))),
      value: item,
      name: 'size-radio-button-demo',
      inputProps: { 'aria-label': item },
    });


    const validate = () => {
      
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
    

      const inputProps ={
        error: "error",
        helperText: "ichaweri"
      }
  const stylea = { border:"1px solid green", borderRadius: "10px", input: {height: "40px", borderBottom: "1px solid red"},label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}}}
  const styleb = {label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}}}

  const stylec =""
  return (

    <Card>
          <SoftBox mt={4} mb={1} px={3} display="flex">
          <SoftBox >
          <SoftButton variant="gradient" color="dark" onClick={handleStep(4)}>
            Donor
          </SoftButton>
          </SoftBox>

          <SoftBox textAlign="right" ml="auto" mr={0}>
          <SoftButton variant="gradient" color="dark" onClick={handleStep(5)}>
            Admin
          </SoftButton>

          </SoftBox>
        </SoftBox>


      <SoftBox pt={2} px={3} >
      <SoftTypography variant="h5" fontWeight="small">
        Recipient registration
      </SoftTypography>
    </SoftBox>

    <form action="">
    <SoftBox pt={1} pb={3} px={3} mt={4}>
      <SoftBox component="form" required role="form">
        <SoftBox mb={2}>
          <TextField fullWidth sx={{label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}}} focused value={values.username} type="name" label="Full Names"  placeholder="names" required onChange={handleChange(0)} />
        </SoftBox>
        <SoftBox  mb={2}>
         <TextField fullWidth sx={{label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}}} focused value={values.email} type="email" label="Email Address"  placeholder="email" required onChange={handleChange(1)} />
        </SoftBox>

        <SoftBox mb={2}>

        <FormControl>
        <SoftTypography variant="h6" fontWeight="small">
        Gender:
      </SoftTypography>
      <SoftBox px={2}> 
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel  value={true} control={<Radio {...controlProps(true)} size="small"/>} label="Female" />
        <FormControlLabel value={false} control={<Radio {...controlProps(false)} />} sx={{span:{fontSize: 100}}}  label="Male" />
      </RadioGroup></SoftBox>

     
    </FormControl>


        </SoftBox>

        <SoftBox 
        my={1}
        >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of Birth"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          
        }}
        onClose={setRecDate(value)}
        renderInput={(params) => <TextField fullWidth  {...params} sx={{input: {height: "40px"} ,label:{ fontSize: 15,textDecorationColor:yellow, background:"white"},  ":focus-within":{label:{WebkitTextFillColor: info.main}} } } />}
        
      />
    </LocalizationProvider>
    </SoftBox>

        
    <SoftBox py={1} >
      <SoftTypography variant="h6" fontWeight="small">
        Address
      </SoftTypography>
    </SoftBox>

    <SoftBox overflow="hidden" py={2}>
        
          <SoftBox mb={2}>
          <TextField fullWidth sx={{ input: {height: "40px"}, label:{fontSize: 15, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}}  }}   type="name" label="Building"  placeholder="Building : eg 404, Streetwise" required onChange={handleChange(2)} />
          </SoftBox>

          <SoftBox mb={2}>
          <TextField fullWidth  sx={{ input: {height: "40px"},label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}}}}  type="name" label="City"  placeholder="City : eg 404, Nairobi" required onChange={handleChange(3)} />
       </SoftBox>

      </SoftBox>


      <SoftBox>
      <SoftBox mb={2}>
      <TextField fullWidth sx={{ input: {height: "40px"},label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}}}}   type="name" label="State"  placeholder="eg Kenya" required onChange={handleChange(4)} />

      </SoftBox>

      <SoftBox>
      <TextField fullWidth sx={{  input: {height: "40px", maxlength: 3},label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}}}}  type="name" label="Phone"  placeholder="eg 072342271" required onChange={handleChange(5)} />

      </SoftBox>

      </SoftBox>
      
      <SoftBox  >
      <SoftTypography variant="h6" fontWeight="small">
        School details:
      </SoftTypography>
    </SoftBox>

    <SoftBox mb={2}>
    <TextField  fullWidth sx={{ input: {height: "40px"},label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}}}}   type="name" label="School"  placeholder="School : eg 404, Kericho Boys School" required onChange={handleChange(6)} />
      </SoftBox>

    <SoftBox mb={2} alignItems="center" justifyContent="center">
        
          <SoftBox mb={2} >
          <TextField sx={{ input: {height: "40px", width: 20},label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}}}}   type="name" label="Address"  placeholder="Address : eg 99, Nairobi" required onChange={handleChange(7)} />
          </SoftBox>

          <SoftBox mb={2}>
          <TextField fullWidth sx={{ input: { width: 100 ,height: "40px"},label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}}}}   type="name" label="City"  placeholder="City : Nairobi" required onChange={handleChange(8)} />
       </SoftBox>
      </SoftBox>

    <SoftBox mb={2} width="50%">
    <TextField fullWidth sx={{ input: {height: "40px"},label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}}}}   type="name" label="Class/Form"  placeholder="eg Form 1" required onChange={handleChange(9)} />

      </SoftBox>


      <SoftBox display="flex">

      <Checkbox checked={agreement} onChange={handleSetAgremment} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetAgremment}
            sx={{ cursor: "poiner", userSelect: "none" }}
          >
            &nbsp;&nbsp;Admited&nbsp;
          </SoftTypography>

      </SoftBox>
      <SoftBox  mt={3}>
      <SoftTypography variant="h6" fontWeight="small">
        Description:
      </SoftTypography>
    </SoftBox>

        <SoftBox mb={2}  >
        <TextField fullWidth multiline rowns={5} sx={{ input: {height: "40px"},label:{fontSize: 15, WebkitTextFillColor: text.main, background: "white"}, ":focus-within":{label:{WebkitTextFillColor: info.main}, "::after":{
          borderBottomColor: "red", borderBottom: "2px solid orange"
        }}}}  type="name" label="Description"  placeholder="Short description about your self and why you'd like assistanace with funds" required onChange={handleChange(10)} />

        </SoftBox>


    <SoftBox mt={2}>
    <TextField error={values.funds===""} variant="filled" sx={{input:{height: "40px"}, label:{fontSize: 12}, ":focus-within":{label:{WebkitTextFillColor:info.main}}}} fullWidth  type="name" label="Target Funds"  placeholder="eg 40000" inputProps={inputProps} required onChange={handleChange(11)} />

      
    </SoftBox>
          
        <SoftBox mt={4} mb={1} textAlign="right">
          <SoftButton variant="gradient" type="submit" color="dark" onClick={Continue}>
            Next
          </SoftButton>
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

    </form>
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

export default UserDetails;
