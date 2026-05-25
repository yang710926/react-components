import Switch from "../lib/switch";
import { useState } from 'react';
const SwitchDemo = () => {
    const onChange = (bool: boolean) => {
        setBool(bool)
    }
    const [bool, setBool] = useState(false);
    const [disabled , _setDisabled] = useState(true);
    return (
        <div>
            <Switch bool={bool} onChange={onChange} disabled ={disabled} />
        </div>

    )
}

export default SwitchDemo;