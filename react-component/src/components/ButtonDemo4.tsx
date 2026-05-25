import Button from "../lib/button";
const ButtonDemo = () => {
    return (
        <div>
            <Button disabled>禁用按钮</Button>
            <Button theme="link" disabled>禁用链接按钮</Button>
            <Button theme="text" disabled>禁用按钮</Button>
        </div>
    )
}

export default ButtonDemo;