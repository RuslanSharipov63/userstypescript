import { useState } from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState();
    const [isDirty, setDirty] = useState(false) /* меняет значение в зависимости от того вышли мы из инпута или нет */
    const valid  = useValidation(value, validations)
    
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

export default useInput;