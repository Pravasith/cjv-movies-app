import { useState } from "react"

const useForm = initialValue => {
    const [values, setValues] = useState(initialValue)

    return {
        values,
        handler: e => {
            // if (e.target.value.length >= 4)
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            })
        },
    }
}

export default useForm
