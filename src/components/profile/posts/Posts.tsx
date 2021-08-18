import React from 'react';
import s from './Posts.module.css';
import {StatePostType} from "../../../redux/state";

type PostType = {
    postsState:Array<StatePostType>

}

function Posts(props:PostType) {

let post =props.postsState.map(m=>{
    return(
        <div key={m.id} className={s.post}>
            <img className={s.postImg} src={m.img} alt="image of user"/>
            <span className={s.postText}>{m.text}</span>
            <button className={s.likeCount}>{m.likeCount}</button>
        </div>
    )
})

    return (
        <div className={s.posts}>
            {post}
        </div>
    );
}

export default Posts;