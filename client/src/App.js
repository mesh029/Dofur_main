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

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Soft UI Dashboard React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Soft UI Dashboard React routes
import routes from "routes";
import routes2 from "routes2";
import routes3 from "routes3";
import routes4 from "routes4";

// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import { Description } from "@mui/icons-material";
import data from "layouts/dashboard/components/Projects/data";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor, user } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const[description, setDescription] = useState("")


  const[userData, setUserData] = useState(user)
  const[userType, setUserType] = useState("")


  useEffect(()=>{
    const data = window.localStorage.getItem('MY_APP_STATE')
    if(data !== null) setUserData(JSON.parse(data))


  }, [])


  useEffect(()=>{


    if(userData !== null){

      if(Object.prototype.hasOwnProperty.call(userData, 'dob')){
        setUserType("recipient")
      }else if(Object.prototype.hasOwnProperty.call(userData, 'dusername')){
        setUserType("donor")
      }else if(Object.prototype.hasOwnProperty.call(userData, 'ausername')){
        setUserType("admin")
      }else{
        setUserType("sijui")
      }

      if (userType == "recipient"){
        setDescription("Hello dear recipient, we thank you for believing in us to help you achieve your dreams thrugh funding your education with the help of generous people around the country. Send enquires to helpDofur234@gmail.com. Thank you.")
       }else if(userType == "donor"){ 
        setDescription("Hello donor, we thank you for choosing to be part of this great community. What you give is truly appreciated. Be blessed.")
       }else{
        setDescription("Hello admin, your work is to make sure recipients are validated and their accounts authorised as soon as possible. This includes following up with them to confirm whether or not their details are correct, if they really need the help and help them where necessary.")
       }
    
      console.log("I am the user type", userData)
  


    }


    if (userType == "recipient"){
      setDescription("Hello dear recipient, we thank you for believing in us to help you achieve your dreams thrugh funding your education with the help of generous people around the country. Send enquires to helpDofur234@gmail.com. Thank you.")
     }else if(userType == "donor"){ 
      setDescription("Hello donor, we thank you for choosing to be part of this great community. What you give is truly appreciated. Be blessed.")
     }else{
      setDescription("Hello admin, your work is to make sure recipients are validated and their accounts authorised as soon as possible. This includes following up with them to confirm whether or not their details are correct, if they really need the help and help them where necessary.")
     }
  
    console.log("I am the user type brrr", userData)

  },[userType, userData, description, pathname])



  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
    console.log("waaaaatt")
  }, [direction]);




  




  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;



    
  }, [pathname]);


  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );


    return direction === "rtl" ? (
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={themeRTL}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              <Sidenav
                color={sidenavColor}
                brand={brand}
                brandName="Soft UI Dashboard"
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
              <Configurator />
              {configsButton}
            </>
          )}
          {layout === "vr" && <Configurator />}
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    ) : (
      
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={brand}
              brandName="Dofur acquisition system"
              routes={user? routes2: routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            {configsButton}
          </>
               )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          {getRoutes(routes2)}

          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </ThemeProvider>
    );
}
