import i18next from "i18next";
import React from "react";
// import authRoles from "app/auth/authRoles";
// import index from "./index";
import en from "./i18n/en";
import tr from "./i18n/tr";
import ar from "./i18n/ar";

i18next.addResourceBundle("en", "indexPage", en);
i18next.addResourceBundle("tr", "indexPage", tr);
i18next.addResourceBundle("ar", "indexPage", ar);

const indexConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: "/index",
            // auth: authRoles.user,
            component: React.lazy(() => import("./IndexPage"))
        }
    ]
};

export default indexConfig;
