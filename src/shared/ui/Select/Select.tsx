import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select: React.FC<SelectProps> = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly
    } = props;
    const {t} = useTranslation();

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option 
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ));
    },[options]);

    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label &&
                <span className={cls.label}>{`${label}>`}</span>
            }
            <select 
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
});