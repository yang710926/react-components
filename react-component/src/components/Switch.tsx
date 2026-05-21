import Demo from "./demo";
import SwitchDemo1 from './SwitchDemo1'
import SwitchDemo1Code from './SwitchDemo1?raw';
import SwitchDemo2 from './SwitchDemo2'
import SwitchDemo1Code2 from './SwitchDemo2?raw';


function Switch() {
    return (
        <div>
            <h1>Switch 组件示例</h1>
            <Demo title={"常规用法"} component={SwitchDemo1} codeString={SwitchDemo1Code} />

            <Demo title={"支持 disabled"} component={SwitchDemo2} codeString={SwitchDemo1Code2} />
        </div>
    );
}

export default Switch;