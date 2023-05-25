import Image from "next/image";
import { useRouter } from "next/router";

export default function TestItem({ id, image, title }) {
  const router = useRouter();
  const handleShowDetails = () => {
    router.push(`/${id}`);
  };

  return (
    <div
      className="col-span-6 md:col-span-4 lg:col-span-3 w-full bg-purple-200 cursor-pointer transition duration-200
      ease-in transform sm:hover:scale-105 hover:z-50"
      onClick={handleShowDetails}
    >
      <div className="aspect-w-3 aspect-h-2">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            paddingTop: "66.67%",
          }}
        >
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="p-3 flex flex-col justify-between h-32">
        <div className="text-xl font-semibold mb-2 text-gray-50 line-clamp-2">
          {title}
        </div>
        <div className="flex justify-center">
          <button className="bg-purple-300 text-white px-4 py-2 rounded-full">
            테스트 하러가기
          </button>
        </div>
      </div>
    </div>
  );
}
