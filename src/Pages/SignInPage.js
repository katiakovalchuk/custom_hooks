import {Navigate} from 'react-router-dom';
import useInput from "../hooks/useInput";

const SignInPage = ({user}) => {
    const userName = useInput('', {minLength: 3, maxLength: 20});
    const password = useInput('', {minLength: 3, maxLength: 20});

    return (
        (user && user.loggedIn) ? (
            <Navigate to='/'/>
        ) : (
            <div className='form'>
                <form onSubmit={() => {
                    localStorage.setItem('user', JSON.stringify({name: userName.value, loggedIn: true}))
                }}>
                    <div className='input-container'>
                        {(userName.minLength || userName.maxLength || password.minLength || password.maxLength)  && <div style={{color: 'rosybrown'}}>Each field should contain from 3 to 20 symbols</div>}
                        <label>Username </label>
                        <input
                            {...userName}
                            type='text' required
                        />
                    </div>
                    <div className='input-container'>
                        <label>Password </label>
                        <input
                            {...password}
                            type='password'
                            required
                        />
                    </div>
                    <div className='button-container'>
                        <button className='signin-button'>Sign In</button>
                    </div>
                </form>
            </div>)
    )
}

export default SignInPage;
