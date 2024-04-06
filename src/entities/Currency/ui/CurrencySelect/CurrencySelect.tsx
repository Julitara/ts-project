import { classNames } from 'shared/lib/classNames/classNames';
//import cls from './CurrencySelect.module.scss';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD}
];

export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props;
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select 
            label={t('Currency')} 
            className={classNames('currencySelect', {}, [className])}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});