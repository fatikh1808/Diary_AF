import s from "../../../pages/ProfilePage.module.css";
import React from "react";

type Props = {
    isChanging: boolean
}

const ProfilePhoto = (props: Props) => {

    const {isChanging} = props;

    return (
        <div className={s.profilePhoto}
             onClick={() => {
                 isChanging ? console.log('photo clicked') : console.log('photo false')
             }}>
            <img src={'https://www.blexar.com/avatar.png'} alt={'avatar'}/>
        </div>
    )
}

export default ProfilePhoto;