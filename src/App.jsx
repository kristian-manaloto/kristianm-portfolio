import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './components/sections/NotFound';
import { Home } from './components/sections/Home'; //TODO change this back to Home

function App() {
  return (
    <>
      <BrowserRouter basename="/kristianm-portfolio">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
