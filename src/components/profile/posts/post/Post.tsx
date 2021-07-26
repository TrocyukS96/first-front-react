import React from 'react';

import s from './Post.module.css';
import likeImg from './../../../../assets/images/main/profile/like.jpg';


type PostPropsType = {
   text: string,
   img: any,
   likes: number
}


function Post(props: PostPropsType) {
   return (
      <div className={s.post}>
         <a href="" className={s.link}>
            <img src={props.img} alt="logo image" />
         </a>
         <p className={s.text}>{props.text}</p>
         <button className={s.btnLikes}>
            <span className={s.likes}>{props.likes}</span>
            <img src={likeImg} alt="like-image" />
         </button>
      </div>
   );
}

export default Post;