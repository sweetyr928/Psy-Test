import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import TestList from "../components/test/testList";
// 파이어베이서 파일에서 import 해온 db
import { db } from "../firebaseConfig";
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, getDocs } from "firebase/firestore";

const DUMMY_TEST = [
  {
    id: 1,
    title:
      "깊은 숲 속에 성을 발견했다. 들어갈까 말까? 깊은 숲 속에 성을 발견했다. 들어갈까 말까?  깊은 숲 속에 성을 발견했다. 들어갈까 말까? ",
    detail:
      "어느날 꿈에서 깨어난 당신. 눈을 떠보니 숲 속에 혼자 있었다. 정신을 차리고보니 저 멀리에 크고 오래된 성이 보인다. 가까이 가보니....",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 2,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    detail:
      "어느날 꿈에서 깨어난 당신. 눈을 떠보니 숲 속에 혼자 있었다. 정신을 차리고보니 저 멀리에 크고 오래된 성이 보인다. 가까이 가보니....",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 3,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    detail:
      "어느날 꿈에서 깨어난 당신. 눈을 떠보니 숲 속에 혼자 있었다. 정신을 차리고보니 저 멀리에 크고 오래된 성이 보인다. 가까이 가보니....",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 4,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    detail:
      "어느날 꿈에서 깨어난 당신. 눈을 떠보니 숲 속에 혼자 있었다. 정신을 차리고보니 저 멀리에 크고 오래된 성이 보인다. 가까이 가보니....",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 5,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    detail:
      "어느날 꿈에서 깨어난 당신. 눈을 떠보니 숲 속에 혼자 있었다. 정신을 차리고보니 저 멀리에 크고 오래된 성이 보인다. 가까이 가보니....",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 6,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    detail:
      "어느날 꿈에서 깨어난 당신. 눈을 떠보니 숲 속에 혼자 있었다. 정신을 차리고보니 저 멀리에 크고 오래된 성이 보인다. 가까이 가보니....",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 7,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    detail:
      "어느날 꿈에서 깨어난 당신. 눈을 떠보니 숲 속에 혼자 있었다. 정신을 차리고보니 저 멀리에 크고 오래된 성이 보인다. 가까이 가보니....",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 8,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    detail:
      "어느날 꿈에서 깨어난 당신. 눈을 떠보니 숲 속에 혼자 있었다. 정신을 차리고보니 저 멀리에 크고 오래된 성이 보인다. 가까이 가보니....",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 9,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    detail:
      "어느날 꿈에서 깨어난 당신. 눈을 떠보니 숲 속에 혼자 있었다. 정신을 차리고보니 저 멀리에 크고 오래된 성이 보인다. 가까이 가보니....",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
];

export default function Home() {
  const [list, setList] = useState([]);
  const listsCollectionRef = collection(db, "testList");

  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getLists = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(listsCollectionRef);
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getLists();
  }, []);

  return (
    <Layout>
      <TestList testList={list} />
    </Layout>
  );
}
