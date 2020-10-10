import s from "./ProfileOptions.module.css";
import {Typography} from "@material-ui/core";
import React from "react";

const Options: string[] = ["Last Name", "Name", "Full Name", "date of birth", "Place of birth", "Place of Location"]

const ProfileOptions = () => {
    return (
        <div className={s.profileOptions}>
            {Options.map(item => (
                <Typography variant="button"
                            display="block"
                            paragraph
                            gutterBottom>{item}</Typography>
            ))}
        </div>
    )
}

export default ProfileOptions;