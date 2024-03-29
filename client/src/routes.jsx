

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import About from "layouts/about";
import Billing from "layouts/billing";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Donate from "layouts/donate"
import Verify from "layouts/verify/verify";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CreditCard from "examples/Icons/CreditCard";


  const routes = [
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
      name: "Sign In",
      key: "sign-in",
      route: "/authentication/sign-in",
      icon: <Document size="12px" />,
      component: <SignIn />,
      noCollapse: true,
    },
    {
      type: "collapse",
      name: "Sign Up",
      key: "sign-up",
      route: "/authentication/sign-up",
      icon: <SpaceShip size="12px" />,
      component: <SignUp />,
      noCollapse: true,
    },
    {
      type: "collap",
      name: "Verify",
      key: "verify",
      route: "/verify",
      icon: <SpaceShip size="12px" />,
      component: <Verify />,
      noCollapse: true,
    },

  ];

   

export default routes;
