import {useEffect, useState} from 'react';


const useValidation = (value, validations) => {
    const [minLength, setMinLength] = useState(false);
    const [maxLength, setMaxLength] = useState(false);

    useEffect(() => {
        for (const element in validations) {
            switch (element) {
                case 'minLength':
                    value.length < validations[element] ? setMinLength(true) : setMinLength(false);
                    break;

                case 'maxLength':
                    value.length > validations[element] ? setMaxLength(true) : setMaxLength(false);
                    break;
            }
        }
    }, [value])

    return {
        minLength,
        maxLength
    }
}

export default useValidation;
