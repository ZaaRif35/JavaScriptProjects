import {useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(
      function updateTitle() {
        document.title = `You clicked ${count} times`;
      },
      [count],
    );

    function incrementCount() {
        setCount(count + 1)

    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>
                Click Me
            </button>
        </div>
    );
}