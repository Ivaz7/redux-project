import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 420);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 420);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallScreen;
};