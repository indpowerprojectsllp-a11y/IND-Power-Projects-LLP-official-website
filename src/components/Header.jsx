import { useRef } from 'react';
import Navbar from './Navbar';
import useSticky from 'hooks/useSticky';

/**
 * Header component that sticks to the top after a scroll threshold.
 */
const Header = () => {
  const stickyRef = useRef(null);
  const isSticky = useSticky(350);

  return (
    <header
      ref={stickyRef}
      className={`sticky-wrapper${isSticky ? ' is-sticky' : ''}`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
