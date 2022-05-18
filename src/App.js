import { Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Products from './pages/Products';
import TeamMembers from './pages/TeamMembers/TeamMembers';
import Productdetails from './pages/productdetails';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Productdetails />} />
      </Route>
    </Routes>
  );
}

export default App;
