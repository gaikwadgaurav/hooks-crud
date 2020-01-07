import {useState} from 'react';

export  const UseInput  = initialValue =>{
    const [ value, setValue ] = useState(initialValue)

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: e =>{
                setValue(e.target.value);
            }
        }
    };
}