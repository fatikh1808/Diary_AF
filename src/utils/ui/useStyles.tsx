import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    paperReg: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatarReg: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    formReg: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submitReg: {
        margin: theme.spacing(3, 0, 2),
    },paperLog: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatarLog: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    formLog: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submitLog: {
        margin: theme.spacing(3, 0, 2),
    },
    largeAvatar: {
        width: theme.spacing(7.6),
        height: theme.spacing(7.6),
    },
    fabDiary: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreenDiary: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}));