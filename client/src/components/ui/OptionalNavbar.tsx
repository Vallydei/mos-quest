import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as React from 'react';
import NavbarDefault from './NavbarDefault';
import NavbarFixed from './NavbarFixed';

import '../pages/css/NavBar(mob).css';

function OptionNavbar(): JSX.Element {
  const [isScrollPast, setIsScrollPast] = useState<boolean>(false);

  const handleScroll = (): void => {
    if (window.scrollY >= 400) {
      setIsScrollPast(true);
      console.log('Scrolled Past');
    } else {
      setIsScrollPast(false);
      console.log('Not Past');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isScrollPast ? <NavbarFixed key="navbar-fixed" /> : <NavbarDefault />}
    </AnimatePresence>
  );
}
export default OptionNavbar;
