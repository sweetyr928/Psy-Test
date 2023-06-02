import Image from "next/image";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";
import { db } from "../../firebaseConfig";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function TestDetails({ test }) {
  const [isClicked, setIsClicked] = useState(false);
  const [result, setResult] = useState(0);
  const [reset, setReset] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (reset) {
      router.push(`/`);
      setReset(false);
    }
  }, [reset]);

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
      })
      .catch((error) => {
        Toast.fire({
          icon: "fail",
          title: "URL 복사를 실패하였습니다!",
        });
      });
  };

  useEffect(() => {}, [isClicked]);

  return (
    <Layout handleReset={setReset}>
      <div className="flex flex-col items-center justify-center sm:mt-2 md:mt-4">
        <div className="mb-6 relative">
          <Image
            src={test.image}
            alt={test.title}
            width={700}
            height={400}
            style={{ width: 700, height: 400 }}
            className="object-cover"
            priority={true}
          />
        </div>
        {!isClicked ? (
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl font-bold text-gray-400 mb-6 text-left max-w-[900px]">
              {test.detail}
            </div>
            <div className="flex flex-col items-center justify-center">
              {test.option.map((el, idx) => (
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
            <div className="text-2xl font-bold text-gray-500 mb-4">
              테스트 결과
            </div>
            <div className="text-xl font-bold text-gray-400 mb-4 text-left max-w-[900px]">
              {test.answer[result]}
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

export async function getStaticPaths() {
  const listsCollectionRef = collection(db, "testList");
  const data = await getDocs(listsCollectionRef);
  return {
    fallback: true,
    paths: data.docs.map((doc) => ({
      params: { testId: doc.id },
    })),
  };
}

export async function getStaticProps(context) {
  const testId = context.params.testId;
  const docRef = doc(db, "testList", testId);
  const dataSnapshot = await getDoc(docRef);
  const testDetail = dataSnapshot.data();

  return {
    props: {
      test: testDetail,
    },
  };
}
