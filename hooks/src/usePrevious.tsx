import { useEffect, useRef, useState } from "react"

export default function UsePrevious() {
    const [count, setCount] = useState(0)
    // const previousCount = UsePrevious(count)

    const ref = useRef(count)
    // after every render, store the current value
    useEffect(() => {
        ref.current = count
    }, [count]);

    const previousCount = ref.current

    return (
        <div>
            <p>Current: {count}</p>
            <p>Previous: {previousCount ?? "none"}</p>

            <button
            onClick = {() => setCount(count + 1)}
            >+</button>
            <button
            onClick = {() => setCount(count - 1)}
            >-</button>
        </div>
    )
}