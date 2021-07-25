import React from 'react';
import smallAva from '../../assets/img/small_ava.jpg';

const Post = (props) => {
   return (
      <li className="posts-profile__item item-posts">
         <div className="item-posts__avatar">
            <img src={smallAva} alt="" />
         </div>
         <div className="item-posts__body">
            <div className="item-posts__text">{props.message}</div>
            <div className="item-posts__likes-count">{`likes: ${props.likesCount}`}</div>
         </div>
      </li>
   );
};

export default Post;
