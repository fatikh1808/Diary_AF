import React from 'react';
import s from './DiarySender.module.css';
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const DiarySender = () => {

    return (
        <div className={s.diarySender}>
            <div className={s.avatar}>
                <img alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/ru/4/4b/Avatar-2009.jpg"/>
            </div>
            <div className={s.name}>
                <Typography variant="body1" gutterBottom>
                    Tashlanov Fotikh
                </Typography>
            </div>
            <div className={s.buttons}>
                <div className={s.topBtn}>
                    <Button variant="contained" color="primary">
                        Отправить анкету
                    </Button>
                </div>
                <div className={s.bottomBtn}>
                    <Button>Отправить сообщение</Button>
                </div>
            </div>
        </div>
    )
};

export default DiarySender;