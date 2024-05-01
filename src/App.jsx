import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";

// import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));



function App() { 
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(refreshUser());    
  }, [dispatch]);

  return  (<>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/register" element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>} />
        <Route path="/login" element={<RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>} />
          <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Layout>
      
  </>
  )
}

export default App;