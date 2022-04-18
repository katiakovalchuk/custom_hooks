import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import capitalize from '../Helpers/Capitalize';

const PostPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(posts => setPost(posts))
        setLoading(false);
    }, [id])

    if (loading) return <h2>Loading...</h2>;
    if (!post) return <div className='post-page'>No items to display</div>;

    return (
        <div className='post-page'>
            <h2 className='post-page-title'>{capitalize(post.title)}</h2>
            <p>{capitalize(post.body)}</p>
            <button className='button' onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export default PostPage;
