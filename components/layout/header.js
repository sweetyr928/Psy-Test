import { useCallback } from "react";

export default function Header({ handleReset }) {
  const handleClick = useCallback(() => {
    handleReset(true);
  }, []);

  return (
    <div
      className="bg-purple-300 h-24 w-screen flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="font-semibold text-4xl text-gray-50 cursor-pointer">
        오늘은 무슨 심리테스트를 해볼까?
      </div>
    </div>
  );
}
