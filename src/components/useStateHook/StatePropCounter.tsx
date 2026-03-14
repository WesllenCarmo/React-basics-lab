import React, { useState } from "react";
type DisplayProps = {
  count: number;
};
function Display({ count }: DisplayProps) {
  return <p>Current count: {count}</p>;
}
export default function StatePropCounter() {
  const [count, setCount ] = useState<number>(0);
  return (
    <div>
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  ) 
};