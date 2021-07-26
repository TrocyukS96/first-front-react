import React from 'react';

import s from './Profile.module.css';
import ProfileImg from './../../assets/images/main/main-img.jpg';
import PersonImg from './../../assets/images/main/person-img.jpg';
import Posts from './posts/Posts';



function Profile() {
   return (
      <main className={s.profile}>
         <img className={s.profileImg} src={ProfileImg} alt="profile-image" />
         <div className={s.personBlock}>
            <img className={s.personImg} src={PersonImg} alt="person-image" />
            <div className={s.personContent}>
               <h3 className={s.personTitle}>StanislavIT</h3>
               <div className={s.personData}>
                  <p className={s.personBirth}>Date of birth: <span>29 of Jenuary</span></p>
                  <p className={s.personCithy}>City: <span>Molodechno</span></p>
                  <p className={s.personEducation}>Education: <span>University of civil protection</span></p>
                  <p className={s.personSite}>Web Site: <span>https://github.com/TrocyukS96</span></p>
               </div>
            </div>
         </div>
         <form className={s.profileForm} encType="multipart/form-data" action="#" >
            <h3 className={s.formTitle}>
               My posts
            </h3>
            <div className={s.inputBlock}>
               <textarea ></textarea>
            </div>
            <button className={s.formBtn}>Send</button>
         </form>
         <Posts />
      </main>
   );
}

export default Profile;