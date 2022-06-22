import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TopPage from './TopPage'
import PersonalRecord from './PersonalRecord'
import Provider from './TotalProvider'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <h1>VALORANT TEAMS</h1>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/PersonalRecord" element={<PersonalRecord />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
