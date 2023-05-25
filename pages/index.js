import Layout from "../components/layout/layout";
import TestList from "../components/test/testList";
import NavBar from "../components/layout/navbar";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Home({ lists }) {
  const [category, setCategory] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [reset, setReset] = useState(false);
  const [testList, setTestList] = useState(lists);

  useEffect(() => {
    if (isClicked) {
      setTestList(lists.filter((el) => el.category === category));
      setIsClicked(!isClicked);
    }
  }, [isClicked]);

  useEffect(() => {
    if (reset) {
      setTestList(lists);
      setReset(false);
    }
  }, [reset]);

  return (
    <Layout handleReset={setReset}>
      <NavBar
        className="sticky top-0"
        changeCategory={setCategory}
        handleClick={setIsClicked}
      />
      {testList.length ? (
        <TestList testList={testList} />
      ) : (
        <div className="flex flex-col items-center justify-center my-28">
          <div className="text-2xl font-bold text-gray-400">
            아직 준비된 테스트가 없습니다.
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const listsCollectionRef = collection(db, "testList");
  const data = await getDocs(listsCollectionRef);
  const testArr = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: {
      lists: testArr,
    },
  };
}
