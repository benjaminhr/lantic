import FusePageCarded from "@fuse/core/FusePageCarded";
import React from "react";
import CommuteMode from "../CommuteMode/CommuteMode";
import Start from "./Start";

function StartScreen() {
    let initialRoutes = [];
    if (process.env.NODE_ENV !== "production")
        // when testing, initialise to made up routes
        initialRoutes = [
            {
                mode: "driving",
                duration: "25 minutes",
                distance: "4 mi",
                routes: [
                    {
                        instruction: "Take bus from X",
                        weather: "☀"
                    },
                    {
                        instruction: "Change buses at Y",
                        weather: "🌧"
                    },
                    {
                        instruction: "Arrive at Z",
                        weather: "☁"
                    }
                ]
            },
            {
                mode: "walking",
                duration: "54 minutes",
                distance: "4 mi",
                routes: [
                    {
                        instruction: "Take bus from X",
                        weather: "☀"
                    },
                    {
                        instruction: "Change buses at Y",
                        weather: "🌧"
                    },
                    {
                        instruction: "Arrive at Z",
                        weather: "☁"
                    }
                ]
            },
            {
                mode: "transit",
                duration: "37 minutes",
                distance: "4 mi",
                routes: [
                    {
                        instruction: "Take bus from X",
                        weather: "☀"
                    },
                    {
                        instruction: "Change buses at Y",
                        weather: "🌧"
                    },
                    {
                        instruction: "Arrive at Z",
                        weather: "☁"
                    }
                ]
            }
        ];

    const [userInput, setUserInput] = React.useState({
        from: "",
        to: ""
    }); // tracks user input values
    const [page, setPage] = React.useState("home"); // dont reinvent the wheel, ye well....
    const [option, setOption] = React.useState(null); // which option was selected
    const [routes, setRoutes] = React.useState(initialRoutes); // routes (ie Bus vs Walk)
    const [weatherInfo, setWeatherInfo] = React.useState(); // for storing weather info globally

    const whichPage = () => {
        switch (page) {
            case "mode": {
                const newProps = {
                    option,
                    setOption,
                    setPage,
                    routes,
                    weatherInfo,
                    setWeatherInfo,
                    backLoc: "home",
                    ...userInput
                };
                return <CommuteMode {...newProps} />;
            }
            case "map": {
                return (
                    <div routes setPage={setPage} backLoc="mode" {...userInput}>
                        Map Here!
                    </div>
                );
            }
            default: {
                const newProps = {
                    setPage,
                    userInput,
                    setUserInput,
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
