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
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox  alignItems="center" p={3}>
              <SoftTypography variant="h4" >WCDI</SoftTypography>

              <SoftTypography variant="h6">Who are we who are we who are we</SoftTypography>

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

Tables.defaultProps = {
  color: "info",
  brand: "",
};

export default Tables;
