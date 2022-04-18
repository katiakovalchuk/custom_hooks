import {useEffect, useState} from 'react';


const useLocalStorage = (initialValue, key) => {

    const getValue = () => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    }

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);


    return [value, setValue];
}

export default useLocalStorage;
