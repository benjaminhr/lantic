import React from "react";
import { List, Typography, Fab } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import Header from "../SharedComponents/Header/Header";
import Option from "./Option/Option";
import _ from "lodash";
import RouteDetails from "app/main/Lantic/CommuteMode/RouteDetails/RouteDetails";

function CommuteMode(props) {
    const { option, setOption, setPage, to, from, routes } = props;
    const [detail, setDetail] = React.useState(false);

    const goToMap = () => {
        setPage("map");
    };

    const goToDetails = () => {
        setDetail(true);
    };

    const optProps = {
        setOption
    };

    const sortedRoutes = _.sortBy(routes, [
        route => {
            return route.duration.split(" ")[0];
        }
    ]);

    return (
        <div className="p-12 h-full">
            <Header className="min-h-64" {...props} />
            <Typography variant="h5" className="company_text font-bold text-left mt-48">
                {`${from}`}
            </Typography>
            <Typography variant="h5" className="company_text font-bold text-left">
                {`to`}
            </Typography>
            <Typography variant="h5" className="company_text font-bold text-left mb-32">
                {`${to}`}
            </Typography>

            <div>
                {detail && option != null ? (
                    <RouteDetails route={sortedRoutes[option]} {...props} />
                ) : (
                    <List className={"py-0 rounded-lg"}>
                        {sortedRoutes.map((route, i) => (
                            <Option {...optProps} route={route} active={option === i} id={i} key={i} />
                        ))}
                    </List>
                )}
            </div>

            <Fab
                className="w-full mt-64"
                variant="extended"
                disabled={option === null}
                color="primary"
                aria-label="add"
                onClick={goToDetails}
            >
                {detail && <KeyboardArrowRight />}
                {detail ? "Go" : "View"}
            </Fab>
        </div>
    );
}

export default CommuteMode;
