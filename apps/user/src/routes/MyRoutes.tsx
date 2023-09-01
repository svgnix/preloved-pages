import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/home-page/HomePage';
import Shop from '../pages/shop/Shop';
import Contact from '../pages/contact/Contact';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Product from '../pages/product/Product';
import Cart from '../pages/cart/Cart';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import PrivateRoute from './ProtectedRoute';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />{' '}
          <Route path='/cart' element={<PrivateRoute component={Cart} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<PrivateRoute component={Login} />} />
          <Route path='/register' element={<PrivateRoute component={Register} />} />
          <Route path='/product/:id' element={<Product />} />
          <Route
            path='/admin/dashboard'
            element={<PrivateRoute isAdmin={true} component={Dashboard} />}
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
