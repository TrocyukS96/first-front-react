import s from "../../profileDescription/ProfileDescription.module.css";
import React from "react";

type ContactPropsType = {
    contactTitle: string
    contactValue?: string
}
export const Contact = (props: ContactPropsType) => {
    const {contactTitle, contactValue} = props
    return (
        <div className={s.contact}>
            <span className={s.contactTitle}>{contactTitle}</span>:<span
            className={s.contactValue}>{contactValue}</span>
        </div>
    )
}