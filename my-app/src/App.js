import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Listbox from './pages/Listbox';
import Table from './pages/Table';
import Buton from './pages/Buton';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/listbox">1.SAYFA</Link></li>
          <li><Link to="/table">2.SAYFA</Link></li>
          <li><Link to="/buton.combobox.textbox">3.SAYFA</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/listbox" element={<Listbox />} />
        <Route path="/table" element={<Table />} />
        <Route path="/buton.combobox.textbox" element={<Buton />} />
      </Routes>
    </div>
  );
}

export default App;