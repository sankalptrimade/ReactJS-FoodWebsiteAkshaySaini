import { useState } from "react";

const User = ({ name, location }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="user-card">
      <h1>Count1: {count1}</h1>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Increase Count
      </button>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @sankalptrimade0014</h4>
    </div>
  );
};

export default User;
