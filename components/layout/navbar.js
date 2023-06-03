import { useSetRecoilState } from "recoil";
import { categoryAtom } from "../../store/categoryAtom";
import { useRouter } from "next/router";

export default function NavBar() {
  const category = ["연애", "이상형", "성향", "직업"];
  const setCategory = useSetRecoilState(categoryAtom);

  const router = useRouter();

  const handleCategory = (idx) => {
    setCategory(category[idx]);
    if (router.pathname !== `/`) router.push(`/`);
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
