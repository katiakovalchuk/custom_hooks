import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>Page is not found. Go <Link to='/'>home</Link></div>
    )
}

export default NotFoundPage;
