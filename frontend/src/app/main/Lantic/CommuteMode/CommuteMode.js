import React from "react";
import { List, Typography, Fab } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import RouteDetails from "app/main/Lantic/CommuteMode/RouteDetails/RouteDetails";
import _ from "lodash";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Header from "../SharedComponents/Header/Header";
import Option from "./Option/Option";

function CommuteMode(props) {
    const { option, setOption, to, from, routes, weatherInfo, location } = props;
    const { path, url } = useRouteMatch();
    const history = useHistory();
    const showingRouteDetails = location.pathname.split(path)[1] !== "";

    const goToMap = () => {
        history.push("/map");
    };

    const goToDetails = () => {
        history.push(`${url}/${sortedRoutes[option.index].mode}`);
    };

    const optProps = {
        setOption
    };

    const sortedRoutes = _.sortBy(routes, [
        route => {
            const d = route.duration;
            const isHours = d.indexOf("hour");
            let hours = 0;
            if (isHours !== -1) hours = Number(d.slice(0, isHours - 1));

            const half = d.split(" min")[0];
            let mins = Number(half.slice(half.length - 2));
            mins += hours * 60;

            return mins;
        }
    ]);

    return (
        <div className="p-28 h-full">
            <Header className="min-h-64" {...props} />
            <Typography variant="h5" className="company_text font-bold text-left mt-48">
                {`${from}`}
            </Typography>
            <Typography variant="h5" className="company_text font-bold text-left">
                to
            </Typography>
            <Typography variant="h5" className="company_text font-bold text-left mb-32">
                {`${to}`}
            </Typography>

            <Switch>
                <Route
                    exact
                    path={path}
                    render={ps => (
                        <List className="py-0 rounded-lg">
                            {sortedRoutes.map((route, i) => (
                                <Option {...optProps} route={route} active={option === i} id={i} key={i} />
                            ))}
                        </List>
                    )}
                />
                <Route
                    path={`${path}/:routeType`}
                    render={ps => {
                        return <RouteDetails {...props} />;
                    }}
                />
            </Switch>

            <Fab
                className="w-full my-64"
                variant="extended"
                disabled={option === null || (showingRouteDetails && !weatherInfo)}
                color="primary"
                aria-label="add"
                onClick={showingRouteDetails ? goToMap : goToDetails}
            >
                <KeyboardArrowRight />
                {showingRouteDetails ? "Go" : "View"}
            </Fab>
        </div>
    );
}

export default CommuteMode;
