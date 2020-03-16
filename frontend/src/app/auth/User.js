import axios from "axios";
import { authAPI } from "app/api/auth";

export function getUserData() {
    return new Promise((resolve, reject) => {
        axios
            .get(authAPI.user, {})
            .then(response => {
                // set user data in redux
                // console.log(response.data);
                resolve(response.data.data);
            })
            .catch(error => {
                console.log(error);
                reject(new Error("Failed to get user data."));
            });
    });
}
