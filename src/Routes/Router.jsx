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
        <Route path="/" element={<MainLayout></MainLayout>} >
          <Route path="/" element={<Home></Home>} />
          <Route path="/contactUs" element={<ContactUs></ContactUs>} />
          {/* <Route path="/dashBoard" element={<DashBoardHome></DashBoardHome>} /> */}

          <Route path="/ourMenu" element={<OurMenuHome></OurMenuHome>} >
          </Route>
          <Route path="/ourShop" element={<OurShop></OurShop>} ></Route>
          <Route path="/ourShop/:buttonTitle" element={<OurShopMenu></OurShopMenu>} >
          </Route>
        </Route>
        
      </Routes>
      <Routes>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout></DashboardLayout>}>
          <Route path="/dashboard/adminHome" element={<AdminHome></AdminHome>}></Route>
          <Route path="/dashboard/addItems" element={<AddItems></AddItems>}></Route>
          <Route path="/dashboard/manageItems" element={<ManageItems></ManageItems>}></Route>
          <Route path="/dashboard/manageBookings" element={<ManageBooking></ManageBooking>}></Route>
          <Route path="/dashboard/allUsers" element={<AllUsers></AllUsers>}></Route>
          {/* user dashboard component */}
          <Route path="/dashboard/userHome" element={<UserHome></UserHome>}></Route>
          <Route path="/dashboard/reservation" element={<Reservation></Reservation>}></Route>
          <Route path="/dashboard/paymentHistory" element={<PaymentHistory></PaymentHistory>}></Route>
          <Route path="/dashboard/myCart" element={<MyCart></MyCart>}></Route>
          <Route path="/dashboard/addReview" element={<AddReview></AddReview>}></Route>
          <Route path="/dashboard/myBookings" element={<MyBookings></MyBookings>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
