import React from "react";
import FuseUtils from "@fuse/utils";
import indexConfig from "app/main/index/IndexConfig";
import AuthConfigs from "app/main/auth";
import ProfilePageConfig from "app/main/profile/ProfilePageConfig";
import VersionConfig from "app/main/version/VersionConfig";
import IndexPage from "app/main/index/IndexPage";
import { authRoles } from "app/auth";

const routeConfigs = [...AuthConfigs, indexConfig, ProfilePageConfig, VersionConfig];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path: "/",
        exact: true,
        auth: authRoles.user,
        component: () => <IndexPage />
    },
    {
        settings: {
            layout: {
                config: {
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
        component: React.lazy(() => import("app/main/errors/404/Error404Page"))
    }
];

export default routes;
