import FuseAnimate from "@fuse/core/FuseAnimate";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import React, { useState /* , useEffect */ } from "react";
import history from "@history";
// import axios from "axios";
import { useSelector } from "react-redux";
import FusePageCarded from "@fuse/core/FusePageCarded";
import FuseSettings from "@fuse/core/FuseSettings/FuseSettings";
import AboutTab from "./tabs/AboutTab";

const useStyles = makeStyles(theme => ({
    layoutHeader: {}
}));

function ProfilePage() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);
    const [profile] = useState({
        user: useSelector(({ auth }) => auth.user),
        profile: {
            gender: "Male",
            phone: "12345 678901",
            dob: {
                date: "1997-03-13T22:44:30.652Z"
            }
        }
    });

    function handleTabChange(event, value) {
        setSelectedTab(value);
        history.push(`${history.location.pathname}/${value}`);
    }

    if (!profile.profile) {
        return null;
    }

    return (
        <FusePageCarded
            classes={{
                header: classes.layoutHeader,
                toolbar: "px-16 sm:px-24"
            }}
            header={
                <div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
                    <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
                        <FuseAnimate animation="transition.expandIn" delay={300}>
                            <Avatar className="w-96 h-96" src={profile.user.data.photoURL} />
                        </FuseAnimate>
                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                            <Typography className="md:mx-24" variant="h4" color="inherit">
                                {`${profile.user.first_name} ${profile.user.last_name}`}
                            </Typography>
                        </FuseAnimate>
                    </div>
                </div>
            }
            contentToolbar={
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="off"
                    classes={{
                        root: "h-64 w-full border-b-1"
                    }}
                >
                    <Tab
                        classes={{
                            root: "h-64"
                        }}
                        label="About"
                    />
                    <Tab
                        classes={{
                            root: "h-64"
                        }}
                        label="Theme Settings"
                    />
                </Tabs>
            }
            content={
                <div className="p-16 sm:p-24">
                    {selectedTab === 0 && <AboutTab data={profile} />}
                    {selectedTab === 1 && <FuseSettings />}
                </div>
            }
        />
    );
}

export default ProfilePage;
