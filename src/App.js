import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TopPage from './TopPage'
import Provider from './TotalProvider'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <h1>VALORANT TEAMS</h1>
        <Routes>
          <Route path="/" element={<TopPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
