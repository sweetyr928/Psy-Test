import Layout from "../components/layout/Layout";
import TestList from "../components/test/testList";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Home({ lists }) {
  return (
    <Layout>
      <TestList testList={lists} />
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
