import React from 'react'
import s from './ProfilePage.module.css';
import {Typography} from '@material-ui/core';

const ProfilePage = () => {
    return (
        <div className={s.profilePage}>
            <div className={s.profilePhoto}>

            </div>
            <div className={s.profileOptions}>
                <Typography variant="button"
                            display="block"
                            gutterBottom>Last name</Typography>
                <Typography variant="button"
                            display="block"
                            gutterBottom>name</Typography>
                <Typography variant="button"
                            display="block"
                            gutterBottom>full name</Typography>
                <Typography variant="button"
                            display="block"
                            gutterBottom>date of birth</Typography>
                <Typography variant="button"
                            display="block"
                            gutterBottom>Place of birth</Typography>
                <Typography variant="button"
                            display="block"
                            gutterBottom>Place of location</Typography>
            </div>
            <div className={s.profileInfo}>
                <Typography variant="button"
                            display="block"
                            gutterBottom> Tashlanov </Typography>
                <Typography variant="button"
                            display="block"
                            gutterBottom>Fotikh</Typography>
                <Typography variant="button"
                            display="block"
                            gutterBottom>Oybek og`li</Typography>
                <Typography variant="button"
                            display="block"
                            gutterBottom>18.08.1997</Typography>
                <Typography variant="button"
                            display="block"
                            gutterBottom>Uzbekistan</Typography>
                <Typography variant="button"
                            display="block"
                            gutterBottom>Tatarstan</Typography>
            </div>
        </div>

    )
}

export default ProfilePage;