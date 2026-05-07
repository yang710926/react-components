import '../css/switch.scss';
import classNames from 'classnames';

const Switch = ({ bool, onChange }) => {
    const toggle = () => {
        onChange(!bool)
    }
    return (
        <div>
            <button className={classNames('wa-switch', { 'wa-checked': bool })} onClick={toggle}>
                <span className="wa-span"></span>
            </button>
        </div>
    );

};

export default Switch;
