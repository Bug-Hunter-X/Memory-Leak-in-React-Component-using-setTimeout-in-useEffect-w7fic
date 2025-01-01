# React UseEffect setTimeout Memory Leak
This repository demonstrates a common error in React: using setTimeout within the useEffect hook without proper cleanup. This can lead to memory leaks and unexpected behavior.

## The Bug
The `bug.js` file shows a React component that uses `setTimeout` inside `useEffect` to increment a counter every second. The problem is that the `setTimeout` is not cleaned up when the component unmounts or when the effect dependencies change. This means that even after the component is removed from the DOM, the `setTimeout` continues to run, potentially causing memory leaks and unexpected updates to state.

## The Solution
The `bugSolution.js` file shows the corrected component.  It uses the return value of `useEffect` to add a cleanup function that cancels the `setTimeout` before the component unmounts or when the effect dependencies change.