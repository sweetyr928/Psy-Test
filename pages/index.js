import Layout from "../components/layout/Layout";
import TestList from "../components/test/testList";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import TopList from "../components/test/topList";

export default function Home({ lists, topLists }) {
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
      setCategory("");
    }
  }, [reset]);

  return (
    <Layout
      handleReset={setReset}
      changeCategory={setCategory}
      handleClick={setIsClicked}
    >
      {!category.length ? <TopList topLists={topLists} /> : null}
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
  const lists = data.docs
    .map((doc) => ({ ...doc.data(), id: doc.id }))
    .sort((a, b) => b.id - a.id);
  const topLists = data.docs
    .map((doc) => ({ ...doc.data(), id: doc.id }))
    .sort((a, b) => b.id - a.id)
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return {
    props: {
      lists,
      topLists,
    },
  };
}
