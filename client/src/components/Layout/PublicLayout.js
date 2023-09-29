import React from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <RestaurantItem />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
