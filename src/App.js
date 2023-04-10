import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BukuListing from './BukuListing';
import BukuCreate from './BukuCreate';
import BukuDetail from './BukuDetail';
import BukuEdit from './BukuEdit';

import KaryawanListing from './Karyawan/KaryawanListing';
import KaryawanCreate from './Karyawan/KaryawanCreate';
import KaryawanDetail from './Karyawan/KaryawanDetail';
import KaryawanEdit from './Karyawan/KaryawanEdit';

function App() {
  return (
    <div className="App">
      <h1>CRUD WITH JSON-SERVER</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BukuListing />}></Route>
          <Route path='/buku/create' element={<BukuCreate />}></Route>

          <Route path='/buku/detail/:bukuid' element={<BukuDetail />}></Route>
          <Route path='/buku/edit/:bukuid' element={<BukuEdit />}></Route>

          <Route path='/karyawan' element={<KaryawanListing />}></Route>
          <Route path='/Karyawan/create' element={<KaryawanCreate />}></Route>

          <Route path='/Karyawan/detail/:karyawanid' element={<KaryawanDetail />}></Route>
          <Route path='/Karyawan/edit/:karyawanid' element={<KaryawanEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
