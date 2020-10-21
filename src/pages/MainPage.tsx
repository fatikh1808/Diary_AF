import React from "react";
import s from './MainPage.module.css'
import LeftBar from "../components/leftBar/LeftBar";
// import Content from "../components/content/Content";
import RightBar from "../components/rightBar/RightBar";
// import ProfilePage from "./ProfilePage";
// import ChatPage from "./ChatPage";
import DiaryPage from "./DiaryPage";

const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <LeftBar/>
            <DiaryPage/>
            <RightBar/>
        </div>
    )
}

export default MainPage;
