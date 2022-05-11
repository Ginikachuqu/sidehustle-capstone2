import { Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Products from './pages/Products';
import TeamMembers from './pages/TeamMembers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/teammembers" element={<TeamMembers />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
