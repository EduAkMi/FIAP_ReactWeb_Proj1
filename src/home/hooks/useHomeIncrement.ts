// Types
import { useState } from "react";

export default function useHomeIncrement(){
    const [count, setCounter] = useState<number>(0);

    function increment(value: number){
        setCounter(count + value)
    }

    return {
        increment,
        count
    }
}
