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


const WorkWithTheRockets= props => {


//carousel
const {info, secondary } = colors;

const data = ["1", "2", "3", "4"];
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
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${ivancik})`,
            backgroundSize: "cover",
          }}
          
        >

        {data.map((item, index)=>{
               var car_text;
               var car_undertext;
     
               if (index === 0) {
                 car_text = "mello wmellow"
                 car_undertext = 
                   "A charitable organization driven by the sole goal to try enable every child attends school and does so without struggle";
               } else if (index === 1) {
                 car_text = "DOFUR";
                 car_undertext =
                   "Hello world hello world hello world hello world hello world hello world";
               } else if(index === 2){
                car_text = "WORLD BANK";
                car_undertext =
                  "A world without peace is no world";
               } 
               
               else if (index === 3){
                 car_text = "MANGAS";
                 car_undertext =
                   "Everyone misses Takeoff";
               }
               else{
                car_text = "COMICS";
                car_undertext =
                  "we read them but forget not everyone is told not to";
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
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  {car_text}
                </SoftTypography>
              </SoftBox>
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
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
