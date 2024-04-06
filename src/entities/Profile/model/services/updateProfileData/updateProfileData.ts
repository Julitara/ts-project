import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';


export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData', 
    async (_, thunkAPI) => {

        const { extra, rejectWithValue, getState} = thunkAPI;

        const formData = getProfileData(getState());
        console.log(formData);
        

        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            //throw new Error();
            if (!response.data) {
                throw new Error();
            }
    
            return response.data;
            
        } catch (error) {
            return rejectWithValue('error');
        }
    });