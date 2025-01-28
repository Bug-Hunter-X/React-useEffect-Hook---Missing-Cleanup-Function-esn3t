```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
    // Cleanup function: Executes before the component unmounts or when the dependencies change
    return () => {
      console.log('Unmounting!');
      // Perform cleanup tasks here, e.g., unsubscribing from events or clearing intervals
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```