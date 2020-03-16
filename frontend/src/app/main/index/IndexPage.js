import DemoContent from "@fuse/core/DemoContent";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useTranslation } from "react-i18next";
import FusePageCarded from "@fuse/core/FusePageCarded";

const useStyles = makeStyles(theme => ({
    layoutRoot: {}
}));

function IndexPage(props) {
    const classes = useStyles(props);
    const { t } = useTranslation("indexPage");

    return (
        <FusePageCarded
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="p-24">
                    <h2>{t("TITLE")}</h2>
                </div>
            }
            content={
                <div className="p-24">
                    <h4>Content</h4>
                    <br />
                    <DemoContent />
                </div>
            }
        />
    );
}

export default IndexPage;
