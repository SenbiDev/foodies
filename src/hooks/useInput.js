import { useState } from "react";

function useInput(value) {
    const [inputs, setInputs] = useState(value);

    return [inputs, (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }]
}

export default useInput;