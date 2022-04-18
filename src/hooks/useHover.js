import {useEffect, useState} from 'react';


const useHover = ref => {
    const [isHovering, setHovering] = useState(false);

    const setOn = () => setHovering(true);
    const setOff = () => setHovering(false);

    useEffect(() => {
        if (!ref.current) return;
        const target = ref.current;

        target.addEventListener('mouseenter', setOn);
        target.addEventListener('mousemove', setOn);
        target.addEventListener('mouseleave', setOff);

        return () => {
            target.removeEventListener('mouseenter', setOn);
            target.removeEventListener('mousemove', setOn);
            target.removeEventListener('mouseleave', setOff);
        }
    })

    return isHovering;
}

export default useHover;
