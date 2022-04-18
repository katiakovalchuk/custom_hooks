import './App.css';
import {Route, Routes} from 'react-router-dom';

import Layout from './Components/Layout';
import ProtectedRoutes from "./Components/ProtectedRoutes";
import {AboutPage, HomePage, NotFoundPage, PostPage, PostsPage, SignInPage} from './Pages/index';
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
    const [user] = useLocalStorage({}, 'user');

    return (
        <Routes>
            <Route path='/' element={<Layout user={user}/>}>
                <Route index element={<HomePage/>}/>
                <Route path='about' element={<AboutPage/>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route path='/posts/page:id' element={<PostsPage/>}/>
                    <Route path='/posts/:id' element={<PostPage/>}/>
                </Route>
                <Route path='/login' element={<SignInPage user={user}/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
