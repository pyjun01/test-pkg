import * as react_jsx_runtime from 'react/jsx-runtime';

declare function Counter(): react_jsx_runtime.JSX.Element;

type Count = number;
interface BB {
    count: Count;
    test: () => void;
}

export { BB, Count, Counter };
