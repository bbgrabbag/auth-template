const axios = require("axios");

//AUTHORIZATION
const authUrl = "http://localhost:8080/auth/";

export function signup(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "signup", credentials)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function login(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "login", credentials)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
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