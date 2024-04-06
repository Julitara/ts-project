import { classNames } from 'shared/lib/classNames/classNames';
//import cls from './CountrySelect.module.scss';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

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
        <Select 
            label={t('Country')} 
            className={classNames('CountrySelect', {}, [className])}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});