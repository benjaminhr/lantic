import FusePageCarded from "@fuse/core/FusePageCarded";
import React from "react";
import CommuteMode from "../CommuteMode/CommuteMode";
import Start from "./Start";

function StartScreen() {
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

    const back = to => {
        setPage(to);
    };

    const whichPage = () => {
        switch (page) {
            case "mode": {
                return <CommuteMode option={option} setOption={setOption} setPage={back} backLoc="home" {...values} />;
            }
            case "map": {
                return (
                    <div setPage={back} backLoc="mode" {...values}>
                        Map Here!
                    </div>
                );
            }
            default: {
                return <Start setPage={back} values={values} setValues={setValues} />;
            }
        }
    };

    return <FusePageCarded content={whichPage()} />;
}

export default StartScreen;
