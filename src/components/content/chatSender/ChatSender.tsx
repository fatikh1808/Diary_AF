import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import s from './ChatSender.module.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 200,
            display: "contents",
            borderRadius: 0
        },
        image: {
            width: 50,
            height: 50,
        },
        img: {
            margin: '0',
            display: 'block',
            maxWidth: '50px',
            maxHeight: '50px',
            borderRadius: '50px'
        },
    }),
);

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

interface Props {
    className: any
}

const ChatSender = (props: Props) => {

    const classes = useStyles();
    const {className} = props;

    return (
        <div className={s.ChatSender} style={{float: className}}>
            <div className={s.avatar}>
                <img className={classes.img} alt="complex" src="https://www.blexar.com/avatar.png"/>
            </div>
            <div className={s.senderName}>
                Standard license
            </div>
            <div className={s.sentTime}>
                5m ago
            </div>
            <div className={s.messageBody}>
                {message}
            </div>
        </div>
    );
}

export default ChatSender;