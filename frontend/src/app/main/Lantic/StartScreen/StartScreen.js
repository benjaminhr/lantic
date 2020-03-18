import FusePageCarded from "@fuse/core/FusePageCarded";
import React from "react";
import CommuteMode from "../CommuteMode/CommuteMode";
import Start from "./Start";

function StartScreen() {
    const testRoutes = [
        {
            mode: "driving",
            duration: "25 minutes",
            distance: "4 mi",
            routes: "????"
        },
        {
            mode: "walking",
            duration: "54 minutes",
            distance: "4 mi",
            routes: "????2"
        },
        {
            mode: "transit",
            duration: "37 minutes",
            distance: "4 mi",
            routes: "????3"
        }
    ];

    const [values, setValues] = React.useState({
        from: "",
        fromCoords: {
            long: "",
            lat: ""
        },
        to: "",
        toCoords: {
            long: "",
            lat: ""
        }
    });
    const [page, setPage] = React.useState("home");
    const [option, setOption] = React.useState(null);
    const [routes, setRoutes] = React.useState(testRoutes);

    const back = to => {
        setPage(to);
    };

    const whichPage = () => {
        switch (page) {
            case "mode": {
                const newProps = {
                    option,
                    setOption,
                    setPage,
                    routes,
                    backLoc: "home",
                    ...values
                };
                return <CommuteMode {...newProps} />;
            }
            case "map": {
                return (
                    <div routes setPage={back} backLoc="mode" {...values}>
                        Map Here!
                    </div>
                );
            }
            default: {
                // setRoutes(null)
                const newProps = {
                    setPage,
                    values,
                    setValues,
                    setRoutes,
                    setOption
                };
                return <Start {...newProps} />;
            }
        }
    };

    return <FusePageCarded content={whichPage()} />;
}

export default StartScreen;
