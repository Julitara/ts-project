import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';

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
        <ListBox 
            onChange={onChangeHandler}
            value={value}
            items={options}
            label={t('Укажите валюту')}
            className={className}
            readonly={readonly}
            direction='top right'
        />
    );
});