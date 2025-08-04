// 1. We are using React, so we import useState from it
import { useState } from 'react';

// 2. This is our Counter component (think of it like a mini app)
function Counter() {
  // 3. We are using a React feature called useState to keep track of a number (count)
  const [count, setCount] = useState(0);

  // 4. This is what we show on the screen
  return (
    <div>
      {/* 5. Show the number */}
      <h2>Count: {count}</h2>

      {/* 6. Button to increase count by 1 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* 7. Button to decrease count by 1, but only if it’s not less than 0 */}
      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>Decrement</button>

      {/* 8. Button to reset count to 0 */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// 9. Makes this component usable in other files
export default Counter;
