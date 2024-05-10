import { ReactNode, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CopyBtn from 'shared/assets/icons/copy-btn.svg';

interface CodeProps {
   className?: string;
   text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                onClick={onCopy} 
                className={cls.copyBtn} 
                theme={ButtonTheme.CLEAR}
            >
                <CopyBtn className={cls.copyIcon}/>
            </Button>
            <code>
                {text}
            </code>
        </pre>
        
    );
});