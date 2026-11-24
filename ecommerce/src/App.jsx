import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import ProduceListing from "./components/pages/ProductListing";
import Productdetails from "./components/pages/Productdetails";
import { createContext } from "react";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import ProductDetailsItem from "./components/ProductDetailsItem/ProductDetailsItem";
import { IoIosClose } from "react-icons/io";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import CartPage from "./components/pages/Cartitem";
import ForgetPassword from "./components/pages/ForgetPassword";
import VerifyOTP from "./components/RecoverPassword/OtpVarify";
import ResetPassword from "./components/RecoverPassword/RecoverPassword";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./components/pages/CheckOut";
import Profile from "./components/pages/MyProfile";

const MyContext = createContext();

function App() {
  const [islogin, setislogin] = React.useState(true);
  const [OpenProductDetailsModal, setOpenProductDetailsModal] =
    React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleCloseOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {
    OpenProductDetailsModal,
    setOpenProductDetailsModal,
    islogin,
    setislogin,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Product-listing"} element={<ProduceListing />} />
          <Route path={"/Product-details/:id"} element={<Productdetails />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/registration"} element={<Registration />} />
          <Route path={"/cart-items"} element={<CartPage />} />
          <Route path={"/password-recovary"} element={<ForgetPassword />} />

          <Route path={"/checkout"} element={<Checkout />} />

          <Route
            path={"/password-recovary/otp-verify"}
            element={<VerifyOTP />}
          />
          <Route
            path={"/password-recovary/reset-password"}
            element={<ResetPassword />}
          />

          <Route path={"/profile"} element={<Profile />} />
        </Routes>
        <Footer />
      </MyContext.Provider>

      <Dialog
        open={OpenProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseOpenProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
        className="product-details-modal"
      >
        <DialogContent>
          <div className="modal-content">
            <ProductDetailsItem />
            <button
              onClick={handleCloseOpenProductDetailsModal}
              className="product-details-modal-close-icon"
            >
              <IoIosClose />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
export { MyContext };
