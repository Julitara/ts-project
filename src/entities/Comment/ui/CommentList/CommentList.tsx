import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import { VStack } from 'shared/ui/Stack';

interface CommentListProps {
   className?: string;
   comments?: Comment[];
   isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap='16' max className={classNames('', {}, [className])}>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </VStack>
        );
    }

    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            {comments?.length 
                ? comments.map((comment, i) => (
                    <CommentCard 
                        comment={comment} 
                        key={comment.id}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('no comments')}/>

            }
        </VStack>
    );
});