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


var cors = require('cors')

var corsOptions = {
  origin: 'ttps://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200
}



// Data

function Verify() {

  const { search } = useLocation();
  const [recipients, setRecipients] = useState([])
  console.log("reccccc", recipients)
  const location = useLocation();

  const {data} = location.state; 

  const navigate = useNavigate()





  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox  alignItems="center" p={3}>
              <SoftTypography variant="h4" >General donation {data.username}</SoftTypography>

              <SoftTypography variant="h6">Who are we who are we who are we</SoftTypography>

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


          <SoftBox
                    my={2}
          >

          <Card
          marginTop="20px"
          >
         <SoftTypography variant= "h4" my={1} mx={4}>Browse recipients</SoftTypography>

            
          <SoftTypography variant= "h6" my={1} mx={4}>Filters here</SoftTypography>


          <SoftBox

        >
            </SoftBox>

          </Card>


          </SoftBox>
         


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
