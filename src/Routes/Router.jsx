import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import DashBoardHome from "../Pages/DashBoard/DashBoardHome";
import OurMenuHome from "../Pages/OurMenu/OurMenuHome/OurMenuHome";
import OurShop from "../Pages/OurShop/OurShop";
import OurShopMenu from "../Pages/OurShop/OurShopMenu/OurShopMenu";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>} >
          <Route path="/" element={<Home></Home>} />
          <Route path="/contactUs" element={<ContactUs></ContactUs>} />
          <Route path="/dashBoard" element={<DashBoardHome></DashBoardHome>} />

          <Route path="/ourMenu" element={<OurMenuHome></OurMenuHome>} >
          </Route>
          <Route path="/ourShop" element={<OurShop></OurShop>} ></Route>
          <Route path="/ourShop/:buttonTitle" element={<OurShopMenu></OurShopMenu>} >
          </Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
