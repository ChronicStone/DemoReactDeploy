import React, { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    function decrement() {
        setCounter(counter - 1)
    }

    function increment() {
        setCounter(counter + 1)
    }

    return(
        <div className="counterBloc">
            <div onClick={decrement} className="countIncrement">-</div>
            <div className="">counter : {counter}</div>
            <div onClick={increment} className="countIncrement">+</div>
        </div>
    )
}

export default Counter