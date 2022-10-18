import React from 'react';

const PostItem = (poster) => {
    return (
        <div>
            <div className="post">
                <div className="post_content">
                    <strong>{poster.poster.name}</strong>
                    <div>{poster.poster.family_name}</div>
                </div>
                    Age : {poster.poster.age}
                <div className="post_btn">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;