import Layout from "../components/layout/Layout";
import Header from "../components/layout/header";
import NavBar from "../components/layout/navbar";
import TestList from "../components/test/testList";

const DUMMY_TEST = [
  {
    id: 1,
    title:
      "깊은 숲 속에 성을 발견했다. 들어갈까 말까? 깊은 숲 속에 성을 발견했다. 들어갈까 말까?  깊은 숲 속에 성을 발견했다. 들어갈까 말까? ",
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
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 3,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 4,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 5,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 6,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 7,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 8,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
  {
    id: 9,
    title: "깊은 숲 속에 성을 발견했다. 들어갈까 말까?",
    image:
      "https://a.cdn-hotels.com/gdcs/production143/d584/9d0b3a81-4f8a-4f26-8aad-9c165dff75fa.jpg",
    option: ["들어간다", "들어가지 않는다"],
    answer: ["당신은 용감한 사람!", "당신은 겁이 많은 사람!"],
  },
];

export default function Home() {
  return (
    <Layout>
      <TestList testList={DUMMY_TEST} />
    </Layout>
  );
}
