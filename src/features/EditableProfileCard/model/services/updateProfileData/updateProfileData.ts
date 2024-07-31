import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../../../../entities/Profile/model/types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
import { getProfileForm } from '../../selectors/getProfileData/getProfileData';


export const updateProfileData = 
    createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
        'profile/updateProfileData', 
        async (_, thunkAPI) => {

            const { extra, rejectWithValue, getState} = thunkAPI;

            const formData = getProfileForm(getState()); 
            const errors = validateProfileData(formData);  
        
            if(errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(
                    `/profile/${formData?.id}`, 
                    formData
                );
                if (!response.data) {
                    throw new Error();
                }
    
                return response.data;
            
            } catch (error) {
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        });