import React from "react";

function FuseSplashScreen() {
    return (
        <div id="fuse-splash-screen">
            <div className="center">
                <div className="logo">
                    {/* <img width="128" src="assets/images/logos/fuse.svg" alt="logo" /> */}
                    <img
                        width="128"
                        src="assets/png%20ico/projectxs%20logo%20new2%20metalic%20blue%20512x512%20ico.ico"
                        alt="logo"
                    />
                </div>
                <div className="spinner-wrapper">
                    <div className="spinner">
                        <div className="inner">
                            <div className="gap" />
                            <div className="left">
                                <div className="half-circle" />
                            </div>
                            <div className="right">
                                <div className="half-circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(FuseSplashScreen);
