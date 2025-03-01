import { useEffect, useState } from "react";

const useScreenMobile = ({
  size = 768,
  mobileFunc = () => {},
  desktopFunc = () => {}
}) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= size);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView((prevState) => {
        const newState = window.innerWidth <= size;
        if (newState !== prevState) {
          newState ? mobileFunc() : desktopFunc();
        }
        return newState;
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ensure it runs initially

    return () => window.removeEventListener("resize", handleResize);
  }, [size, mobileFunc, desktopFunc]);

  return isMobileView;
};

export default useScreenMobile;
