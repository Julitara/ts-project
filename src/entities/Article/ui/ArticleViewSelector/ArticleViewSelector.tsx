import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleView } from '../../model/types/article';
import IconSmallType from 'shared/assets/icons/articles_small.svg';
import IconBigType from 'shared/assets/icons/articles_big.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView | undefined;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: IconSmallType
    },
    {
        view: ArticleView.BIG,
        icon: IconBigType
    }
];

export const ArticleViewSelector: React.FC<ArticleViewSelectorProps> = 
    (props: ArticleViewSelectorProps) => {
        const {
            className,
            view,
            onViewClick
        } = props;
        const {t} = useTranslation();

        const onCLick = (newView: ArticleView) => {
            return () => {
                onViewClick?.(newView);
            };
        };

        return (
            <div className={classNames(cls.articleViewSelector, {}, [className])}>
                {viewTypes.map((viewType, index) => (
                    <Button 
                        key={index} 
                        theme={ButtonTheme.CLEAR} 
                        onClick={onCLick(viewType.view)}
                    >
                        <Icon 
                            Svg={viewType.icon} 
                            className={classNames('', {[cls.notSelected]: viewType.view !== view})}
                        />
                    </Button>
                ))}
            </div>
        );
    };