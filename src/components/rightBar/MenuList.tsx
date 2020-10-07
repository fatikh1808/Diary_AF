import {AnimateSharedLayout, motion} from "framer-motion";
import s from "./RightBar.module.css";
import React from "react";
import MenuItem from "./MenuItem";
const items = [0, 1, 2];

const MenuList = () => {
    return (
        <AnimateSharedLayout>
            <motion.ul className={s.rightBarUl} layout initial={{borderRadius: 25}}>
                {items.map(item => (
                    <MenuItem key={item}/>
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    );
}
export default MenuList;
