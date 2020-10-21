import React from 'react'
import s from './DiaryPage.module.css';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DiaryTabPanel from "../components/content/diaryTabPanel/DiaryTabPanel";
import DiarySend from "../components/content/diarySend/DiarySend";

function a11yProps(index: any) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

const DiaryPage = () => {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: unknown, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };


    return (
        <div className={s.diaryPage}>
            <div className={s.modeChangers}>
                <AppBar position="static" color="default" className={s.changerBar}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"

                    >
                        <Tab label="Send" {...a11yProps(0)} />
                        <Tab label="Answer" {...a11yProps(1)} />
                        <Tab label="History" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
            </div>
            <div className={s.diaryContent}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <DiaryTabPanel value={value} index={0} dir={theme.direction}>
                        <DiarySend/>
                    </DiaryTabPanel>
                    <DiaryTabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                    </DiaryTabPanel>
                    <DiaryTabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </DiaryTabPanel>
                </SwipeableViews>
            </div>
        </div>
    )
}

export default DiaryPage;

