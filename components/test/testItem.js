import Image from "next/image";

export default function TestItem({ id, image, title }) {
  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-3 w-full bg-purple-200">
      <div className="aspect-w-2 aspect-h-1">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="object-cover"
        />
      </div>
      <div className="p-3 flex flex-col justify-between h-32">
        <div className="text-xl font-semibold mb-2 text-gray-50 line-clamp-2">
          {title}
        </div>
        <div className="flex justify-center">
          <button className="bg-purple-400 text-white px-4 py-2 rounded-full">
            테스트 하러가기
          </button>
        </div>
      </div>
    </div>
  );
}
