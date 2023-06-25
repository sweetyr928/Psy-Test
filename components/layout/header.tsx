import { useEffect, useState, useCallback } from "react";

export default function Header({ handleReset }) {
  const [fontSize, setFontSize] = useState<number>(37);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const calculatedFontSize = Math.min(viewportWidth / 20, 37);
      setFontSize(calculatedFontSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = useCallback(() => {
    handleReset(true);
  }, []);

  return (
    <div
      className="h-24 w-screen flex justify-center items-center cursor-pointer 
    bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 sticky top-0"
      onClick={handleClick}
      style={{ fontSize: `${fontSize}px` }}
    >
      <div className="font-semibold text-white cursor-pointer">
        오늘은 무슨 심리테스트를 해볼까?
      </div>
    </div>
  );
}
