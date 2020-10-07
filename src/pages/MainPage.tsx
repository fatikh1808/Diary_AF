import React from "react";
import s from './MainPage.module.css'
import LeftBar from "../components/leftBar/LeftBar";
import Content from "../components/content/Content";
import RightBar from "../components/rightBar/RightBar";
import ProfilePage from "./ProfilePage";

const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <LeftBar/>
            <ProfilePage/>
            <RightBar/>
        </div>
    )
}

export default MainPage;
