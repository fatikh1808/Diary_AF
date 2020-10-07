import {AnimateSharedLayout, motion} from "framer-motion";
import s from "./RightBar.module.css";
import React from "react";
import Typography from '@material-ui/core/Typography';

const MenuList = () => {
    return (
        <AnimateSharedLayout>
            <motion.ul className={s.rightBarUl} layout initial={{borderRadius: 25}}>
                <motion.li className={s.rightBarLi} layout initial={{borderRadius: 10}}>
                    <Typography align={"center"} variant={"button"}>
                        Profile
                    </Typography>
                </motion.li>
                <motion.li className={s.rightBarLi} layout initial={{borderRadius: 10}}>
                    <Typography align={"center"} variant={"button"}>
                        Log out
                    </Typography>
                </motion.li>
            </motion.ul>
        </AnimateSharedLayout>
    );
}
export default MenuList;
