import React from 'react';

const useScroll = () => {const [currentWidth, setCurrentWidth] = React.useState(null);

React.useEffect(() => {
  const handleResizeWindow = () => setCurrentWidth(window.pageYOffset);
  window.addEventListener("scroll", handleResizeWindow);
  return () => {
    window.removeEventListener("scroll", handleResizeWindow);
  };
}, [currentWidth]);

return [currentWidth];
};

export default useScroll
