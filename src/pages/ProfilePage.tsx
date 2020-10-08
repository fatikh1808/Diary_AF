import React, {useState} from 'react'
import s from './ProfilePage.module.css';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ProfileInfo from "../components/content/profileInfo/ProfileInfo";
import ProfileOptions from "../components/content/profileOptions/ProfileOptions";
import ProfilePhoto from "../components/content/profilePhoto/ProfilePhoto";
import ProfileButton from "../components/content/profileButton/ProfileButton";

const ProfilePage = () => {

    const [isChanging, setIsChanging] = useState(false);

    return (
        <div className={s.profilePage}>
            <ProfilePhoto isChanging={isChanging}/>
            <ProfileOptions/>
            <ProfileInfo isChanging={isChanging}/>
            <ProfileButton isChanging={isChanging} setIsChanging={setIsChanging}/>
        </div>

    )
}


export default ProfilePage;