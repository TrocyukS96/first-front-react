import React from "react";
import FetchingIcon from "../../assets/images/users/loading-icon.jpg";


export const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            Preloading
            <img src={FetchingIcon}/>
        </div>
    );
}