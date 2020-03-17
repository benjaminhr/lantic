import React from "react";

const StartScreenConfig = {
    routes: [
        {
            path: "/home",
            component: React.lazy(() => import("./StartScreen"))
        }
    ]
};

export default StartScreenConfig;
