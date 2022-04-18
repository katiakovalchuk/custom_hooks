import './index.css';
import {NavLink} from 'react-router-dom';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='pagination-list'>
            {pageNumbers.map(number => (
                <li className='pagination-item' key={number}>
                    <NavLink className={`pagination-item-text {}`}
                             to={`/posts/page${number}`}
                             onClick={() => paginate(number)}>{number}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Pagination;
