import React from 'react';
import DiarySender from "../diarySender/DiarySender";
import s from './DiarySend.module.css';

const DiarySend = () => {
    return (
        <div className={s.diarySend}>
            <DiarySender/>
            <DiarySender/>
            <DiarySender/>
            <DiarySender/>
            <DiarySender/>
            <DiarySender/>
            <DiarySender/>
            <DiarySender/>
            <DiarySender/>
        </div>
    )
};

export default DiarySend;