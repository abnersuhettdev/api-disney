import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "../pages/Character";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;