/* eslint-disable react/jsx-no-target-blank */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Home from "./pages/home";
import { Not_foundScreen } from "./components/screens";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />}>
            <Route path="/services/cybersecurity" element={<Services />} />
          </Route>
          <Route path="*" element={<Not_foundScreen />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
