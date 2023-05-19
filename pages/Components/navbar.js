export default function NavBar() {
  const category = ["연애", "성향", "이상형", "우정", "가치관", "직업"];

  return (
    <nav className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around">
          {category.map((el, idx) => (
            <div
              className="text-purple-300 hover:text-purple-400 px-3 py-2 rounded-md font-medium"
              key={idx}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
