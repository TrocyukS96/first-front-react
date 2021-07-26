import React from 'react';
import s from './Posts.module.css';
import Post from './post/Post';
import PostLogo1 from './../../../assets/images/main/profile/logo1.jpg';
import PostLogo2 from './../../../assets/images/main/profile/logo2.png';


type PostType={
    text:string
    img:any
    likeCount:number
}

function Posts() {

   const post1:PostType = {
      text: "My first post for today",
      img: PostLogo1,
      likeCount: 2
   }
   const post2:PostType = {
      text: "My  post for today",
      img: PostLogo2,
      likeCount: 1


   }


   return (
      <div className={s.posts}>
         <Post text={post1.text} img={post1.img} likes={post1.likeCount} />
         <Post text={post2.text} img={post2.img} likes={post2.likeCount} />
         <Post text={post1.text} img={post1.img} likes={post1.likeCount} />
         <Post text={post2.text} img={post2.img} likes={post2.likeCount} />
      </div>
   );
}

export default Posts;