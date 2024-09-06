import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star-raiting.svg?react';
import { HStack } from '../Stack';

interface StarRatingProps {
   className?: string;
   onSelect?: (starsCount: number) => void;
   size?: number;
   selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { 
        className,
        onSelect,
        size = 30,
        selectedStars = 0 
    } = props;

    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starNum: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starNum);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if(!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <HStack gap='8'>
            {stars.map(starNum => (
                <Icon 
                    Svg={StarIcon} 
                    key={starNum}
                    className={classNames(
                        cls.starIcon, 
                        {[cls.isSelected]: isSelected}, 
                        [currentStarCount >= starNum ? cls.hovered : cls.normal]
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNum)}
                    onClick={onClick(starNum)}
                />
            ))}
        </HStack>
    );
});