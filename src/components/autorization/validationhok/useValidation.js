import { useEffect, useState } from "react"

const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'ieEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
            }
        }
    }, [value])

    return {
        isEmpty,
        minLengthError
    }
}

export default useValidation;