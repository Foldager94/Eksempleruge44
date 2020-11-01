import React, { useEffect, useState } from 'react';

const Counter = (props) => {
    const presetting = 0;
    if (localStorage["count"] == undefined) {
        localStorage["count"] = presetting;
    }
    const [count, setCount] = useState(Number(localStorage["count"]));

    useEffect(() => {
        localStorage.setItem("count", count);
        console.log(count);
    })
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(prevCount + props.increment)}>Increment</button>
            <button onClick={() => setCount(prevCount - props.increment)}>Decrement</button>
        </>
    );
}
const App2 = () => {
    return (
        <div>
            <Counter increment={2} />
        </div>
    );
};

export default App2;