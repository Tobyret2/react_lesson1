import React, {useState} from 'react'; /*rsc*/

const Counter = () => {
    const [count,setCount] = useState(0)

    function increments() {
        setCount(count + 1)
    }

    function decrements() {
        setCount(count + -1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increments}>добавить лайки</button>
            <button onClick={decrements}>удалить лайки</button>
        </div>
    );
};

export default Counter;