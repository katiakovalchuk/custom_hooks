import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

import Pagination from '../Components/Pagination/index';
import capitalize from '../Helpers/Capitalize';

const PostsPage = () => {
    const {id} = useParams();

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const idxOfLastPost = currentPage * postsPerPage;
    const idxOfFirstPost = idxOfLastPost - postsPerPage;
    const currentPosts = posts.slice(idxOfFirstPost, idxOfLastPost);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts))
        setCurrentPage(id);
        setLoading(false);
    }, [id])

    if (loading) return <h2>Loading...</h2>;
    if (!posts.length) return <div className='post-page'>No items to display</div>;

    return (
        <div className='posts-page'>
            <h1>Posts list</h1>
            <ul className='posts-list'>
                {currentPosts.map(post => (
                    <li key={post.id} className='posts-list-item'>
                        <h4 className='post-title'><Link to={`/posts/${post.id}`}
                                                         className='post-title-text'>{capitalize(post.title)}</Link>
                        </h4>
                    </li>
                ))}
            </ul>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={pageNumber => {
                    setCurrentPage(pageNumber);

                }}
            />
        </div>
    )
}

export default PostsPage;
