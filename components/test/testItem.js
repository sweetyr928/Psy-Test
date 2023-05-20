import Image from "next/image";

export default function TestItem({ id, image, title }) {
  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full h-96 bg-purple-200 flex flex-col items-center">
      <>
        <Image src={image} alt={title} width={400} height={200} />
      </>
      <div className="p-4 flex flex-col items-center flex-grow">
        <div className="text-xl font-semibold mb-2 text-gray-50 line-clamp-2">
          {title}
        </div>
        <div className="mt-auto">
          <button className="bg-purple-400 text-white px-4 py-2 rounded-full">
            테스트 하러가기
          </button>
        </div>
      </div>
    </div>
  );
}
