import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrasion from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register" element={<Registrasion />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
