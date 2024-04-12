import {atom} from "recoil";
import {localStorageEffect} from "../localStoragePersistence/index.jsx";

export const authenticationData = atom({
    key: 'authenticationData',
    default: {
        expiryDate: 0,
        password: '',
        refreshToken: '',
        role: '',
        token: '',
        userName: '',
    },
    effects: [
        localStorageEffect('current_user'),
    ]
});