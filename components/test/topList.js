export default function TopList({ topLists }) {
  return (
    <div className="container mx-auto border-2 border-purple-300 p-4 rounded-lg">
      <div className="text-2xl font-bold mb-4 text-gray-600 cursor-default">
        인기 테스트 TOP 3
      </div>
      {topLists.map((el, idx) => (
        <div key={el.id} className="mb-4">
          <div className="flex items-center cursor-pointer">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-300 text-white text-lg font-semibold mr-2 hover:bg-purple-400">
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
