import React from 'react';
import Navbar from '../Navbar';
import {LayoutWrapper} from './styles';

function Layout({children}) {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  );
}

export default Layout;
