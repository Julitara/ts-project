import { AddCommentFormShema } from '../types/AddCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test set comment text', () => {
        const state: DeepPartial<AddCommentFormShema> = {text: 'text'};

        expect(addCommentFormReducer(
            state as AddCommentFormShema, 
            addCommentFormActions.setText('new text'))).toEqual({text: 'new text'}
        );
    });
});