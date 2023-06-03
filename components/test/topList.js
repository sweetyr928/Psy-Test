import { useRouter } from "next/router";
import { useCallback } from "react";

export default function TopList({ topLists }) {
  const router = useRouter();
  const handleClick = useCallback((id) => {
    router.push(`/${id}`);
  }, []);

  return (
    <div className="container mx-auto border-2 border-purple-300 p-4 rounded-lg mb-4">
      <div className="text-2xl font-bold mb-4 text-gray-600 cursor-default">
        인기 테스트 TOP 3
      </div>
      {topLists.map((el, idx) => (
        <div
          key={el.id}
          className={`${
            idx !== topLists.length - 1
              ? "mb-4 cursor-pointer"
              : "cursor-pointer"
          }`}
          onClick={() => handleClick(el.id)}
        >
          <div className="flex items-center">
            <div
              className="flex items-center justify-center w-6 h-6 
            rounded-full bg-purple-300 text-white text-lg font-semibold mr-2 hover:bg-purple-400"
            >
              {`${idx + 1}`}
            </div>
            <div className="text-lg font-semibold text-gray-500 hover:text-gray-600">
              {el.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
