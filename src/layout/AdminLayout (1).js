// AdminLayout.js
import React from 'react';
import AdminSidebar from '../components/Admin/Admin.Sidebar';
import { AppFooter, AppHeader } from '../components';
import { Outlet } from 'react-router-dom';
// import Dashboard from '../views/admin/dashboard/dashboard';
import AdminContent from '.././components/Admin/AdminContent';


const AdminLayout = () => {
  return (
    <div>
      <AdminSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <Outlet /> 
          <AdminContent /> {/* This will render the dashboard component */}
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default AdminLayout;