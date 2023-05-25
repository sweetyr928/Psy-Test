import TestItem from "./testItem";

export default function TestList({ testList }) {
  return (
    <div className="container mx-auto">
      <div className="m-2 grid grid-cols-12 gap-4">
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
