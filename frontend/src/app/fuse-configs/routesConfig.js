import React from "react";
import FuseUtils from "@fuse/utils";
import LanticConfigs from "app/main/Lantic/LanticConfigs";
import { Redirect } from "react-router-dom";

const routeConfigs = [...LanticConfigs];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path: "/",
        component: () => <Redirect to={"/home"}/>
    },
    {
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
        component: React.lazy(() => import("../main/Lantic/404/Error404Page"))
    }
];

export default routes;
