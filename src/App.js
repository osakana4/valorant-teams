import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TopPage from './TopPage'

function App() {
  return (
    <BrowserRouter>
      <h1>VALORANT TEAMS</h1>
      <Routes>
        <Route path="/" element={<TopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
