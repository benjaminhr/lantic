import React from "react";

const StartScreenConfig = {
    routes: [
        {
            path: "/mode",
            component: React.lazy(() => import("./CommuteMode"))
        }
    ]
};

export default StartScreenConfig;
