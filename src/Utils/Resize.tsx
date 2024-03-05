import { useState, useEffect } from "react";
import { useVideoContext } from "../Context/Context";

export default function Resize() {
  const [resize, setResize] = useState<number>(window.innerWidth);
  const { setSearch } = useVideoContext();
  const handleResize = () => {
    setResize(window.innerWidth);
    setSearch(window.innerWidth > 600 ? true : false);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [resize]);
  return { resize };
}
