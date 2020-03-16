import * as userActions from "app/auth/store/actions";
import SplashScreen from "app/main/Lantic/SplashScreen/SplashScreen";
import * as Actions from "app/store/actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Auth extends Component {
    state = {
        waitAuthCheck: false
    };

    componentDidMount() {
        // return Promise.all([this.firebaseCheck()])
        //     .then(() => {
        //         this.setState({ waitAuthCheck: false });
        //     })
        //     .catch(error => console.error(error));
    }

    // firebaseCheck = () =>
    //     new Promise(resolve => {
    //         firebaseService.init(success => {
    //             if (!success) {
    //                 resolve();
    //             }
    //         });
    //
    //         firebaseService.onAuthStateChanged(authUser => {
    //             if (authUser) {
    //                 this.props.showMessage({ message: "Logging in with Firebase" });
    //
    //                 /**
    //                  * Retrieve user data from Firebase
    //                  */
    //                 firebaseService.getUserData(authUser.uid).then(
    //                     user => {
    //                         this.props.setUserDataFirebase(user, authUser);
    //
    //                         resolve();
    //
    //                         this.props.showMessage({ message: "Logged in with Firebase" });
    //                     },
    //                     error => {
    //                         resolve();
    //                     }
    //                 );
    //             } else {
    //                 resolve();
    //             }
    //         });
    //
    //         return Promise.resolve();
    //     });

    render() {
        return this.state.waitAuthCheck ? <SplashScreen /> : <>{this.props.children}</>;
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            logout: userActions.logoutUser,
            setUserData: userActions.setUserData,
            setUserDataFirebase: userActions.setUserDataFirebase,
            showMessage: Actions.showMessage,
            hideMessage: Actions.hideMessage
        },
        dispatch
    );
}

export default connect(null, mapDispatchToProps)(Auth);
