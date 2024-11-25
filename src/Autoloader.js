import { useEffect } from 'react';

const useAutoReload = () => {
  useEffect(() => {
    let hasReloaded = false;

    const handleVisibilityChange = () => {
      console.log(`Document visibility: ${document.visibilityState}`); // Debug log
      if (document.visibilityState === 'visible' && !hasReloaded) {
        hasReloaded = true; // Prevent multiple reloads
        window.location.reload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};

export default useAutoReload;
