import Demo from "./demo";
import SwitchDemo1 from './SwitchDemo1'
function Switch() {
     const switchDemoCode = SwitchDemo1.toString();
    return (
        <div>
            <h1>Switch 组件示例</h1>
            <Demo title={"常规用法"}  component={ SwitchDemo1 } codeString={switchDemoCode} />
        </div>
    );
}

export default Switch;