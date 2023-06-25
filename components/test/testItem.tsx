import Image from "next/image";
import { useRouter } from "next/router";
import { db } from "../../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useCallback } from "react";

interface TestItemProps {
  id: string;
  image: string;
  title: string;
  views: number;
}

export default function TestItem({ id, image, title, views }: TestItemProps) {
  const router = useRouter();

  const handleShowDetails = useCallback(() => {
    router.push(`/${id}`);
  }, [id, router]);

  const updateViews = useCallback(
    async (id: string) => {
      const testsDoc = doc(db, "testList", id);
      const newField = { views: views + 1 };
      await updateDoc(testsDoc, newField);
      handleShowDetails();
    },
    [id]
  );

  return (
    <div
      className="col-span-6 md:col-span-4 lg:col-span-3 w-full bg-purple-200 cursor-pointer transition duration-200 
      ease-in transform sm:hover:scale-105 hover:z-50"
      onClick={() => updateViews(id)}
    >
      <div
        className="aspect-w-3 aspect-h-2"
        style={{ position: "relative", width: "100%", paddingBottom: "66.67%" }}
      >
        <div
          className="absolute inset-0"
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="object-cover"
            style={{ width: "100%", height: "100%" }}
            priority={true}
          />
        </div>
      </div>
      <div className="p-3 flex flex-col justify-between h-32">
        <div className="text-xl font-semibold mb-2 text-gray-50 line-clamp-2">
          {title}
        </div>
        <div className="flex justify-center">
          <button className="bg-purple-300 text-white px-4 py-2 rounded-full hover:bg-purple-400">
            테스트 하러가기
          </button>
        </div>
      </div>
    </div>
  );
}
