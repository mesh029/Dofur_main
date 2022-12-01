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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/joinUs";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import Carousel from "layouts/dashboard/components/Carousel"
// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

//My imports
import axios from "axios";
import { useState, useEffect } from "react";
import { useSoftUIController} from "context";



function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const [fundsTotal, setFundTotal] = useState({})
  const [recipients, setRecipients] = useState([])
  const [donors, setDonors] = useState([])
  const [controller, dispatch] = useSoftUIController();
  const { user } = controller;






  useEffect(()=>{

    const fetchFundsTotal = async () => {
      const res = await axios.get(`http://localhost:5000/funds/`);
      setFundTotal(res.data);
    };

    const fetchRecipientsTotal = async()=>{
      const res = await axios.get(`http://localhost:5000/recipients/`);
      setRecipients(res.data)


    }


    const fetchDonors = async()=>{
      const res = await axios.get(`http://localhost:5000/donors/`);
      setDonors(res.data)

    }






    fetchFundsTotal()
    fetchRecipientsTotal()
    fetchDonors()

  },[])



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container>
            <Carousel totalValue = {fundsTotal.subTotal} totalRecipients ={recipients.length} totalDonors={donors.length}/>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              {user?(
                 <WorkWithTheRockets contentTitle={"Dear user"} contentDescription={"We are proud to have you as a member of this new community that seeks to foster education irregardless of ones financial status."} route={"Read more about dofur and wcdi"} routePath={"/about"} />


              ):(
                <WorkWithTheRockets contentTitle={"Join us"} contentDescription={"Become part of this great community that seeks to educate a new child every day."} route ={"Join us"} routePath={"/authentication/sign-up"} />

              )}
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
