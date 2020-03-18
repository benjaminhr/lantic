import Header from "app/main/Lantic/SharedComponents/Header/Header";
import Typography from "@material-ui/core/Typography";
import { Icon } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { MyLocation, Search } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import React from "react";

function Start(props) {
    const handleChange = prop => event => {
        props.setValues({ ...props.values, [prop]: event.target.value });
    };

    const handleClickGetLocation = event => {
        event.preventDefault();
        setTimeout(() => {
            props.setValues({
                ...props.values,
                from: "Queen Mary University of London",
                fromCoords: {
                    long: "0.0404",
                    lat: "51.5241"
                }
            });
        }, 250);
    };

    const handleSearch = event => {
        console.log(props.values);
        props.setValues({ ...props.values, toCoords: { long: "0.1419", lat: "51.5014" } });
        props.setPage("mode");
    };

    return (
        <div className="p-12">
            <Header className={"min-h-64"} />
            <Typography variant="h4" className="company_text font-bold text-center mt-48 mb-32">
                Where are you going today?<Icon>cloud</Icon>
            </Typography>
            <div className={"pt-32"}>
                <FormControl variant="outlined" className={"w-full"}>
                    <InputLabel htmlFor="from-field" className={"font-bold text-lg"}>
                        From
                    </InputLabel>
                    <OutlinedInput
                        id="from-field"
                        type="text"
                        value={props.values.from}
                        className={"w-full bg-white"}
                        onChange={handleChange("from")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="get your location" onClick={handleClickGetLocation} edge="end">
                                    <MyLocation />
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>

                <FormControl variant="outlined" className={"w-full mt-16"}>
                    <InputLabel htmlFor="to-field" className={"font-bold text-lg"}>
                        To
                    </InputLabel>
                    <OutlinedInput
                        id="to-field"
                        type="text"
                        value={props.values.to}
                        className={"w-full bg-white"}
                        onChange={handleChange("to")}
                        labelWidth={70}
                    />
                </FormControl>
            </div>
            <Fab
                className={"w-full mt-64"}
                disabled={!(props.values.from && props.values.to)}
                variant="extended"
                color="primary"
                aria-label="add"
                onClick={handleSearch}
            >
                <Search />
                Search
            </Fab>
        </div>
    );
}

export default Start;
