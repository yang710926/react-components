import React, { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';
import '../css/Button.scss';

interface ButtonProps {
    theme?: string;
    size?: string;
    level?: string;
    disabled?: boolean;
    loading?: boolean;
    children?: ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    theme = 'button',
    size = 'normal',
    level = 'normal',
    disabled = false,
    loading = false,
    children,
    onClick,
    type = 'button',
    className,
    ...restProps
}) => {
    // 计算样式类名
    const classes = classNames(
        'harden-button',
        {
            [`harden-theme-${theme}`]: theme,
            [`harden-size-${size}`]: size,
            [`harden-level-${level}`]: level,
        },
        className
    );

    // 处理点击事件（禁用或加载中时不可点击）
    const handleClick = (e) => {
        if (disabled || loading) return;
        onClick?.(e);
    };

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled || loading}
            onClick={handleClick}
            {...restProps}
        >
            {loading && <span className="harden-loadingIndicator" />}
            {children}
        </button>
    );
};

export default Button;