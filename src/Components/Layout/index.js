import {NavLink, Outlet} from 'react-router-dom';
import './index.css';

const Layout = ({user}) => {
    return (
        <div className='wrapper'>
            <header>
                <nav className='navbar'>
                    <ul className='nav-list'>
                        <li className='list-item'><NavLink to='/' className='list-text'>Home</NavLink></li>
                        <li className='list-item'><NavLink to='/about' className='list-text'>About</NavLink></li>
                        <li className='list-item'><NavLink to='/posts/page1' className='list-text'>Posts</NavLink></li>
                        {
                            (user && user.loggedIn) ? (
                                <li className='list-item'><NavLink to='/login' className='list-text disabled'>Logged
                                    In</NavLink></li>
                            ) : (
                                <li className='list-item'><NavLink to='/login' className='list-text'>Sign In</NavLink>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </header>
            <main className='main'>
                <Outlet/>
            </main>
            <footer className='footer'>&copy; React router 2022</footer>
        </div>
    )
}

export default Layout;
