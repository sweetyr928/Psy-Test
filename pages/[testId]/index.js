import Image from "next/image";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function TestDetails() {
  const detail =
    "어느날 꿈에서 깨어난 당신. 눈을 떠보니 숲 속에 혼자 있었다. 정신을 차리고보니 저 멀리에 크고 오래된 성이 보인다. 가까이 가보니 꽤 낡고 허름해 보이는데... 왠지 들어가보고 싶다.";
  const option = ["들어간다", "들어가지 않는다"];
  const answer = ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"];
  const [isClicked, setIsClicked] = useState(false);
  const [result, setResult] = useState(0);

  const handleShowResult = (idx) => {
    setResult(idx);
    setIsClicked(!isClicked);
  };

  const handleRetest = () => {
    setIsClicked(!isClicked);
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleCopyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "URL이 클립보드에 복사되었습니다!",
        });
        console.log("URL copied to clipboard:", currentURL);
      })
      .catch((error) => {
        Toast.fire({
          icon: "fail",
          title: "URL 복사를 실패하였습니다!",
        });
        console.error("Failed to copy URL:", error);
      });
  };

  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center my-12">
        <div className="mb-6">
          <Image
            src="https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg"
            alt="깊은 숲 속에 성을 발견했다. 들어갈까 말까?"
            width={500}
            height={350}
            className="object-cover"
          />
        </div>
        {!isClicked ? (
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl font-bold text-gray-400 mb-6 text-center text-ellipsis tracking-wider w-1/2 ">
              {detail}
            </div>
            <div className="flex flex-col items-center justify-center">
              {option.map((el, idx) => (
                <button
                  key={idx}
                  className="bg-purple-300 text-white px-4 py-2 rounded-full mb-4 w-full"
                  onClick={() => handleShowResult(idx)}
                >
                  {el}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-gray-400 mb-4 text-center">
              {answer[result]}
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-purple-300 text-white px-4 py-2 rounded-full mb-4 w-full mr-2"
                onClick={handleCopyURL}
              >
                <ShareIcon />
              </button>
              <button
                className="bg-purple-300 text-white px-4 py-2 rounded-full mb-4 w-full"
                onClick={handleRetest}
              >
                <ReplayIcon />
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
