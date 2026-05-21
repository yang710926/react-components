import '../css/switch.scss';
import classNames from 'classnames';

const Switch = ({ bool, onChange, disabled = false }) => {
    console.log("Switch 收到的 disabled：", disabled);
    return (
        <div>
            <button 
                className={classNames('wa-switch', { 'wa-checked': bool })}
                onClick={() => {
                    // 关键：disabled 为 true 时直接 return，不执行切换
                    if (disabled) return;
                    onChange(!bool);
                }}
                disabled={disabled}
            >
                <span className="wa-span"></span>
            </button>
        </div>
    );
};

export default Switch;