import { Popover as PopoverUI } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/mapperStyles';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
   className?: string;
   trigger: ReactNode;
   direction?: DropdownDirection;
   children?: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const {
        className, 
        trigger, 
        direction = 'bottom right',
        children
    } = props;

    const menuClasses = [mapDirectionClass[direction]];
  
    return (
        <PopoverUI className={classNames(cls.popover, {}, [className, popupCls.position])}>
            <PopoverUI.Button className={popupCls.trigger}>
                {trigger}
            </PopoverUI.Button>

            <PopoverUI.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </PopoverUI.Panel>
        </PopoverUI>
    );
};