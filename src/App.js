import React, { useState } from 'react';
function App() {
  // Declare state variable for counter
  const [count, setCount] = useState(0);  
 // Used to manage state in functional components-Usestate
  // Function to handle button click
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App (Functional Component)</h1>
      <p style={{ fontSize: '24px' }}>Count: {count}</p>
      <button onClick={increment} style={{ padding: '10px 20px', fontSize: '18px' }}>
        Increment
      </button>
    </div>
  );
}
export default App;
