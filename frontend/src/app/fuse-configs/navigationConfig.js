import i18next from "i18next";
import authRoles from "app/auth/authRoles";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
    {
        id: "index-page",
        title: "Home",
        translate: "HOME",
        type: "item",
        icon: "home",
        url: "/",
        exact: true
    },
    {
        id: "login-page",
        title: "Login",
        translate: "LOGIN",
        type: "item",
        icon: "whatshot",
        url: "/login",
        auth: authRoles.onlyGuest
    },
    {
        id: "um",
        title: "User Management",
        // translate: "UM",
        type: "collapse",
        icon: "person",
        auth: authRoles.user,
        children: [
            {
                id: "logout",
                title: "Logout",
                // translate: "LOGOUT",
                type: "item",
                icon: "exit_to_app",
                url: "/logout",
                auth: authRoles.user
            }
        ]
    },
    {
        id: "settings",
        title: "Settings",
        // translate: "UM",
        type: "collapse",
        icon: "settings",
        auth: authRoles.admin,
        children: [
            {
                id: "security",
                title: "Security",
                // translate: "SECURITY",
                type: "item",
                icon: "verified_user",
                url: "/security"
            }
        ]
    }
];

export default navigationConfig;
