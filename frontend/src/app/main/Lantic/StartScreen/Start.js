import Header from "app/main/Lantic/SharedComponents/Header/Header";
import {
    Fab,
    Icon,
    Typography,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton
} from "@material-ui/core";
import { MyLocation, Search } from "@material-ui/icons";
import React, { useEffect } from "react";
import axios from "axios";

function Start(props) {
    // todo enter correct url here
    axios.defaults.baseURL = "http://our-site-url.com";
    const { setRoutes, setPage, setOption, userInput, setUserInput } = props;

    const handleChange = prop => event => {
        setUserInput({ ...userInput, [prop]: event.target.value });
    };

    useEffect(() => {
        setOption(null);
    }, [setOption]);

    const handleGetLocation = event => {
        event.preventDefault();
        setTimeout(() => {
            setUserInput({
                ...userInput,
                from: "Queen Mary University of London"
            });
        }, 250);
    };

    const handleSearch = event => {
        // console.log(values);
        if (process.env.NODE_ENV === "production") {
            axios
                .get("/search", {
                    body: userInput
                })
                .then(resp => {
                    setRoutes(resp);
                    setPage("mode");
                })
                .catch(err => console.log(err.message));
        } else {
            setPage("mode");
        }
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
                        value={userInput.from}
                        className={"w-full bg-white"}
                        onChange={handleChange("from")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="get your location" onClick={handleGetLocation} edge="end">
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
                        value={userInput.to}
                        className={"w-full bg-white"}
                        onChange={handleChange("to")}
                        labelWidth={70}
                    />
                </FormControl>
            </div>
            <Fab
                className={"w-full mt-64"}
                disabled={!(userInput.from && userInput.to)}
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
