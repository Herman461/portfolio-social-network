import React from 'react';

import Post from './Post';

const Posts = (props) => {

   let postsElements = props.posts.map((post) => (
      <Post likesCount={post.likesCount} key={post.id} id={post.id} message={post.message} />
   ));

   return (
      <div className="profile__posts posts-profile">
         <ul className="posts-profile__items">{postsElements}</ul>
      </div>
   );
};

export default Posts;
