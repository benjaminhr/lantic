import React from "react";
import FuseUtils from "@fuse/utils";
import LanticConfigs from "app/main/Lantic/LanticConfigs";

const routeConfigs = [/*...AuthConfigs, indexConfig, VersionConfig,*/ ...LanticConfigs];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
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
