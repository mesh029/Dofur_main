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
import Cards from "./components/cards";

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

import Popup from "./components/Popup";

var cors = require('cors')

var corsOptions = {
  origin: 'ttps://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200
}



// Data

function Donate() {

  const { search } = useLocation();
  const [recipients, setRecipients] = useState([])
  console.log("reccccc", recipients)

  
  const recCard = [
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
  ];


  useEffect(()=>{

    setTimeout(async ()=>{
      try {
        const fetchRecipients = async ()=>{
          const res = await axios.get(" http://localhost:5000/recipients" + search, cors())
          setRecipients(res.data)
          console.log("recipients", recipients)
        }
        fetchRecipients()
        
      } catch (error) {

        console.log(error)
         
      }

    }, 900)
  }, [search])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <SoftBox
                    my={2}
          >

          <Card
          marginTop="20px"
          >
         <SoftTypography variant= "h4" my={1} mx={4}>Available recipients:</SoftTypography>

          

          <SoftBox

        >
                <Cards cards={recipients}/>
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

export default Donate;
