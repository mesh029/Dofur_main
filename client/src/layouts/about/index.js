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
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/about/data/authorsTableData";
import projectsTableData from "layouts/about/data/projectsTableData";

import { useSoftUIController} from "context";


function About() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [controller, dispatch] = useSoftUIController();
  const { user } = controller;



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox  alignItems="center" p={3}>
              <SoftTypography variant="h4" >WCDI</SoftTypography>

              <SoftTypography variant="h6">WCDI was founded to help the needy. This, among many others, includes being able to help children who cannot go to school following financial reasons. We take pride in the fact that alot of people have been able to benefit from the steps WCDI has taken as a foundation. In partnership with other charity agencies WCDI also feeds the hungry and does charity funds frequently. With Dofur, which is an acquisition system, WCDI is able to get more recipients, and donors hence more people to help and more funds. Dofur is sleek, easy to use and does the hard work for us which is finding as many recipients as possible. Help us today with our course for every one of us needs the other at one point in time.</SoftTypography>

{user?(

<SoftBox mt={2}>

</SoftBox>
):(
<SoftBox mt={2}>
<SoftButton
  component="a"
  href="/authentication/sign-up"
  rel="noreferrer"
  variant="gradient"
  color='info'
  fullWidth
>
    {/*target="_blank" property for softbutton that opens link in new page*/}

  Become a recipient or donate today
</SoftButton>
</SoftBox>
)}

            </SoftBox>
          </Card>
        </SoftBox>
        {/*

<Card>
<SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
  <SoftTypography variant="h6">Projects table</SoftTypography>
</SoftBox>
<SoftBoxkey
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

About.defaultProps = {
  color: "info",
  brand: "",
};

export default About;
