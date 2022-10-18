import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    let i
    if (posts[0]) {
        i = posts[0].place_birth.country
    }
    // console.log(i)
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Список людей в {i}</h1>
            {posts.map((post) => <PostItem poster={post} key={post.pk}/>)}
        </div>
    );
};

export default PostList;