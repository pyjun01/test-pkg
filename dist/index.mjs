// src/f.tsx
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function Counter() {
  const [cnt, setCnt] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    "Count: ",
    cnt,
    /* @__PURE__ */ jsx("button", { onClick: () => setCnt(cnt + 1), children: "increase" })
  ] });
}
export {
  Counter
};
