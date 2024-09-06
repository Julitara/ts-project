import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
   className?: string;
   title?: string;
   feedbackTitle?: string;
   hasFreedback?: boolean;
   onCancel?: (starsCount: number) => void;
   onAccept?: (starsCount: number, feedback?: string) => void;
   rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { 
        className,
        title,
        feedbackTitle,
        hasFreedback,
        onCancel,
        onAccept,
        rate = 0 
    } = props;
    const { t } = useTranslation();
    const isMobile = useDevice();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if(hasFreedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFreedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle}/>
            <Input 
                placeholder={t('write here your review')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card max className={className}>
            <VStack align='center' gap='8'>
                <Text title={starsCount ? t('Спасибо за оценку!') : title}/>
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars}/>
            </VStack>
            {isMobile ?
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack gap='32'>
                        {modalContent}
                        <Button 
                            size={ButtonSize.L} 
                            onClick={acceptHandler}
                            fullWidth
                        >
                            {t('SEND')}
                        </Button>
                    </VStack>
                </Drawer>
                :
                <Modal isOpen={isModalOpen} lazy>
                    {modalContent}
                    <VStack gap='32' max>
                        <HStack max gap='16' justify='end'>
                            <Button 
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={cancelHandler}
                            >
                                {t('CLOSE')}
                            </Button>
                            <Button 
                                onClick={acceptHandler}
                            >
                                {t('SEND')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            }
        </Card>
    );
});