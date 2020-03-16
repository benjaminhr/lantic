import React from "react";
import { Typography } from "@material-ui/core";
import FuseAnimate from "@fuse/core/FuseAnimate";
import FusePageCarded from "@fuse/core/FusePageCarded";

function Error404Page() {
    return (
        <FusePageCarded
            content={
                <div className="flex flex-col flex-1 items-center justify-center p-16">
                    <div className="max-w-512 text-center">
                        <FuseAnimate animation="transition.expandIn" delay={100}>
                            <Typography variant="h1" color="inherit" className="font-medium mb-16">
                                404
                            </Typography>
                        </FuseAnimate>

                        <FuseAnimate delay={500}>
                            <Typography variant="h5" color="textSecondary" className="mb-16">
                                Sorry but we could not find the page you are looking for
                            </Typography>
                        </FuseAnimate>
                    </div>
                </div>
            }
        />
    );
}

export default Error404Page;
