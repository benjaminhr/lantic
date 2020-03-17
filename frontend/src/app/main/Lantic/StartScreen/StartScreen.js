import FusePageCarded from "@fuse/core/FusePageCarded";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { Icon } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { MyLocation, Search } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
// import Geolocation from "react-geolocation";

function StartScreen() {
    const [values, setValues] = React.useState({
        from: "",
        fromCoords: {
            long: "",
            lat: ""
        },
        to: "",
        toCoords: {
            long: "",
            lat: ""
        }
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickGetLocation = event => {
        event.preventDefault();
        setTimeout(() => {
            setValues({
                ...values,
                from: "Queen Mary University of London",
                fromCoords: {
                    long: "0.0404",
                    lat: "51.5241"
                }
            });
        }, 250);
    };

    const handleSearch = event => {
        console.log(values);
        setValues({ ...values, toCoords: { long: "0.1419", lat: "51.5014" } });
    };

    return (
        <FusePageCarded
            content={
                <div className="p-24">
                    <div className="min-h-64">HEADER HERE </div>
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
                                value={values.from}
                                className={"w-full bg-white"}
                                onChange={handleChange("from")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="get your location"
                                            onClick={handleClickGetLocation}
                                            edge="end"
                                        >
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
                                value={values.to}
                                className={"w-full bg-white"}
                                onChange={handleChange("to")}
                                labelWidth={70}
                            />
                        </FormControl>
                    </div>
                    <Fab
                        className={"w-full mt-64"}
                        disabled={!(values.from && values.to)}
                        variant="extended"
                        color="primary"
                        aria-label="add"
                        onClick={handleSearch}
                    >
                        <Search />
                        Search
                    </Fab>
                </div>
            }
        />
    );
}

export default StartScreen;
