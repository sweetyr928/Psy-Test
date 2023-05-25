export default function NavBar({ changeCategory, handleClick }) {
  const category = ["연애", "성향", "이상형", "우정", "가치관", "직업"];
  const handleCategory = (idx) => {
    changeCategory(category[idx]);
    handleClick(true);
  };

  return (
    <nav className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around">
          {category.map((el, idx) => (
            <button
              className="text-purple-300 hover:text-purple-400 px-3 py-2 rounded-md font-medium"
              key={idx}
              onClick={() => handleCategory(idx)}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
