import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import DashBoardHome from "../Pages/DashBoard/DashBoardHome";
import OurMenuHome from "../Pages/OurMenu/OurMenuHome/OurMenuHome";
import OurShop from "../Pages/OurShop/OurShop";
import OurShopMenu from "../Pages/OurShop/OurShopMenu/OurShopMenu";
import SignUp from "../Pages/Components/SignUp/SignUp";
import SignIn from "../Pages/Components/SignIn/SignIn";
import DashboardLayout from "../Dashboard/Layout/DashboardLayout";
import AdminHome from "../Dashboard/AdminPages/AdminHome/AdminHome";
import AddItems from "../Dashboard/AdminPages/AddItems/AddItems";
import ManageItems from "../Dashboard/AdminPages/ManageItems/ManageItems";
import ManageBooking from "../Dashboard/AdminPages/ManageBooking/ManageBooking";
import AllUsers from "../Dashboard/AdminPages/AllUsers/AllUsers";
import UserHome from "../Dashboard/UserPages/UserHome/UserHome";
import Reservation from "../Dashboard/UserPages/Reservation/Reservation";
import PaymentHistory from "../Dashboard/UserPages/PaymentHistory/PaymentHistory";
import MyCart from "../Dashboard/UserPages/MyCart/MyCart";
import AddReview from "../Dashboard/UserPages/AddReview/AddReview";
import MyBookings from "../Dashboard/UserPages/MyBookings/MyBookings";

const Router = () => {
  return (
      <BrowserRouter>
      <Routes>
        {/* Main layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="ourMenu" element={<OurMenuHome />} />
          <Route path="ourShop" element={<OurShop />} />
          <Route
            path="ourShop/:buttonTitle"
            element={<OurShopMenu />}
          />
        </Route>

        {/* Authentication routes */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />

        {/* Dashboard layout */}
        <Route path="/dashBoard" element={<DashboardLayout />}>
          {/* Admin routes */}
          <Route path="adminHome" element={<AdminHome />} />
          <Route path="addItems" element={<AddItems />} />
          <Route path="manageItems" element={<ManageItems />} />
          <Route path="manageBookings" element={<ManageBooking />} />
          <Route path="allUsers" element={<AllUsers />} />

          {/* User routes */}
          <Route path="userHome" element={<UserHome />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="paymentHistory" element={<PaymentHistory />} />
          <Route path="myCart" element={<MyCart />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="myBookings" element={<MyBookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
