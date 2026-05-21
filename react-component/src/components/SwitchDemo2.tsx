import Switch from "../lib/switch";
import { useState } from 'react';
const SwitchDemo = () => {
    const onChange = (bool) => {
        setBool(bool)
    }
    const [bool, setBool] = useState(false);
    const [disabled , setDisabled] = useState(true);
    return (
        <div>
            <Switch bool={bool} onChange={onChange} disabled ={disabled} />
        </div>

    )
}

export default SwitchDemo;