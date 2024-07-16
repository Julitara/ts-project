import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';


interface ArticleCreatePageProps {
   className?: string;
}

const ArticleCreatePage = (props: ArticleCreatePageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>

        </div>
    );
};

export default ArticleCreatePage;