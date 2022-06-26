import React, { useState } from "react";

// React Hooks Props型
interface Props {
  text: string;
}
interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  // Genericsでnumberとnullを受け付ける様にする
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<UserData>({ id: 1, name: "dummy" });
  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default TestComponent;
