```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function
    return () => clearTimeout(intervalId);
  }, [count]);

  return <div>Count: {count}</div>;
}
```