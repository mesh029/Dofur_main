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
import Icon from "@mui/material/Icon";
import colors from "assets/theme/base/colors";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { useEffect, useState } from "react";


// Images
import ivancik from "assets/images/ivancik.jpg";
import { Repeat } from "@mui/icons-material";


const WorkWithTheRockets= props => {


//carousel
const {info, secondary } = colors;

const data = ["1", "2", "3", "4", "5", "6"];
const [currentIndex, setCurrentIndex] = useState(0);



const carouselInfiniteScroll = () => {
  if (currentIndex === data.length - 1) {
    return setCurrentIndex(0);
  }
  return setCurrentIndex(currentIndex + 1);
  
};




useEffect(() => {
  const interval = setInterval(() => {
    carouselInfiniteScroll();
  }, 2000);
  //clean up function
  return () => clearInterval(interval);
});




  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox position="relative" height="100%" p={2}>
        <SoftBox
          display="flex"
          overflow= "hidden"
          flexDirection= "row"
          flexWrap= "nowrap"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.4),
                rgba(gradients.dark.state, 0.4)
              )}, url(https://dunderid.sirv.com/schhool%2C%20board%2C%20study.jpg)`,
            backgroundSize: "cover", backgroundRepeat: "no-repeat",
          }}
          
        >

        {data.map((item, index)=>{
               var car_text;
               var car_undertext;
     
               if (index === 0) {
                 car_text = "DOFUR"
                 car_undertext = 
                   "This is a web application written foc WCDI to help in donor, recipient and funds acquisition";
               } else if (index === 2) {
                 car_text = props.totalValue?.toLocaleString() || ". . .";
                 car_undertext =
                   "Total Number of funds in WCDI's account";
               } else if(index === 3){
                var newValue = props.totalValue/100
                car_text = newValue?.toLocaleString() + " Rs" || "...";
                car_undertext =
                  "Total Value of all funds represented as R's, Dofur local currency standing for reasons";
               } 
               else if(index === 1){
                car_text = "WCDI"
                car_undertext =
                  "A charitable organization that seeks to educate children who cannot go to school for financial reasons";
               } 
               else if (index === 4){
                 car_text = props.totalDonors
                 car_undertext =
                   "Total Number of donors";
               }
               else if (index === 5){
                car_text = props.totalRecipients
                car_undertext =
                  "Total Number of recipients, were growing! And fast";
              }
               else{
                car_text = "DONORS";
                car_undertext =
                  "Total Number of Donors";
               }

          return(
                                    
            <SoftBox mb={3} pt={1}
            height= "28rem"
            minWidth= "100%"
            width= "100%"
            backgroundColor = "#fff3"
            display= "flex"
            flexDirection= "column"
            alignItems= "center"
            justifyContent = "center"
            style={{ transform: `translate(-${currentIndex * 100}%)`, transition: "transform 1s cubic-bezier(0.39, 0.575, 0.565, 1)"  }}
            key={index}
            >


              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="white" fontWeight="400" fontFamily="'Anton', sans-serif" fontSize="100px">
                  {car_text}
                </SoftTypography>
              </SoftBox>
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="white" fontWeight="400" fontFamily="'Raleway', sans-serif" fontSize="20px">
                  {car_undertext}
                </SoftTypography>
              </SoftBox>
              </SoftBox>


            )
        })}


          <SoftTypography
            component="a"
            href="#"
            variant="button"
            color="white"
            fontWeight="medium"
            sx={{
              mt: "auto",
              mr: "auto",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Read More
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SoftTypography>

 
      </SoftBox>
      <SoftBox
      alignItems="center"
      justifyContent="center"
      display="flex"
      >

{data.map((item, index) => {
  const spans = {width: '25px', height: '25px', borderRadius: "50%", backgroundColor: secondary.main, display: "inline-block", margin:"10px"}
  const spans2 = {width: '25px', height: '25px', borderRadius: "50%", backgroundColor: info.focus, display: "inline-block", margin:"10px", transition: "all 2s ease"}

          return (
            <span
              style={currentIndex === index ? spans2 : spans}
              onClick={() => setCurrentIndex(index)}
            ></span>
          );
        })}
          </SoftBox>
        </SoftBox>
    </Card>
  );
}

export default WorkWithTheRockets;
