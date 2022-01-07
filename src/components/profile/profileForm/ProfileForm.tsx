import React from "react";
import {useFormik} from "formik";
import s from "../profileDescription/ProfileDescription.module.css";
import {ProfileType} from "../Profile";
import {Contact} from './../contacts/contact/Contact';


type ProfileFormPropsType = {
    closeEditMode: () => void
    profile: ProfileType
    updateProfile:(values:any)=>void
}
type FormikErrorType = {
    fullName?: string
    about?: string
    skillsDescription?: string
    lookingForAJob?: boolean


}


export const ProfileForm = (props: ProfileFormPropsType) => {
    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            about: props.profile.aboutMe,
            lookingForAJob: props.profile.lookingForAJob,
            skillsDescription: props.profile.lookingForAJobDescription,
            contacts:{
                facebook:props.profile.contacts.facebook,
                website:props.profile.contacts.website,
                vk:props.profile.contacts.vk,
                twitter:props.profile.contacts.twitter,
                instagram:props.profile.contacts.instagram,
                youtube:props.profile.contacts.youtube,
                github:props.profile.contacts.github,
                mainLink:props.profile.contacts.mainLink,
            }


        },
        // validate: (values) => {
        //     const errors: FormikErrorType = {};
        //     if (!values.fullName) {
        //         errors.fullName = 'Required';
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.fullName)) {
        //         errors.fullName = 'Invalid email address';
        //     }
        //     return errors;
        // },
        onSubmit: values => {
            console.log(values)
            props.updateProfile(values)
            formik.resetForm()
            props.closeEditMode()
        },
    })
    return <div>
        <form onSubmit={formik.handleSubmit}>
            {/*{props.error && <div style={{color: 'red', fontSize: '20px'}}>{props.error}</div>}*/}
            <div className={s.contacts}>
                <h2>Your full name:
                    <input
                        type={'text'}
                        // placeholder={'full name'}
                        {...formik.getFieldProps('fullName')}
                    /></h2>
                <h3>О себе:
                    <br/>
                    <textarea
                        {...formik.getFieldProps('about')}
                        // placeholder={'about yourself'}
                    />
                </h3>
                <div><b>Looking for a job:</b>
                    <input
                        type="checkbox"
                        {...formik.getFieldProps('lookingForAJob')}
                    />
                </div>
                <div><b>My skills
                    description: </b>
                    <br/>
                    <textarea
                        {...formik.getFieldProps('skillsDescription')}
                        // placeholder={'describe your skills'}
                    />
                </div>
                <div><b>Contacts</b>:{Object.keys(props.profile.contacts).map((key, i) => {
                    // @ts-ignore
                    return <div className={s.contact}>
                        <b>{key}: <input type={'text'} placeholder={key} {...formik.getFieldProps('contacts.'+ key)}/></b>
                    </div>
                })}
                </div>
            </div>
            <button type="submit">Save</button>
        </form>
    </div>

}