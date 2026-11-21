import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import ProduceListing from "./components/pages/ProductListing";
import Productdetails from "./components/pages/Productdetails";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Product-listing"} element={<ProduceListing />} />
        <Route path={"/Product-details/"} element={<Productdetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
