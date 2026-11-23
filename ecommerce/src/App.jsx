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

const MyContext = createContext();

function App() {
  const [OpenProductDetailsModal, setOpenProductDetailsModal] =
    React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleCloseOpenProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = { OpenProductDetailsModal, setOpenProductDetailsModal };
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
    </>
  );
}

export default App;
export { MyContext };
