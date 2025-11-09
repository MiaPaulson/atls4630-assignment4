import {useState, useEffect} from "react"


export default function useDebouncedState() {

    const [value, setValue] = useState("")
    const [debouncedValue, setDebouncedValue] = useState("")
    const [debouncedTime, setDebouncedTime] = useState(0)
    

    useEffect(() => {
        // handler is the value typed in, but only after 1 second (1000 ms)
        const handler = setTimeout(() => {
        setDebouncedValue(value)
        }, debouncedTime)

        // have to reset the timeout so only debounces when input is changed, not constant
        return () => {
        clearTimeout(handler)
        }
    }, [value, debouncedTime])

  return (
    <div>
        <p>set the ms of delay you want and type in a value!</p>
        <input
        type="number"
        placeholder="Debounce Time (ms)"
        value={debouncedTime}
        onChange={(e) => setDebouncedTime(Number(e.target.value))}
        ></input>

        <input
        type="text"
        placeholder="Initial Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ></input>
        
        <h3>Debounced Value:</h3>
        {debouncedValue}
      
    </div>
  );
}