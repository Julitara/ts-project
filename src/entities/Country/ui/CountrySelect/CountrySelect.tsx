import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {value: Country.Canada, content: Country.Canada},
    {value: Country.Italy, content: Country.Italy},
    {value: Country.USA, content: Country.USA}
];

export const CountrySelect: React.FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props;
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            items={options}
            className={className}
            label={t('Выберите страну')}
            direction='top right'
        />
    );
});