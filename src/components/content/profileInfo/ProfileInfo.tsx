import s from "../../../pages/ProfilePage.module.css";
import {Typography} from "@material-ui/core";
import React from "react";

type Props = {
    isChanging: boolean
}

const Info: string[] = [
    "Tashlanov", "Fotikh", "Oybek ugli", "18.08.1997", "Uzbekistan", "Tatarstan"
]

const ProfileInfo = (props: Props) => {

    const {isChanging} = props;

    return (
        <div className={s.profileInfo} style={!isChanging ? {marginTop: 5} : null}>
            {
                Info.map((item, index) => !isChanging ? (
                    <Typography variant="button"
                                display="block"
                                paragraph
                                gutterBottom>{item}</Typography>
                ) : (
                    <input
                        value={item}/>
                ))
            }
        </div>
    )
}

export default ProfileInfo;