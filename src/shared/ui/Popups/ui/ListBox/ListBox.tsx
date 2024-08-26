import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames} from 'shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/mapperStyles';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        value,
        defaultValue,
        onChange,
        className,
        readonly,
        direction = 'bottom left',
        label
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap='4'>
            {label && 
            <span 
                className={classNames('', {[cls.disabled]: readonly}, [])}>{`${label}>`}
            </span>}
            <HListbox 
                as='div' 
                value={value} 
                onChange={onChange}
                className={classNames(cls.listBox, {}, [className, popupCls.position])}
                disabled={readonly}
            >
                <HListbox.Button disabled={readonly} className={popupCls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                    [popupCls.active]: active, 
                                    [popupCls.disabled]: item.disabled
                                })}>
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
        
    );
}