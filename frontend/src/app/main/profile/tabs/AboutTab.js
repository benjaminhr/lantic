import FuseAnimateGroup from "@fuse/core/FuseAnimateGroup";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import _ from "lodash";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import * as moment from "moment";

function AboutTab(props) {
    const { data } = props;

    // console.log(data);
    const { gender, phone, dob } = data.profile;
    const { email_address, created } = data.user;

    return (
        <div className="md:flex max-w-2xl">
            <div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="px-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
                                    General Information
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent>
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Gender</Typography>
                                <Typography>{_.capitalize(gender)}</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Birthday</Typography>
                                <Typography>{moment(dob.date).format("DD-MM-YYYY")}</Typography>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="px-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1 px-12">
                                    Contact
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent>
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Tel.</Typography>

                                <div className="flex items-center" key={phone}>
                                    <Typography>{phone}</Typography>
                                </div>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">Created On</Typography>

                                <div className="flex items-center" key={phone}>
                                    <Typography>{created}</Typography>
                                </div>
                            </div>

                            <div className="mb-24">
                                <div className="flex items-center">
                                    <Typography>{email_address}</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </FuseAnimateGroup>
            </div>

            <div className="flex flex-col md:w-320">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0} />
                    </Card>
                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default AboutTab;
