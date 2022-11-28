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

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";


//Mine

import {useLocation} from 'react-router-dom';
import axios from "axios";

import { useEffect, useState } from "react";
import {
  useSoftUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";





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
        console.log("recipients", recipients)
        console.log("na hawa ", profilesListData )
  
        
       console.log("successful! putin before verification", verifiedState )
  
       console.log("identification after verification",verifiedState)

       verifiedState = null

       console.log(verifiedState)

  
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

  useEffect(()=>{

    console.log("I am the user tyyyype", userType)


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
   console.log("Profile tyyyyypeeee", userData)

   if (userType == "recipient"){
    setUserDistinct(userData.username)
   }else if(userType == "donor"){ 
    setUserDistinct(userData.dusername)
   }else{
    setUserDistinct(userData.ausername)
   }


  },[userData, userType])



  return (
    <DashboardLayout>
      <Header username={userDistinct} />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "userData.username",
                mobile: "(44) 123 1234 123",
                email: "alecthompson@mail.com",
                location: "USA",
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            {userType == "recipient" ? (
                          <ProfilesList title="Donors" profiles={profilesListData} />


            ):(
              <ProfilesList title="Recipients with pending verification" profiles={recipients} handleVerify={handleVerify} userType={userType} />

            )}
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Donations
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Architects design houses
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="project #2"
                  title="modern"
                  description="As Uber works through a huge amount of internal management turmoil."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor2}
                  label="project #1"
                  title="scandinavian"
                  description="Music is something that every person has his or her own specific opinion about."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="project #3"
                  title="minimalist"
                  description="Different people have different taste, and various types of music."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "New project" }} outlined />
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
