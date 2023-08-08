import React, { useContext } from "react";
// Routes reemplaza a Switch
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { NosotrosScreen } from "../components/pages/nosotros/NosotrosScreen";
import { SoporteScreen } from "../components/pages/soporte/SoporteScreen";
import { FooterScreen } from "../components/shared/FooterScreen";
import { NavbarScreen } from "../components/shared/NavbarScreen";


export const AppRouter = () => {
  return (
    <Router>
      <NavbarScreen />
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="nosotros" element={<NosotrosScreen />} />
          <Route path="soporte" element={<SoporteScreen />} />
        </Routes>
        {/* <Navigate to="/home" /> */}
      </div>
      <FooterScreen />
    </Router>
  );
}
