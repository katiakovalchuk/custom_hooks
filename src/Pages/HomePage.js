import useToggle from '../hooks/useToggle';
import useHover from '../hooks/useHover';
import {useRef} from "react";

const HomePage = () => {
    const button = useRef();
    const isHovering = useHover(button);
    const [isHidden, setIsHidden] = useToggle(false);

    const className = isHovering ? 'button bg-grey' : 'button';

    return (
        <div className='home-page'>
            <h1 className='home-page-title'>Home page</h1>
            <p className={isHidden ? 'display-none' : ''}>It is a global movement of more than 7 million people that are campaigning for a better world, where
                human rights are central.</p>
            <button
                className={className}
                ref={button}
                onClick={() => setIsHidden(isHidden)}
            >
                {isHidden ? 'Show description' : 'Hide description'}
            </button>
        </div>
    )
}

export default HomePage;
