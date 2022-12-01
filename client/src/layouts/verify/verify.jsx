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

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";


// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import axios from "axios";
import { Search, SearchTwoTone } from "@mui/icons-material";


//mine

import { useNavigate } from "react-router";
import SoftAvatar from "components/SoftAvatar";
import { Grid } from "@mui/material";


var cors = require('cors')

var corsOptions = {
  origin: 'ttps://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200
}



// Data

function Verify() {

  const { search } = useLocation();
  const [recipients, setRecipients] = useState([])
  const [funds, setFunds] = useState({})
  console.log("reccccc", recipients)
  const location = useLocation();

  const[data, setData] = useState({})


  useEffect(()=>{

    if(location.state !== null){
      setData(location.state)
    }

    console.log("I am here now as data",data)

  }, [])

  useEffect(()=>{
    var recipientFunds = data?.recipientFundId

    setTimeout(async ()=>{

      try {
        const res = await axios.get(`http://localhost:5000/funds/${recipientFunds}`);
  
        setFunds(res.data)

        console.log("tumepata!!!", funds)

       /**window.location.replace("/post/" + res.data._id);**/
     } catch (err) { 
       console.log(err)
     }
   
    }, 900)},[data])
  
  

  const navigate = useNavigate()





  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox  alignItems="center" p={3}>
              <SoftBox display="flex">

                <SoftBox>
                <Grid item mr={5}>
            <SoftAvatar
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
              bgColor="info"
            />
          </Grid>
                </SoftBox>
                <SoftBox>
                <SoftTypography variant="h2" mb={5} fontFamily="'Raleway', sans-serif">{data?.username}</SoftTypography>

              <SoftTypography variant="h4"fontFamily="'Raleway', sans-serif">Target funds </SoftTypography>
              <SoftTypography variant="h5" color="info" fontSize="35px" fontFamily="'Anton', sans-serif" mb={5}>Ksh {funds?.recipientsTargetFunds?.toLocaleString()}</SoftTypography>


                </SoftBox>




              </SoftBox>


              <SoftTypography variant="h4" fontFamily="'Raleway', sans-serif">Description:</SoftTypography>
              <SoftTypography variant="h5" fontFamily="'Raleway', sans-serif" mb={5}>{data?.description}</SoftTypography>


              <SoftTypography variant="h4" fontFamily="'Raleway', sans-serif">School:</SoftTypography>
              <SoftTypography variant="h5" fontFamily="'Raleway', sans-serif" mb={5}>{data?.school}</SoftTypography>

              <SoftTypography variant="h4" fontFamily="'Raleway', sans-serif">School location: :</SoftTypography>
              <SoftTypography variant="h5" fontFamily="'Raleway', sans-serif" mb={5}>{data?.schoolCity}</SoftTypography>
              <SoftTypography variant="h4" fontFamily="'Raleway', sans-serif">Class:</SoftTypography>
              <SoftTypography variant="h5" fontFamily="'Raleway', sans-serif" mb={5}>{data?.userClass}</SoftTypography>
                      <SoftTypography variant="h4" fontFamily="'Raleway', sans-serif">Email:</SoftTypography>
              <SoftTypography variant="h5" mb={5} fontFamily="'Raleway', sans-serif">{data?.address?.email}</SoftTypography>

              <SoftTypography variant="h4" fontFamily="'Raleway', sans-serif" fontStyle="bold">Home address:</SoftTypography>
              <SoftTypography variant="h5" fontFamily="'Raleway', sans-serif" mb={5}>{data.address?.building}</SoftTypography>




        <SoftBox mt={2}>
          <SoftButton
            component="a"
            rel="noreferrer"
            variant="gradient"
            color='info'
            fullWidth
            onClick={()=>navigate('/profile', { state: 
          {verified: true, id: data._id}
                 })}
          >
              {/*target="_blank" property for softbutton that opens link in new page*/}

            Verify
          </SoftButton>
        </SoftBox>
            </SoftBox>
          </Card>
         


        </SoftBox>
        {/*

<Card>
<SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
  <SoftTypography variant="h6">Projects table</SoftTypography>
</SoftBox>
<SoftBox
  sx={{
    "& .MuiTableRow-root:not(:last-child)": {
      "& td": {
        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
          `${borderWidth[1]} solid ${borderColor}`,
      },
    },
  }}
>
  <Table columns={prCols} rows={prRows} />
</SoftBox>
</Card>

*/}

      </SoftBox>
      <Footer />
    </DashboardLayout>

  );
}

export default Verify;
