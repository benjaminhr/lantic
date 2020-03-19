import MapConfig from "./MapView/MapConfig";
import StartScreenConfig from "./StartScreen/StartScreenConfig";

const rawConfigs = [StartScreenConfig];

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
