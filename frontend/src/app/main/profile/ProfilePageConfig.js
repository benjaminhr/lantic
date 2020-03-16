import React from "react";

const ProfilePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: "/profile",
            component: React.lazy(() => import("./ProfilePage"))
        }
    ]
};

export default ProfilePageConfig;
