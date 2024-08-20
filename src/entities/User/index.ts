export {userReducer, userActions} from './model/slice/userSlice';
export type {User, UserShema} from './model/types/user';
export {UserRole} from './model/consts/consts';
export {getUserAuthData} from './model/selectors/getUserAuthData/getUserAuthData';
export {getUserInited} from './model/selectors/getUserInited/getUserInited';
export {getUserRole, isUserAdmin, isUserManager} from './model/selectors/getUserRole/getUserRole';