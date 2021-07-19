export const initialState = {
    isLoggedIn: false,
    isLoggedIn: false, //로그인 시도중
    isLoggingOut: false, //로그아웃 시도중
    me: null, //내 정보(나의 로그인)
    signUpData: {},
    loginData: {},
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            return {
                ...state,
                isLoggingIn: true,
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: {...action.data, nickname: 'zerocho'},
            };

        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            };

        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                isLoggingOut: true,
            };
                
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,

            };

        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                isLoggingOut: false,
                me: null,

            };
            
        default:
            return state;
    }
}

export default reducer;