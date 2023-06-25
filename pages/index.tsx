import Layout from "../components/layout/Layout";
import TestList from "../components/test/testList";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import TopList from "../components/test/topList";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryAtom } from "../store/categoryAtom";
import { Test } from "../type/interface";

interface HomeProps {
  lists: Test[];
  topLists: Test[];
}

export default function Home({ lists, topLists }: HomeProps): JSX.Element {
  const [reset, setReset] = useState<boolean>(false);
  const [testList, setTestList] = useState<Test[]>(lists);
  const category = useRecoilValue<string>(categoryAtom);
  const setCategory = useSetRecoilState<string>(categoryAtom);

  useEffect(() => {
    if (category.length) {
      setTestList(lists.filter((el: Test) => el.category === category));
    }
  }, [category]);

  useEffect(() => {
    if (reset) {
      setTestList(lists);
      setReset(false);
      setCategory("");
    }
  }, [reset]);

  return (
    <Layout handleReset={setReset}>
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

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const listsCollectionRef = collection(db, "testList");
  const data = await getDocs(listsCollectionRef);
  const lists: Test[] = data.docs
    .map((doc) => ({ ...doc.data(), id: doc.id } as Test))
    .sort((a, b) => +b.id - +a.id);
  const topLists: Test[] = data.docs
    .map((doc) => ({ ...doc.data(), id: doc.id } as Test))
    .sort((a, b) => +b.id - +a.id)
    .sort((a, b) => +b.views - +a.views)
    .slice(0, 3);

  return {
    props: {
      lists,
      topLists,
    },
  };
}
