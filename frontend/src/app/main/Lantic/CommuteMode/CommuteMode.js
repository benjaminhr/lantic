import React from "react";
import Typography from "@material-ui/core/Typography";
import { KeyboardArrowRight } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import Header from "../SharedComponents/Header/Header";
import Option from "./Option/Option";
import List from "@material-ui/core/List";

function CommuteMode(props) {
    if (!props.from) {
        props = { ...props, from: "Test From", to: "Test To" };
    }

    const option = props.option;
    const setOption = props.setOption;

    const goToMap = () => {
        props.setPage("map");
    };

    return (
        <div className="p-12">
            <Header className="min-h-64" {...props} />
            <Typography variant="h5" className="company_text font-bold text-left mt-48">
                {`${props.from}`}
            </Typography>
            <Typography variant="h5" className="company_text font-bold text-left">
                {`to`}
            </Typography>
            <Typography variant="h5" className="company_text font-bold text-left mb-32">
                {`${props.to}`}
            </Typography>
            <div>
                <List className={"bg-white"}>
                    <Option set={setOption} active={option === 1} id={1} />
                    <Option set={setOption} active={option === 2} id={2} />
                </List>
            </div>

            <Fab
                className="w-full mt-64"
                variant="extended"
                disabled={option === null}
                color="primary"
                aria-label="add"
                onClick={goToMap}
            >
                <KeyboardArrowRight />
                Go!
            </Fab>
        </div>
    );
}

export default CommuteMode;
