import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    // const mainPosts = useSelector((state) => state.post.mainPosts); 아래 코드와 동일
    const { mainPosts } = useSelector((state) => state.post);

    return (
        <AppLayout>
            {/* children 부분 */}
            {/* 로그인 한 사람만 게시글 보기 */}
            {isLoggedIn && <PostForm />}
            {mainPosts.map((v) => <PostCard key={v.id} post={v} />)}

        </AppLayout>
    )
}

export default Home;