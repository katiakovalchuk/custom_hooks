import {Navigate} from 'react-router-dom';
import useInput from "../hooks/useInput";

const SignInPage = ({user}) => {
    const userNameValidator = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    const userName = useInput('', {minLength: 8, maxLength: 30, regex: userNameValidator});
    const password = useInput('', {minLength: 8, maxLength: 30, regex: passwordValidator});

    const isUserNameInValid = userName.minLength || userName.maxLength || userName.regex;
    const isPasswordNameInValid = password.minLength || password.maxLength || password.regex;

    return (
        (user && user.loggedIn) ? (
            <Navigate to='/'/>
        ) : (
            <div className='form'>
                <form onSubmit={() => {
                    localStorage.setItem('user', JSON.stringify({name: userName.value, loggedIn: true}))
                }}>
                    <div className='input-container'>
                        {(isUserNameInValid || isPasswordNameInValid)  && <div style={{color: 'rosybrown'}}>Please enter correct {isUserNameInValid ? 'username' : 'password'}. Each field should contain from 3 to 20 symbols. Password should contain at least one capital letter, one number and length should be at least 8 symbols.</div>}
                        <label>Username </label>
                        <input
                            value={userName.value}
                            onChange={userName.onChange}
                            type='text' required
                        />
                    </div>
                    <div className='input-container'>
                        <label>Password </label>
                        <input
                            value={password.value}
                            onChange={password.onChange}
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
