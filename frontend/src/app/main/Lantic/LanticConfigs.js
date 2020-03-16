import SplashScreenConfig from "./SplashScreen/SplashScreenConfig";
import MapConfig from "./MapView/MapConfig";

const rawConfigs = [SplashScreenConfig];

const LanticConfigs = rawConfigs.map(conf => {
    conf.settings = {
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
    };
    return conf;
});

export default LanticConfigs;
