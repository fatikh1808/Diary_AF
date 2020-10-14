import s from "./DialogsInput.module.css";
import Input from "../../../utils/ui/Input";
import Button from "../../../utils/ui/Button";
import React, {useState} from "react";
import SendIcon from '@material-ui/icons/Send';

const DialogsInput = () => {

    const [isPrinting, setIsPrinting] = useState(false);

    return (
        <div className={s.DialogsInput}>
            <Input chatInput/>
            {isPrinting ? <Button chatButton><SendIcon/></Button> : null}
        </div>
    )
}

export default DialogsInput;