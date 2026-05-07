
import Switch from "../lib/switch";
import { useState } from 'react';

const SwitchDemo = () => {
    const onChange = (bool) => {
        setBool(bool)
    }
    const [bool, setBool] = useState(false);
    return (
        <div>
            <Switch bool={bool} onChange={onChange} />
        </div>

    )
}

export default SwitchDemo;