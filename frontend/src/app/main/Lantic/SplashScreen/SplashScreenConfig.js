import React from "react";

const SplashScreenConfig = {
    routes: [
        {
            path: "/home",
            // auth: authRoles.user,
            component: React.lazy(() => import("./SplashScreen"))
        }
    ]
};

export default SplashScreenConfig;