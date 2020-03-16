import axios from "axios";

export const GET_USER_DATA = "[CONTACTS APP] GET USER DATA";

export function getUserData() {
    const request = axios.get("/api/list-app/user");

    return dispatch =>
        request.then(response =>
            dispatch({
                type: GET_USER_DATA,
                payload: response.data
            })
        );
}
