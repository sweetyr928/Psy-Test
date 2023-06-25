import TestItem from "./testItem";
import { Test } from "../../type/interface";

interface TestListProps {
  testList: Test[];
}

export default function TestList({ testList }: TestListProps): JSX.Element {
  return (
    <div className="mobile-width container mx-auto">
      <div className="mt-2 grid grid-cols-12 gap-4">
        {testList.map((test: Test) => (
          <TestItem
            key={test.id}
            id={test.id}
            image={test.image}
            title={test.title}
            views={test.views}
          />
        ))}
      </div>
    </div>
  );
}
