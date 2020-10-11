import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import s from './ChatList.module.css';

export default function ChatList() {

    return (
        <List dense className={s.ChatList}>
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem key={value} button>
                        <ListItemAvatar>
                            <Avatar
                                alt={`Avatar n°${value + 1}`}
                                src={`/static/images/avatar/${value + 1}.jpg`}
                            />
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                    </ListItem>
                );
            })}
        </List>
    );
}
