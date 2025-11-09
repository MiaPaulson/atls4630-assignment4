import { useState, useEffect } from "react"

export default function UseTypeWriter() {
    const [value, setValue] = useState("")
    const [typewrtierValue, setTypewriterValue] = useState("")

    // will increase each time the setInterval is run because will run after 100ms, then run again after the next 100ms, etc.
    const delay = 100

    useEffect(() => {
        // reset every time text changes
        setTypewriterValue("")
        let index = 0
        
        //setInterval runs the functiona after every passing delay
        // will find the value's index and post it after 100 ms for every letter that passes
        const interval = setInterval(() => {
            index++
            setTypewriterValue(value.slice(0, index))
            // stop when done
            if (index === value.length) {
                clearInterval(interval) 
            }
        }, delay)

        // stop timer if text changes
        return () => 
            clearInterval(interval)
        }, [value, delay])

    return(
        <div>
            <p>{typewrtierValue}</p>
            <input
            type="text"
            value={value}
            onChange = {(e) => setValue(e.target.value)}
            ></input>
        </div>
    )
}