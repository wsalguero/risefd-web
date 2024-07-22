/* eslint-disable react/jsx-no-target-blank */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout_main } from "./layouts";
import {
  ContactScreen,
  HomeScreen,
  Not_foundScreen,
  ServicesScreen,
} from "./components/screens";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout_main />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="contact" element={<ContactScreen />} />
            <Route path="services" element={<ServicesScreen />} />
            <Route path="*" element={<Not_foundScreen />} />
            <Route path="" element={<ServicesScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
