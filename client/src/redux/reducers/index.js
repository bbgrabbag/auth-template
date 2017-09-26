let defaultState = {
    isAuthenticated: false,
    user: {}
};

const mainReducer = function (state = defaultState, action) {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;