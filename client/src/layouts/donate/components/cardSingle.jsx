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
import "./cardSingle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPersonDress } from "@fortawesome/free-solid-svg-icons";


// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";


// Soft UI Dashboard React examples


//mine
import { useEffect, useState } from "react";
import Popup from "./Popup"
import axios from "axios"
import SoftAvatar from "components/SoftAvatar";
import { Grid } from "@mui/material";

library.add(faUser, faPersonDress);





function CardSingle({card, popup}) {

  const [cardAge, setCardAge] = useState(21)
  const [isOpen, setIsOpen] = useState(false);
  const [funds, setFund] = useState({})
  const [fundsTotal, setFundTotal] = useState({})
  const[fundsTarget, setFundsTarget] = useState()
  const[cash, setCash] = useState()
  const[cashTarget, setCashTarget] = useState()
  



  useEffect(()=>{

    const calculateage=()=>{

      var Dodo = new Date(card.dob)
  
      var month_diff = Date.now()-Dodo.getTime()
      var age_diff = new Date(month_diff)
      var year = age_diff.getUTCFullYear()
      var age = Math.abs(year-1970); 
  
    setCardAge(age)


  
    }

    const fetchFunds = async () => {
      const res = await axios.get(`http://localhost:5000/funds/${card.recipientFundId}`);
      setFund(res.data);
    };


    const fetchFundsTotal = async () => {
      const res = await axios.get(`http://localhost:5000/funds/`);
      setFundTotal(res.data);
    };








    fetchFunds()
    fetchFundsTotal()

    calculateage()


  }, [])


  useEffect(()=>{
    const calculateCash= () =>{
      if(funds){
        setCash(funds.recipientsCurrentFunds)
        setCashTarget(funds.recipientsTargetFunds)
       
     }

    }

    calculateCash()

  },[funds])



  
  const togglePopup = () => {
      setIsOpen(!isOpen)

      console.log("funds subtotal", fundsTotal)
      console.log(funds)
    }


 


  

  return (

  
          <SoftBox
          flex="1 0 30%"
          height="450px"
          minWidth="250px"
          mx={3}
          my={3}
          p={0.2}
          bgColor="white"
          className="wo"
              >
            <SoftBox  alignItems="center" height= "100%" width="100%">
              <SoftBox width="100%" height="50%"display="flex">
                <SoftBox width="auto" alignItems= "center" p={4} >
                <Grid item>
            <SoftAvatar
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
              bgColor="info"
            />
          </Grid>
                </SoftBox>
                <SoftBox width="70%" >
                  <SoftBox  px={2} py={1} width="100%" height="100%" overflow="hidden">
                    <SoftTypography variant="h6">Name: {card.username} </SoftTypography>
                    <SoftTypography variant="h6">Age: {cardAge} </SoftTypography>
                    <SoftTypography variant="h6">School: {card.school} </SoftTypography>
                    <SoftTypography variant="h6">Class: {card.userClass} </SoftTypography>
                    <SoftTypography variant="h6">Current Funds: Ksh {cash?.toLocaleString()} </SoftTypography>
                    <SoftTypography variant="h6">Target Funds: Ksh {cashTarget?.toLocaleString()} </SoftTypography>
                  </SoftBox>
                </SoftBox>
              </SoftBox>
              <SoftBox width="100%" height="35%" p={3}>
                <SoftTypography variant="h6" fontFamily="'Raleway', sans-serif">
                  {card.description}
                </SoftTypography>
              </SoftBox>

  
                <SoftBox></SoftBox>


                <SoftBox textAlign= "right" ml="auto" mr={0} width="100%" height="15%" my={1}>

                <SoftButton
                width="170px"
                height="50px"
                onClick={popup}
                display="none"
                color="info"
                >
                  <SoftTypography variant="h6">Donate</SoftTypography>
                </SoftButton>
               
             </SoftBox>
            
              

                {isOpen && <Popup
      content={<>
        <b>{card.username}</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </>}

      handleClose={togglePopup}
    />}
            </SoftBox>
          </SoftBox>

  );
}



export default CardSingle;
