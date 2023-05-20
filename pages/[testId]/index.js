import Image from "next/image";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";

export default function TestDetails() {
  const option = ["들어간다", "들어가지 않는다"];
  const answer = ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"];
  const [isClicked, setIsClicked] = useState(false);
  const [result, setResult] = useState(0);
  const handleShowResult = (idx) => {
    setResult(idx);
    setIsClicked(true);
  };

  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

  return (
    <Layout>
      {!isClicked ? (
        <div className="flex flex-col">
          <div>
            <div>깊은 숲 속에 성을 발견했다. 들어갈까 말까?</div>
          </div>
          <div>
            <Image
              src="https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg"
              alt="깊은 숲 속에 성을 발견했다. 들어갈까 말까?"
              width={400}
              height={200}
              className="object-cover"
            />
          </div>
          <div>
            {option.map((el, idx) => (
              <button
                key={idx}
                className="bg-purple-400 text-white px-4 py-2 rounded-full"
                onClick={() => handleShowResult(idx)}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>{answer[result]}</div>
      )}
    </Layout>
  );
}
