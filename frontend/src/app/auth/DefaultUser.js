const userDefaults = {
    uuid: "XgbuVEXBU5gtSKdbQRP1Zbbby1i1",
    from: "custom-db",
    password: "admin",
    role: "admin",
    data: {
        displayName: "Abbott Keitch",
        photoURL: "assets/images/avatars/Abbott.jpg",
        email: "admin",
        settings: {
            layout: {
                style: "layout1",
                config: {
                    scroll: "content",
                    navbar: {
                        display: true,
                        folded: true,
                        position: "left"
                    },
                    toolbar: {
                        display: true,
                        style: "fixed",
                        position: "below"
                    },
                    footer: {
                        display: true,
                        style: "fixed",
                        position: "below"
                    },
                    mode: "fullwidth"
                }
            },
            customScrollbars: true,
            theme: {
                main: "defaultDark",
                navbar: "defaultDark",
                toolbar: "defaultDark",
                footer: "defaultDark"
            }
        },
        shortcuts: ["calendar", "mail", "contacts"]
    }
};

export default userDefaults;
