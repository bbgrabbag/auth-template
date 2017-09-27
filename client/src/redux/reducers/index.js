let defaultState = {
    isAuthenticated: false,
    user: {
        email: "",
        username: "",
        _id: "",
        admin: false
    },
    authError: {
        verify: "",
        login: "",
        signup: ""
    },
    dolphins: []
};

const mainReducer = function (state = defaultState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                isAuthenticated: action.isValid,
                user: action.user,
                authError: {
                    verify: "",
                    login: "",
                    signup: ""
                }
            }
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: {
                    email: "",
                    username: "",
                    _id: "",
                    admin: false
                },
                dolphins: []
            }
        case "AUTH_ERROR":
            return {
                ...state,
                authError: {
                    ...state.authError,
                    ...action.err
                }
            }
        case "SET_DATA":
            return {
                ...state,
                dolphins: action.dolphins
            }
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;