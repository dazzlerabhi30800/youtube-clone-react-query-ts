import { useState, useEffect } from "react";

export default function Resize() {
  const [resize, setResize] = useState<number>(window.innerWidth);
  const handleResize = () => {
    setResize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [resize]);
  return { resize };
}
