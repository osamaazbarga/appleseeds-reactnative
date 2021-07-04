import {LOGIN,LOGOUT,DARK_TOGGLE} from './userTypes'

const userReducer=(state = null, action) =>{
    switch (action.type) {
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return action.payload;
        case DARK_TOGGLE:
            return action.payload;

        default:
            return state;
    }
}

export default userReducer