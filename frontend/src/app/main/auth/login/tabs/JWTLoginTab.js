import React, { useEffect, useRef, useState } from "react";
import { Button, Icon, InputAdornment } from "@material-ui/core";
import TextFieldFormsy from "@fuse/core/formsy/TextFieldFormsy";
import Formsy from "formsy-react";
import { useDispatch, useSelector } from "react-redux";

function JWTLoginTab(props) {
    const dispatch = useDispatch();
    const login = useSelector(({ auth }) => auth.login);

    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if (login.error && (login.error.username || login.error.password)) {
            formRef.current.updateInputsWithError({
                ...login.error
            });
            disableButton();
        }
    }, [login.error]);

    function disableButton() {
        setIsFormValid(false);
    }

    function enableButton() {
        setIsFormValid(true);
    }

    function handleSubmit(model) {
        dispatch(props.submitFunction(model));
    }

    return (
        <div className="w-full">
            <Formsy
                onValidSubmit={handleSubmit}
                onValid={enableButton}
                onInvalid={disableButton}
                ref={formRef}
                className="flex flex-col justify-center w-full"
            >
                <TextFieldFormsy
                    className="mb-16"
                    type="text"
                    name="username"
                    label="Username"
                    autoComplete="current-username"
                    validations={{
                        minLength: 1
                        // isEmail: true
                    }}
                    validationErrors={{
                        minLength: "Invalid username"
                        // isEmail: "Invalid email"
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Icon className="text-20" color="action">
                                    email
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                    variant="outlined"
                    required
                />

                <TextFieldFormsy
                    className="mb-16"
                    type="password"
                    name="password"
                    label="Password"
                    autoComplete="current-password"
                    validations={{
                        minLength: 4
                    }}
                    validationErrors={{
                        minLength: "Min character length is 4"
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Icon className="text-20" color="action">
                                    vpn_key
                                </Icon>
                            </InputAdornment>
                        )
                    }}
                    variant="outlined"
                    required
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="w-full mx-auto mt-16 normal-case"
                    aria-label="LOG IN"
                    disabled={!isFormValid}
                    value="legacy"
                >
                    Login
                </Button>
            </Formsy>
        </div>
    );
}

export default JWTLoginTab;
