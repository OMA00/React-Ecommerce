import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hompage from "./Pages/Hompage";
import Catalogue from "./Pages/Catalogue";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/" element={<Catalogue />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
