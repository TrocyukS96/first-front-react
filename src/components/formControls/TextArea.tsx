import React from "react";
import s from './TextArea.module.css';


export const TextArea:React.FC<any> = ({input, meta, ...props})=>{
    const showError = meta.touched && meta.error
    return(
        <div >
            <div className={s.formControl + ' ' + (showError ? s.error : '')}>
                <textarea {...input} {...props}/>
            </div>
            {showError && <span className={s.errorSpan}>{meta.error}</span>}
        </div>
    )
}

export const Input:React.FC<any> = ({input, meta, ...props})=>{
    const showError = meta.touched && meta.error
    return(
        <div >
            <div className={s.formControl + ' ' + (showError ? s.error : '')}>
                <input {...input} {...props}/>
            </div>
            {showError && <span className={s.errorSpan}>{meta.error}</span>}
        </div>
    )
}