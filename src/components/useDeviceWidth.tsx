import { useState, useEffect } from 'react';

export default function useTablet(customSize?: number) {
  const [tablet, setDesktop] = useState(true);

  useEffect(() => {
    function showOnDesktop() {
      if (window.innerWidth > (customSize || 768)) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    }

    showOnDesktop();
    window.addEventListener('resize', showOnDesktop);

    return () => {
      window.removeEventListener('resize', showOnDesktop);
    };
  }, [customSize]);

  return tablet;
}
