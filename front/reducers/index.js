import { HYDRATE } from 'next-redux-wrapper';
import user from './user';
import post from './post';
import { combineReducers } from 'redux';

//(이전 상태, 액션) => 다움 상태 
const rootReducer = combineReducers({
    //serser side rendering을 위해서 hydrate에 index가 필요
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('Hydrate', action);
                return {
                    ...state, ...action.payload
                };

            default: //없으면(return값 undefined) error 발생
                return state;
        }
    },
    user, //안에 user.js의 initialstate
    post, //안에 post.js의 initialstate
});

export default rootReducer;