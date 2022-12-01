

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import About from "layouts/about";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Donate from "layouts/donate";
import Verify from "layouts/verify/verify";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";


  const routes3 = [
    {
      type: "collapse",
      name: "Home",
      key: "dashboard",
      route: "/dashboard",
      icon: <Shop size="12px" />,
      component: <Dashboard />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "About",
      key: "about",
      route: "/about",
      icon: <Office size="12px" />,
      component: <About />,
      noCollapse: true,
    },

    {
      type: "collapse",
      name: "Profile",
      key: "profile",
      route: "/profile",
      icon: <CustomerSupport size="12px" />,
      component: <Profile />,
      noCollapse: true,
    },

    {
        type: "collapse",
        name: "Donate",
        key: "donate",
        route: "/donate",
        icon: <CustomerSupport size="12px" />,
        component: <Donate />,
        noCollapse: true,
      },

  ];
  
  
  /* 
  
    {
      type: "collapse",
      name: "Communities",
      key: "billing",
      route: "/billing",
      icon: <CreditCard size="12px" />,
      component: <Billing />,
      noCollapse: true,
    },
  
   {
      type: "collapse",
      name: "Virtual Reality",
      key: "virtual-reality",
      route: "/virtual-reality",
      icon: <Cube size="12px" />,
      component: <VirtualReality />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "RTL",
      key: "rtl",
      route: "/rtl",
      icon: <Settings size="12px" />,
      component: <RTL />,
      noCollapse: true,
    },
    { type: "title", title: "Account Pages", key: "account-pages" },
  
  
  */
  

   

export default routes3;
