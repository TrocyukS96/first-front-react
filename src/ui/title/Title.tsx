import React from 'react';
import s from './title.module.scss';
type Props = {
  title:string
  className?:string
}
const Title = (props:Props) => {
    return (
        <h2 className={`${s.title} ${props?.className}`}>
            {props.title}
        </h2>
    );
};

export default Title;