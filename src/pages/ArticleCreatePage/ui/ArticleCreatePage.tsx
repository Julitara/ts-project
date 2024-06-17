import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCreatePAge.module.scss';

interface ArticleCreatePageProps {
   className?: string;
}

const ArticleCreatePage = (props: ArticleCreatePageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleCreatePage, {}, [className])}>

        </div>
    );
};

export default ArticleCreatePage;