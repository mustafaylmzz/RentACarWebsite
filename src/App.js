import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Araclar from './pages/Araclar';
import Hakkimizda from './pages/Hakkımızda';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/araclar" element={<Araclar/>} />
        <Route path="/hakkımızda" element={<Hakkimizda/>} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
