import React from "react";
import { Redirect } from "react-router-dom";

const ContactsAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: "/users/list/:id",
            component: React.lazy(() => import("./ContactsApp"))
        },
        {
            path: "/users/list",
            component: () => <Redirect to="/users/list/all" />
        }
    ]
};

export default ContactsAppConfig;
