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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftButton from "components/SoftButton";


//mine
import Popup from "./../../../layouts/donate/components/Popup"
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { render } from "@testing-library/react";
function ProfilesList({ title, profiles, handleVerify, userType }) {

  const [isOpen, setIsOpen] = useState(false);
  const [indexa, setIndexa] = useState(0)
  const fetchedRecipient = profiles[indexa]
  const[isVerified, setIsVerified] = useState(true)
  
  const navigate = useNavigate()
  const location = useLocation();

  const verifiedState = location.state




  useEffect(()=>{


    if(verifiedState !== null){
      setIsVerified(verifiedState.verified)
    }

    console.log(isVerified)

  }, [isVerified])



  const togglePopup = (a) => {
    setIsOpen(!isOpen)
    setIndexa(profiles.indexOf(a))
  }
 

  var renderProfiles

  if(userType == "recipient"){
    renderProfiles =profiles.map(({ username, dob, description, schoolCity, _id, verified, address, userClass, school}) => 
   (
    
    
    <SoftBox key={username} component="li" display="flex" alignItems="center" py={1} mb={1}>

      <SoftBox mr={2}>
        <SoftAvatar alt="something here" variant="rounded" shadow="md" />
      </SoftBox>
      <SoftBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <SoftTypography variant="button" fontWeight="medium">
          {username}
        </SoftTypography>
        <SoftTypography variant="caption" color="text">
          {description}
        </SoftTypography>
      </SoftBox>
      <SoftBox ml="auto">
        {description === "internal" ? (
          <SoftButton component={Link} variant="text" color="info">
            VERIFY
          </SoftButton>
        ) : (
          <SoftButton
            component="a"
            target="_blank"
            rel="noreferrer"
            variant="text"
            color="info"
            onClick={()=>navigate('/verify', { state: { data:{
              username, dob, description, schoolCity, _id, userClass, school, address

            }
              } })}
          >
            VERIFY
          </SoftButton>
        )}
      </SoftBox>


      {isOpen && <Popup
      content={<>

      <p>{username}</p>

      <SoftButton
            component="a"
            target="_blank"
            rel="noreferrer"
            variant="text"
            color="info"
            onClick={()=>setIsOpen(!isOpen)}
          >
            VERIFY
          </SoftButton>
      

        <form action="http://localhost:3000/donate" method="GET">
        <input
            type="text"
            aria-label="enter amount"
            className="singlePostTitleInput"
            autoFocus
            
          />

          <SoftButton
          type="submit"
          >
            boom
          </SoftButton>


        </form>



          

      </>}

handleClose={togglePopup}


  />}

    </SoftBox>
  ));

  }else if(userType == "donor"){
   renderProfiles =profiles.map(({ username, dob, description, schoolCity, _id, verified, recipientFundId}) => 
   (
     
    
    <SoftBox key={username} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <SoftBox mr={2}>
        <SoftAvatar alt="something here" variant="rounded" shadow="md" />
      </SoftBox>
      <SoftBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <SoftTypography variant="button" fontWeight="medium">
          {username}
        </SoftTypography>
        <SoftTypography variant="caption" color="text">
          {description}
        </SoftTypography>
      </SoftBox>
      <SoftBox ml="auto">
        {description === "internal" ? (
          <SoftButton component={Link} variant="text" color="info">
            VERIFY
          </SoftButton>
        ) : (
          <SoftButton
            component="a"
            target="_blank"
            rel="noreferrer"
            variant="text"
            color="info"
            onClick={()=>navigate('/verify', { state: {
              data: {username, dob, description, schoolCity, _id, recipientFundId}
              } })}
          >
            VERIFY
          </SoftButton>
        )}
      </SoftBox>


      {isOpen && <Popup
      content={<>

      <p>{username}</p>

      <SoftButton
            component="a"
            target="_blank"
            rel="noreferrer"
            variant="text"
            color="info"
            onClick={()=>setIsOpen(!isOpen)}
          >
            VERIFY
          </SoftButton>
      

        <form action="http://localhost:3000/donate" method="GET">
        <input
            type="text"
            aria-label="enter amount"
            className="singlePostTitleInput"
            autoFocus
            
          />

          <SoftButton
          type="submit"
          >
            boom
          </SoftButton>


        </form>



          

      </>}

handleClose={togglePopup}


  />}

    </SoftBox>
  ));

  }else{

  renderProfiles =profiles.map(({ username, dob, description, schoolCity, _id, verified, school, address, userClass, recipientFundId}) => 
   (
    
    
    <SoftBox key={username} component="li" display="flex" alignItems="center" py={1} mb={1}>

      <SoftBox mr={2}>
        <SoftAvatar alt="something here" variant="rounded" shadow="md" bgColor="info"/>
      </SoftBox>
      <SoftBox
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <SoftTypography variant="button" fontWeight="medium">
          {username}
        </SoftTypography>
        <SoftTypography variant="caption" color="text">
          {description}
        </SoftTypography>
      </SoftBox>
      <SoftBox ml="auto">
        {description === "internal" ? (
          <SoftButton component={Link} variant="text" color="info">
            VERIFY
          </SoftButton>
        ) : (
          <SoftButton
            component="a"
            target="_blank"
            rel="noreferrer"
            variant="text"
            color="info"
            onClick={()=>navigate('/verify', { state: 
              {username, dob, description, schoolCity, _id, school, address, userClass, recipientFundId}
              })}
          >
            VERIFY
          </SoftButton>
        )}
      </SoftBox>

    </SoftBox>
  ));

  }

  

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}

        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilesList;
