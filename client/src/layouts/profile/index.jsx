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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";



//Mine

import {useLocation} from 'react-router-dom';
import axios from "axios";

import { useEffect, useState } from "react";
import {
  useSoftUIController,

} from "context";
import SoftButton from "components/SoftButton";





function Overview() {

  const[recipients, setRecipients] = useState([])
  const [verification, setVerification] = useState("")
  const location = useLocation();


  const handleVerify= (id) => async(e)=>{

    e.preventDefault()

    try {
      await axios.put(`http://localhost:5000/recipients/${id}`);

      const res = await axios.get(`http://localhost:5000/recipients/getunverified` )

      setRecipients(res.data)
      console.log("recipients ndo hawa", recipients)
      console.log("na hawa ni ile data", profilesListData )

      
     console.log("successful! putin")

     console.log("identification", id)

     /**window.location.replace("/post/" + res.data._id);**/
   } catch (err) { 
     console.log(err)
   }

  }




  useEffect(()=>{
    if(location.state !== null){
      var verifiedState = location.state.id
    }


    

    setTimeout(async ()=>{

      try {
        await axios.put(`http://localhost:5000/recipients/${verifiedState}`);
  
        const res = await axios.get(`http://localhost:5000/recipients/getunverified` )

  
        setRecipients(res.data)


  
       /**window.location.replace("/post/" + res.data._id);**/
     } catch (err) { 
       console.log(err)
       console.log("Im lost here")
     }
  
     
   
    }, 900)},[])


    
    useEffect(()=>{


      setTimeout(async ()=>{
        try {
          const fetchRecipients = async ()=>{
            const res = await axios.get(`http://localhost:5000/recipients/getunverified` )
            setRecipients(res.data)
            console.log("recipients ndo hawa", recipients)
            console.log("na hawa ni ile data", userType )
          }
          fetchRecipients()


          console.log("verification",verification)

  
          
        } catch (error) {
  
          console.log(error)
           
        }
  
      }, 900)},[verification])



  const [controller, dispatch] = useSoftUIController();



  const { user } = controller;
  const[userData, setUserData] = useState(user)
  const[userType, setUserType] = useState("")
  const [userDistinct, setUserDistinct] = useState()
  const[userEmail, setUserEmail] = useState()
  const[description, setDescription] = useState("")
  const [adminPosition, setAdminPosition] = useState("")
  const[fundsId, setFundsId] = useState("")
  const[fund, setFund]= useState({})
  


  useEffect(()=>{


    const data = window.localStorage.getItem('MY_APP_STATE')
    
    if(data !== null) setUserData(JSON.parse(data))



  }, [])

  useEffect(()=>{
    if(Object.prototype.hasOwnProperty.call(userData, 'dob')){
      setUserType("recipient")
    }else if(Object.prototype.hasOwnProperty.call(userData, 'dusername')){
      setUserType("donor")
    }else if(Object.prototype.hasOwnProperty.call(userData, 'ausername')){
      setUserType("admin")
    }else{
      setUserType("sijui")
    }

   window.localStorage.setItem('MY_APP_STATE', JSON.stringify(userData) )

   if (userType == "recipient"){
    setUserDistinct(userData.username)
    setUserEmail(userData.address.email)
    setDescription("Hello dear recipient, we thank you for believing in us to help you achieve your dreams thrugh funding your education with the help of generous people around the country. Send enquires to helpDofur234@gmail.com. Thank you.")
   }else if(userType == "donor"){ 
    setUserDistinct(userData.dusername)
    setUserEmail(userData.demail)
    setDescription("Hello donor, we thank you for choosing to be part of this great community. What you give is truly appreciated. Be blessed.")
   }else{
    setUserDistinct(userData.ausername)
    setUserEmail(userData.aemail)
    setAdminPosition(userData.aposition)
    setDescription("Hello admin, your work is to make sure recipients are validated and their accounts authorised as soon as possible. This includes following up with them to confirm whether or not their details are correct, if they really need the help and help them where necessary.")
   }



   console.log("I am herreee", userData)


  },[userData, userType,  description])



  return (
    <DashboardLayout>
      <Header username={userDistinct} userType={userType} />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings userType={userType} />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="profile information"
              description= {description}
              info={{
                fullName: userDistinct,
                email: userEmail,
              }}
             
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            {userType == "recipient" ? (
                    <SoftBox>

                    </SoftBox>



            ): userType == "admin" ?( 
              <ProfilesList title="Recipients with pending verification" profiles={recipients} handleVerify={handleVerify} userType={userType}  />

            ):(
              <SoftBox>
              <SoftButton href="/donate" color="info">
                Donate
              </SoftButton>
            </SoftBox>

            )}
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
      
             </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
