import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout Component
 *
 * Wraps the main page content with consistent site-wide elements
 * such as the header and footer.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content to be rendered between header and footer.
 * @returns {JSX.Element}
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
