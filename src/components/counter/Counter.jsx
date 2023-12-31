import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }

    function decrementCounterParentFunction(by) {
        setCount(count - by)
    }

    return (
      <>
        <span className="totalCount">{count}</span>
        <CounterButton by={1} 
            incrementMethod={incrementCounterParentFunction} 
            decrementMethod={decrementCounterParentFunction} 
            />
        <CounterButton by={3} 
            incrementMethod={incrementCounterParentFunction}
            decrementMethod={decrementCounterParentFunction}
            />
        <CounterButton by={5} 
            incrementMethod={incrementCounterParentFunction}
            decrementMethod={decrementCounterParentFunction}
            />
      </>
    )
}