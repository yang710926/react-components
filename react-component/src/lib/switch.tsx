import '../css/switch.scss';
import classNames from 'classnames';

interface SwitchProps {
    bool: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

const Switch = ({ bool, onChange, disabled = false }: SwitchProps) => {
    const handleClick = () => {
        onChange(!bool);
    };

    return (
        <div>
            <button
                className={classNames('wa-switch', { 'wa-checked': bool })}
                onClick={handleClick}
                disabled={disabled}
                role="switch"
                aria-checked={bool}
            >
                <span className="wa-span"></span>
            </button>
        </div>
    );
};

export default Switch;