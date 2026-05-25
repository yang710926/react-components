import Demo from "./demo";
import ButtonDemo1 from './ButtonDemo1'
import ButtonDemo1Code from './ButtonDemo1?raw';
import ButtonDemo2 from './ButtonDemo2'
import ButtonDemo2Code from './ButtonDemo2?raw';
import ButtonDemo3 from './ButtonDemo3'
import ButtonDemo3Code from './ButtonDemo3?raw';
import ButtonDemo4 from './ButtonDemo4'
import ButtonDemo4Code from './ButtonDemo4?raw';
import ButtonDemo5 from './ButtonDemo5'
import ButtonDemo5Code from './ButtonDemo5?raw';
function Switch() {
    return (
        <div>
            <h1>Button 组件示例</h1>
            <Demo title={"常规用法"} component={ButtonDemo1} codeString={ButtonDemo1Code} />
            <Demo title={"支持 size"} component={ButtonDemo2} codeString={ButtonDemo2Code} />
            <Demo title={"支持 level"} component={ButtonDemo3} codeString={ButtonDemo3Code} />
            <Demo title={"支持 disabled"} component={ButtonDemo4} codeString={ButtonDemo4Code} />
            <Demo title={"支持显示加载中"} component={ButtonDemo5} codeString={ButtonDemo5Code} />
        </div>
    );
}

export default Switch;