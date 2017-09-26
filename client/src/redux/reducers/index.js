let defaultState = {
    isAuthenticated: false,
    user: {
        email:"",
        username: ""
    },
    dolphins: []
};

const mainReducer = function (state = defaultState, action) {
    switch (action.type) {
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