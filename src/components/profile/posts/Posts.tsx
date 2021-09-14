import React from 'react';
import s from './Posts.module.css';
import {StatePostType} from "../../../redux/state";
import {Post} from "./post/Post";

type PostType = {
    posts:Array<StatePostType>

}

function Posts(props:PostType) {



    return (
        <div className={s.posts}>
            <Post postsValue={props.posts}/>
        </div>
    );
}

export default Posts;