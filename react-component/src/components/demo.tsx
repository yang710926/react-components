import type { ReactNode, ComponentType } from 'react';
import '../css/demo.scss';
import { useState } from 'react';
import Button from '../lib/button';
interface DemoProps {
    title: ReactNode;
    component?: ComponentType;
    codeString:String
}

const Demo = ({ title, component: Component,codeString }: DemoProps) => {
    console.log(codeString,'htmlString')
    const [codeVisible, setCodeVisible] = useState(false);
    return (
        <div className="demo">
            <h2>{title}</h2>
            <div className='demo-component'>
                {Component && <Component />}
            </div>

            <div className="demo-actions">
                <Button>{codeVisible ? '隐藏代码' : '查看代码'}</Button>
                <div>123123</div>
            </div>
        </div>
    );
}

export default Demo;