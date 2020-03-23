import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Error404Page from "app/main/Lantic/404/Error404Page";
import FusePageCarded from "@fuse/core/FusePageCarded";
import { useForm } from "@fuse/hooks";
import Start from "./Start";
import CommuteMode from "../CommuteMode/CommuteMode";

function BaseScreen() {
    const { form, handleChange, setForm } = useForm({
        from: "",
        to: ""
    }); // tracks user input values
    const [option, setOption] = React.useState(null); // which option was selected
    const [routes, setRoutes] = React.useState(null); // routes (ie Bus vs Walk)
    const [weatherInfo, setWeatherInfo] = React.useState(null); // for storing weather info globally

    return (
        <FusePageCarded
            content={
                <Router>
                    <Switch>
                        <Route
                            path="/mode"
                            render={props => {
                                const modeProps = {
                                    option,
                                    setOption,
                                    routes,
                                    weatherInfo,
                                    setWeatherInfo,
                                    ...form
                                };

                                return routes === null ? (
                                    <Redirect to="/home" />
                                ) : (
                                    <CommuteMode {...props} {...modeProps} />
                                );
                            }}
                        />
                        <Route
                            path="/home"
                            render={props => {
                                const homeProps = {
                                    form,
                                    handleChange,
                                    setForm,
                                    setRoutes,
                                    setOption
                                };
                                return <Start {...props} {...homeProps} />;
                            }}
                        />
                        <Route exact path="/" component={() => <Redirect to="/home" />} />
                        <Route path="*" component={Error404Page} />
                    </Switch>
                </Router>
            }
        />
    );
}

export default BaseScreen;
