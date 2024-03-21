import React, { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Lazy load components
const AdminDashboard = lazy(() => import('../component/admin/AdminDashboard'));
const PageNotFound = lazy(() => import('../component/PageNotFound'));
const Information = lazy(() => import('../component/user/Information'));
const UserLayout = lazy(() => import('../layout/UserLayout'));
const AdminLayout = lazy(() => import('../layout/AdminLayout'));
const AuthLayout = lazy(() => import('../layout/AuthLayout'));
const Home = lazy(() => import('../component/user/Home'));
const About = lazy(() => import('../component/user/About'));
const Contact = lazy(() => import('../component/user/Contact'));
const SignUp = lazy(() => import('../component/auth/SignUp'));
const SignIn= lazy(() => import('../component/auth/SignIn'));




// Create MainRouter component
export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Routes for user */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Information />} />
        <Route path="" element={<Home/>} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="/Auth" element={<AuthLayout />}>
        <Route path="SignIn" element ={<SignIn />} />
        <Route path="SignUp" element ={<SignUp />} />
      </Route>
    


      {/* Routes for admin */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* Nested route for admin dashboard */}
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
 
   



      {/* Route for handling 404 (page not found) */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
