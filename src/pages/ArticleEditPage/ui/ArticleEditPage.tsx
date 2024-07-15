import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
   className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {id} = useParams<{id: string}>();
    const isEdit = Boolean(id);
    
    return (
        <Page className={classNames(cls.articleEditPage, {}, [className])}>
            {isEdit ? 'edit' : 'new'}
        </Page>
    );
};

export default ArticleEditPage;