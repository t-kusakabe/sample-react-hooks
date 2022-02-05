import { useState, useEffect, useCallback, useMemo, memo } from 'react';

import { Child } from 'components/Child';

const ChildMemo = memo(Child);

const Top = () => {
  console.log('render App');
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const double = (count: number) => {
    let i: number = 0;

    while (i < 1000000000) i++;

    return count * 2;
  };


  const Counter = useMemo(() => {
    console.log('render Counter');
    const doubledCount = double(count2);

    return (
      <p>Counter: {count2}, {doubledCount}</p>
    )
  }, [count2]);

  return (
    <div>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      {Counter}
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </div>
  );
};

export default Top;
