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

import { useState, useEffect } from "react";

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

import Popup from "./Popup"
import card from "assets/theme/components/card";
import { indexof } from "stylis";
import axios from "axios";
import SoftInput from "components/SoftInput";
import { TextField } from "@mui/material";




function Cards({cards}) {
  const [isOpen, setIsOpen] = useState(false);
  const [indexa, setIndexa] = useState(0)
  const [recipientsCurrentFunds, setCurrentRecipientFunds]=useState(0)

  const [funds, setFunds] = useState()
  const togglePopup = (a) => {
    setIsOpen(!isOpen)
    setIndexa(cards.indexOf(a))
    console.log(recipientsCurrentFunds)
  }

  const togglePopup2 = ()=> {
    setIsOpen(!isOpen)

  }






  const fetchedRecipient = cards[indexa]

  useEffect(()=>{
      try {
        const fetchFunds = async ()=>{
          const res = await axios.get( `http://localhost:5000/funds/${fetchedRecipient.recipientFundId}`)
          setFunds(res.data)
          console.log("Funds fetched", funds)
        }
        fetchFunds()
        
      } catch (error) {

        console.log(error)
         
      }
      setCurrentRecipientFunds(6000)


      

  }, [isOpen])


  const handleUpdate = async () => {
    try {
      
     
      await axios.put(`http://localhost:5000/funds/${fetchedRecipient.recipientFundId}`, {
        recipientsCurrentFunds : parseInt(recipientsCurrentFunds) + funds?.recipientsCurrentFunds
      });
    } catch (err) {
      console.log(err)
    }
    
  };


  return (
      <SoftBox py={3}
      display="flex"
      flexWrap="wrap"
      widh="100%"
      >
        {cards.map((p, index)=>(
            <CardSingle card={p} popup={()=>togglePopup(p)} key={index}/>

        ))

        } 



{isOpen && <Popup
      content={<>

        <form action="http://localhost:3000/donate" method="GET">
          <h5>Donate to {fetchedRecipient.username}</h5>

            <label for="html">Enter amount  </label>

            <SoftInput
            type="text"
            aria-label="enter amount"
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setCurrentRecipientFunds(e.target.value)}
            textAlign="center"
            Label="hamnani"
            
          />



          <SoftButton mt={10} color="info" 

          onClick={handleUpdate}
          type="submit"
          >
            Donate
          </SoftButton>


        </form>



          

      </>}

      handleClose={togglePopup2}
    />}

      </SoftBox>
  );
}

export default Cards;
