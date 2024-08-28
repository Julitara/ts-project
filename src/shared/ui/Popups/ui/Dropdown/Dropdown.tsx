/* eslint-disable i18next/no-literal-string */
import { Menu } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { Button } from '../../../Button/Button';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/mapperStyles';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const {
        className,
        items,
        trigger,
        direction = 'bottom right'
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as={'div'} className={classNames(cls.dropdown, {}, [className, popupCls.position])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses) }>
                {items.map(item => {
                    
                    
                    const content = (
                        ({ active }: {active: boolean}) => (
                            <Button 
                                className={classNames(cls.item, {[popupCls.active]: active})}
                                onClick={item.onClick}
                                disabled={item.disabled}
                            >
                                {item.content}
                            </Button>
                        )
                    );
                    if(item.href) {
                        return (
                            <Menu.Item 
                                as={AppLink} 
                                key={String(item.content)} 
                                disabled={item.disabled}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item 
                            as={Fragment} 
                            key={String(item.content)} 
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}