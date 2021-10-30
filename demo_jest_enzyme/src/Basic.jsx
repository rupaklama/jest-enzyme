import { useState } from 'react';

const Basic = () => {
  const [count, setCount] = useState(0);

  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        The counter is currently <span data-test='count'>{count}</span>
      </h1>

      <button data-test='increment-button' onClick={() => setCount(count + 1)}>
        Increment counter
      </button>

      <button data-test='decrement-button' onClick={() => setCount(count - 1)}>
        Decrement counter
      </button>
    </div>
  );
};

export default Basic;
