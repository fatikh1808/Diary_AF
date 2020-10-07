import {motion} from "framer-motion";
import s from "./RightBar.module.css";
import React from "react";

const MenuItem = () => {

    return (
        <motion.li className={s.rightBarLi} layout initial={{borderRadius: 10}}>
            <motion.div className={s.rightBarAvatar} layout/>
        </motion.li>
    );
}

export default MenuItem;