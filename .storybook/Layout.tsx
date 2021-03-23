import React, { useContext } from 'react';
import '../src/index.css';
import ThemeToggler from './../src/context/ThemeToggler';
import name from 'module';
import { ThemeContext, ThemeProvider } from '../src/context/ThemeContext';

interface LayoutProps {}

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
