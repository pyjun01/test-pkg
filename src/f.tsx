import { useState } from "react";

export function Counter() {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
      Count: {cnt}
      <button onClick={() => setCnt(cnt+1)}>increase</button>
      </div>
  );
}