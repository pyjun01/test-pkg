"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Counter: () => Counter
});
module.exports = __toCommonJS(src_exports);

// src/f.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Counter() {
  const [cnt, setCnt] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    "Count: ",
    cnt,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => setCnt(cnt + 1), children: "increase" })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Counter
});
//# sourceMappingURL=index.cjs.map