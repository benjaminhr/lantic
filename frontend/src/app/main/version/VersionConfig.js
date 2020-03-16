import React from "react";
import { authRoles } from "app/auth";

const VersionConfig = {
    settings: {
        layout: {
            config: {
                navbar: {
                    display: false
                },
                toolbar: {
                    display: false
                },
                footer: {
                    display: false
                },
                leftSidePanel: {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
        }
    },
    routes: [
        {
            path: "/version",
            auth: authRoles.admin,
            component: React.lazy(() => import("./Version"))
        }
    ]
};

export default VersionConfig;
