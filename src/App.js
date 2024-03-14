import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import About from "./components/About";
import MyAccount from "./components/MyAccount";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
// import { AuthContext } from "../components/Auth";
import { Link, useNavigate } from "react-router-dom";

import SignUp from "./components/SignUp";
import AccountDetails from "./components/AccountDetails";
import { AuthProvider } from "./components/Auth";
import ProtectedRoutesAuth from "./components/ProtectedRoutesAuth";
import Products from "./components/AllProducts";
import ProductContextProvider from "./components/ProductContext";
import Store from "./components/Store";
import NotFoundPage from "./components/NotFoundPage";
import ProductDetails from "./components/ProductDetails";
import Cata from "./components/Cata";
import CategoryContext from "./components/CategoryContext";
import CategoryProductDetails from "./components/CategoryProductDetail";
import PImageContext from "./components/PImageContext";

import Cart from "./components/Cart";
import Listing from "./components/Listing";
import SortHw from "./components/SortHw";
import SortLw from "./components/SortLw";
import TrendingList from "./components/TrendingList";
import Summary from "./components/Summary";
import CashOnDeliver from "./components/CashOnDeliver";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Cancellation from "./components/Cancellation";
import TermsCondition from "./components/TermsCondition";

function App() {
  // const pathname = useLocation();
  // console.log(categories.categories.category);

  return (
    <AuthProvider basename="/">
      <Router>
        {/* {pathname === "/cart/:id" ? null : <Navbar />} */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="cart/:id/" element={<Cart />} />
          <Route path="/checkout/:id" element={<Summary />} />
          <Route path="/checkout/:id/:price" element={<CashOnDeliver />} />
          <Route path="/home/" element={<Home />} />

          <Route path="/account" element={<MyAccount />} />
          <Route path="/trend" element={<TrendingList />} />
          <Route path="/listing" element={<Listing />} />
          <Route
            path="/about"
            element={<ProtectedRoutesAuth Component={About} />}
          />
          <Route
            path="/contact"
            element={<ProtectedRoutesAuth Component={ContactUs} />}
          />

          {/* <Route path="/products" element={<Products />} /> */}

          <Route
            path="/store/"
            element={<ProtectedRoutesAuth Component={Store} />}
          >
            <Route path="/store/" element={<Products />} />
            <Route path="/store/:categories/" element={<Cata />} />
            <Route path="/store/sortlw/" element={<SortLw />} />
            <Route path="/store/sorthw/" element={<SortHw />} />
          </Route>
          <Route
            path="/store/:categories/:id"
            element={<CategoryProductDetails />}
          />

          {/* <Route
              path="/store/:categories/:id/:size"
              element={<CategoryProductDetails />}
            /> */}

          <Route path="/404" element={<NotFoundPage />} />
          <Route
            path="/accountdetails"
            element={<ProtectedRoutesAuth Component={AccountDetails} />}
          />
          <Route path="/products/:id/" element={<ProductDetails />} />
          <Route path="/categorycontext" element={<CategoryContext />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
