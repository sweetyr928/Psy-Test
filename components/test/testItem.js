import Image from "next/image";

export default function TestItem({ id, image, title }) {
  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full bg-purple-200">
      <Image src={image} alt={title} width={400} height={300} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-50">{title}</h3>
        <button className="bg-purple-400 text-white px-4 py-2 rounded-full">
          Go!
        </button>
      </div>
    </div>
  );
}
