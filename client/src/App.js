import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing_page from "./Landing_page";
import Postview from "./postview/Postview";
import Upload from "./Upload";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/postview" element={<Postview />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
