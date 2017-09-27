const axios = require("axios");

//AUTHORIZATION
axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});
const authUrl = "http://localhost:8080/auth/";
const profileUrl = "http://localhost:8080/profile/";

function authenticate(isValid, user) {
    return {
        type: "AUTHENTICATE",
        isValid,
        user
    }
}
function authError(err) {
    return {
        type: "AUTH_ERROR",
        err
    }
}

export function verifyToken() {
    return (dispatch) => {
        let token = localStorage.getItem("token");
        if (!token || token === "") return;
        axios.get(profileUrl + "verify")
            .then((response) => {
                let user = response.data.user,
                    isValid = response.data.success;
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({ verify: "Invalid token!" }));
            })
    }
}

export function signup(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "signup", credentials)
            .then((response) => {
                let user = response.data.user,
                    isValid = response.data.success,
                    token = response.data.token;
                localStorage.setItem("token", token);
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({ signup: "Invalid username or password!" }));
            })
    }
}

export function login(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "login", credentials)
            .then((response) => {
                let user = response.data.user,
                    isValid = response.data.success,
                    token = response.data.token;
                localStorage.setItem("token", token);
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({ login: "Invalid username or password!" }));
            })
    }
}

export function logout() {
    return (dispatch) => {
        localStorage.removeItem("token");
        dispatch({
            type: "LOGOUT"
        })
    }
}

//DATA
const dataUrl = "http://localhost:8080/dolphin";

const setData = function (dolphins) {
    return {
        type: "SET_DATA",
        dolphins
    }
}

export function loadDolphins() {
    return (dispatch) => {
        axios.get(dataUrl)
            .then((response) => {
                dispatch(setData(response.data));
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function addDolphin(dolphin) {
    return (dispatch) => {
        axios.post(dataUrl, dolphin)
            .then((response) => {
                dispatch(loadDolphins());
            })
            .catch((err) => {
                console.error(err);
            })
    }
}