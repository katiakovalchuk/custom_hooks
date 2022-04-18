import {useEffect, useState} from 'react';


const useValidation = (value, validations) => {

    const [minLength, setMinLength] = useState(false);
    const [maxLength, setMaxLength] = useState(false);
    const [regex, setRegex] = useState(false);

    useEffect(() => {
        for (const element in validations) {
            switch (element) {
                case 'minLength':
                    value.length < validations[element] ? setMinLength(true) : setMinLength(false);
                    break;
                case 'maxLength':
                    value.length > validations[element] ? setMaxLength(true) : setMaxLength(false);
                    break;
                case 'regex':
                    !validations[element].test(value) ? setRegex(true) : setRegex(false);
            }
        }
    }, [value, validations])


    return {
        minLength,
        maxLength,
        regex
    }
}

export default useValidation;
