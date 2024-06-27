import { useState, useEffect } from "react";

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height,
  } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [
    windowDimensions,
    setWindowDimensions,
  ] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener(
      "resize",
      handleResize
    );
    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return windowDimensions;
}

//Desktop screens: range from 1024×768 to 1920×1080
//Mobile devices: range from 360×640 to 414×896
//Tablets: range from 601×962 to 1280×800
