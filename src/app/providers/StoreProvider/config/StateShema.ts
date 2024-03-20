import { CounterShema } from 'entities/Counter';
import { UserShema } from 'entities/User';


export interface StateShema {
    counter: CounterShema;
    user: UserShema;
    
}