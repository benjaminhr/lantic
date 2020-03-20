import React from "react";
import BaseScreen from "app/main/Lantic/StartScreen/BaseScreen";

const routes = [
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
        path: "/",
        component: () => <BaseScreen />
    }
];

export default routes;
