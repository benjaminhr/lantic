import firebaseService from "app/services/firebaseService";
import * as Actions from "app/store/actions";
import _ from "lodash";
import * as UserActions from "./user.actions";
import userDefaults from "../../DefaultUser";

export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export function submitLoginWithFireBase({ username, password }) {
    if (!firebaseService.auth) {
        console.warn("Firebase Service didn't initialize, check your configuration");

        return () => false;
    }

    return dispatch =>
        firebaseService.auth
            .signInWithEmailAndPassword(username, password)
            .then(() => {
                return dispatch({
                    type: LOGIN_SUCCESS
                });
            })
            .catch(error => {
                console.info("error");
                const usernameErrorCodes = [
                    "auth/email-already-in-use",
                    "auth/invalid-email",
                    "auth/operation-not-allowed",
                    "auth/user-not-found",
                    "auth/user-disabled"
                ];
                const passwordErrorCodes = ["auth/weak-password", "auth/wrong-password"];

                const response =
                    process.env.NODE_ENV === "production"
                        ? {
                              username: "Invalid Username/Password combination",
                              password: "Invalid Username/Password combination"
                          }
                        : {
                              username: usernameErrorCodes.includes(error.code)
                                  ? `${error.message} This is only shown in development`
                                  : null,
                              password: passwordErrorCodes.includes(error.code)
                                  ? `${error.message} This is only shown in development`
                                  : null
                          };

                if (error.code === "auth/invalid-api-key") {
                    dispatch(Actions.showMessage({ message: error.message }));
                }

                return dispatch({
                    type: LOGIN_ERROR,
                    payload: response
                });
            });
}
