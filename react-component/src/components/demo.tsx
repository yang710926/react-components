import type { ReactNode, ComponentType } from 'react';
import '../css/demo.scss';
import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import Button from '../lib/button';

interface DemoProps {
    title: ReactNode;
    component?: ComponentType;
    codeString?: string;
}

const Demo = ({ title, component: Component, codeString }: DemoProps) => {
    const [codeVisible, setCodeVisible] = useState(false);

    return (
        <div className="demo">
            <h2>{title}</h2>
            <div className='demo-component'>
                {Component && <Component />}
            </div>

            <div className="demo-actions">
                <Button onClick={() => setCodeVisible(!codeVisible)}>
                    {codeVisible ? '隐藏代码' : '查看代码'}
                </Button>
                {codeString && (
                    <div className={`demo-code ${codeVisible ? 'code-show' : 'code-hidden'}`}>
                        <Highlight theme={themes.vsDark} code={codeString} language="tsx">
                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                <pre className={className} style={style}>
                                    {tokens.map((line, i) => (
                                        <div key={i} {...getLineProps({ line })}>
                                            {line.map((token, key) => (
                                                <span key={key} {...getTokenProps({ token })} />
                                            ))}
                                        </div>
                                    ))}
                                </pre>
                            )}
                        </Highlight>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Demo;