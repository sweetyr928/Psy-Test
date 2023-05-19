import TestItem from "./testItem";

export default function TestList({ testList }) {
  return (
    <div className="container mx-auto pt-10 pb-10 overflow-y-auto scrollbar-hide">
      <div className="m-2 grid grid-cols-12 gap-2">
        {testList.map((test) => (
          <TestItem
            key={test.id}
            id={test.id}
            image={test.image}
            title={test.title}
          />
        ))}
      </div>
    </div>
  );
}
