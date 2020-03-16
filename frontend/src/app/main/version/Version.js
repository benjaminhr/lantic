import React from "react";
import { Typography, Card, CardHeader, CardContent, Link } from "@material-ui/core";
import FusePageCarded from "@fuse/core/FusePageCarded";
import FuseAnimate from "@fuse/core/FuseAnimate/FuseAnimate";
import descriptions from "app/main/version/netlify_env";
import PopInfo from "app/main/version/PopInfo";

function Version() {
    // console.log("DEBUG:");
    console.log(process.env);
    const ignoreENV = ["WDS_SOCKET_HOST", "WDS_SOCKET_PATH", "WDS_SOCKET_PORT", "PUBLIC_URL"];
    const onNetlify = Boolean(process.env.REACT_APP_NETLIFY);
    return (
        <FusePageCarded
            header={
                <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
                    <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                        <FuseAnimate animation="transition.expandIn" delay={300}>
                            <Typography className="md:mx-24" variant="h4" color="inherit">
                                Version
                            </Typography>
                        </FuseAnimate>
                    </div>
                </div>
            }
            content={
                <div className="p-16 sm:p-24">
                    <Typography>
                        <b>Running Under</b>: {onNetlify ? "Netlify ✔" : "Not Netlify ❌"}
                    </Typography>

                    <Card variant="outlined" className="max-w-lg rounded-8 border-1">
                        <CardHeader title="Environment" />
                        <CardContent>
                            {Object.keys(process.env).map(
                                key =>
                                    !ignoreENV.includes(key) &&
                                    process.env[key] && (
                                        <Typography key={key}>
                                            <b>{key.startsWith("REACT_APP_") ? key.slice(10) : key}</b>
                                            {key in descriptions && <PopInfo data={descriptions[key]} />}-{" "}
                                            {process.env[key] || "N/A"}
                                        </Typography>
                                    )
                            )}
                            {onNetlify && (
                                <Typography>
                                    <b>Commit Link</b>:{" "}
                                    <Link
                                        rel="noreferrer"
                                        href={`${process.env.REACT_APP_REPOSITORY_URL}/commit/${process.env.REACT_APP_COMMIT_REF}`}
                                        target="_blank"
                                    >
                                        {process.env.REACT_APP_REPOSITORY_URL}/commit/
                                        {process.env.REACT_APP_COMMIT_REF}
                                    </Link>
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </div>
            }
        />
    );
}

export default Version;
