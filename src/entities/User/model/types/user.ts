export interface User {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserShema {
    authData?: User;

    _inited: boolean;    
}