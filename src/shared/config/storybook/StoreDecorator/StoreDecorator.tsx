import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export default function StoreDecorator(
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) {
    return function StoreDecorator (StoryComponent: Story) {
        return (
            <StoreProvider 
                initialState={state} 
                asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
            >
                <StoryComponent />
            </StoreProvider>
        );
    };
}