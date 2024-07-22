/* eslint-disable no-unused-vars */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ContactScreen,
  Not_foundScreen,
  ServicesScreen,
} from "./components/screens";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Services from "./pages/services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Not_foundScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
