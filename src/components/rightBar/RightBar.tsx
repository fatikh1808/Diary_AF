import s from "./RightBar.module.css";
import Avatar from '@material-ui/core/Avatar';
import React, {useState} from 'react';
import {useStyles} from "../../utils/ui/useStyles";
import {motion, AnimatePresence} from "framer-motion";
import MenuList from "./MenuList";

const RightBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOn, setIsOn] = useState(true);

    const toggleOpen = () => {
        if (isOpen) {
            setIsOpen(!isOpen)
            setTimeout(() => {
                setIsOn(!isOn);
            }, 150)
        } else {
            setIsOn(!isOn)
            setTimeout(() => {
                setIsOpen(!isOpen);
            }, 150)
        }
    }

    const classes = useStyles();

    return (
        <div className={s.rightBar}>
            <motion.li
                className={s.rightBarIcon}
                layout
                onClick={toggleOpen}
                initial={{borderRadius: 10}}>
                <AnimatePresence>{isOpen && <MenuList/>}</AnimatePresence>
                {isOn ? <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.largeAvatar}/>
                    : null}
            </motion.li>
        </div>
    )
}


export default RightBar;