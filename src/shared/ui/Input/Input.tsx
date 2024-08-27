import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, MutableRefObject, memo, useEffect, useRef, useState } from 'react';

// Omit allows to remove all props from a type but exclude those that we don’t need
//The first argument is what you want to take away, and the second is what you want to exclude
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?:  boolean;
}

export const Input: React.FC<InputProps> = memo((props: InputProps) => {
    const { 
        className,
        value,
        onChange,
        type,
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef() as MutableRefObject<HTMLInputElement>;   

    const isCaretVisible = isFocused && !readonly;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if(autofocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    },[autofocus]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input 
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler} 
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span 
                        className={cls.caret}
                        style={{left: `${caretPosition * 9}px`}}
                    />
                )}            
            </div>
            
        </div>
    );
});