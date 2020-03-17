import React from "react";
import Typography from "@material-ui/core/Typography";

function FuseSplashScreen() {
    return (
        <div id="fuse-splash-screen">
            <div className="center">
                <Typography >
                    Lantic
                </Typography>
                <div className="logo">
                    <img
                        width="128"
                        src="assets/lantic-logo-512x512.png"
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
