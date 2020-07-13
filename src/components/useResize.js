import React from 'react';

const useResize = () => {const [currentWidth, setCurrentWidth] = React.useState(null);

React.useEffect(() => {
  const handleResizeWindow = () => setCurrentWidth(window.innerWidth);
  window.addEventListener("resize", handleResizeWindow);
  return () => {
    window.removeEventListener("resize", handleResizeWindow);
  };
}, [currentWidth]);

return [currentWidth];
};

export default useResize
