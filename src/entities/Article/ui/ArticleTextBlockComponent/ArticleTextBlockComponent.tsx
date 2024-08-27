import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
   className?: string;
   block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            {block.title &&
                <Text title={block.title} className={cls.title} />
            }
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph}/>
            ))

            }
        </div>
    );
});