import SplashScreenConfig from "./SplashScreen/SplashScreenConfig";
import MapConfig from "./MapView/MapConfig";
import StartScreenConfig from "./StartScreen/StartScreenConfig";
import CommModeConfig from "./CommuteMode/CommModeConfig";

const rawConfigs = [StartScreenConfig, CommModeConfig];

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
