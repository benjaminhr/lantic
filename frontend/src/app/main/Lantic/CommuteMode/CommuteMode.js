import React from "react";
import Typography from "@material-ui/core/Typography";
import { KeyboardArrowRight } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import Header from "app/main/Lantic/SharedComponents/Header/Header";

function CommuteMode(props) {
    return (
        <div className="p-12">
            <Header className="min-h-64" {...props} />
            <Typography variant="h4" className="company_text font-bold text-center mt-48 mb-32">
                {`${props.from} to ${props.to}`}
            </Typography>
            <div className="pt-32" />
            <Fab
                className="w-full mt-64"
                variant="extended"
                color="primary"
                aria-label="add"
                // onClick={handleSearch}
            >
                <KeyboardArrowRight />
                Go!
            </Fab>
        </div>
    );
}

export default CommuteMode;
