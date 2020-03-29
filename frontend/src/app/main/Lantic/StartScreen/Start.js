import Header from "app/main/Lantic/SharedComponents/Header/Header";
import {
    Fab,
    Icon,
    Typography,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    CircularProgress
} from "@material-ui/core";
import { MyLocation, Search } from "@material-ui/icons";
import React, { useCallback, useEffect } from "react";
import axios from "axios";
import _ from "@lodash";

function Start(props) {
    // axios config
    axios.defaults.baseURL = "https://lantic-backend.herokuapp.com";

    const { setRoutes, handleChange, setForm, form } = props;
    const [loading, setLoading] = React.useState(false);
    const [noRoutes, setNoRoutes] = React.useState(false);

    const handleGetLocation = event => {
        event.preventDefault();
        setTimeout(() => {
            setForm(_form => _.setIn({ ..._form }, "from", "Queen Mary University of London"));
        }, 250);
    };

    const handleSearch = useCallback(
        event => {
            setLoading(true);
            setNoRoutes(false);
            const { from, to } = form;
            axios
                .get(`/api/getRoutes?from=${from}&to=${to}`)
                .then(resp => {
                    // console.log(resp);
                    setLoading(false);
                    setRoutes(resp.data.routes);
                    if (resp.data.routes.length !== 0) {
                        props.history.push("/mode"); // only proceed to mode, if routes were loaded
                    } else {
                        setNoRoutes(true);
                    }
                })
                .catch(err => {
                    setLoading(false);
                    console.log(err.message);
                });
        },
        [form, props.history, setRoutes]
    );

    useEffect(() => {
        const listener = event => {
            if (form.from && form.to && (event.code === "Enter" || event.code === "NumpadEnter")) {
                handleSearch();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [form, handleSearch]);

    return (
        <div className="p-28">
            <Header noBack className="min-h-64" />
            <Typography variant="h4" className="company_text font-bold text-center mt-48 mb-32">
                Where are you going today?<Icon>cloud</Icon>
            </Typography>
            <div className="pt-32">
                <FormControl variant="outlined" className="w-full">
                    <InputLabel htmlFor="from-field" className="font-bold text-lg">
                        From
                    </InputLabel>
                    <OutlinedInput
                        id="from-field"
                        type="text"
                        autoFocus
                        name="from"
                        value={form.from}
                        className="w-full bg-white"
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="get your location" onClick={handleGetLocation} edge="end">
                                    <MyLocation />
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={40}
                    />
                </FormControl>

                <FormControl variant="outlined" className="w-full mt-16">
                    <InputLabel htmlFor="to-field" className="font-bold text-lg">
                        To
                    </InputLabel>
                    <OutlinedInput
                        id="to-field"
                        type="text"
                        name="to"
                        value={form.to}
                        className="w-full bg-white"
                        onChange={handleChange}
                        labelWidth={40}
                    />
                </FormControl>
            </div>
            {noRoutes && (
                <Typography className="text-red text-center font-bold -mb-32 mt-10">
                    No routes found, please check your start and end locations are correctly spelled and try again
                </Typography>
            )}
            <Fab
                className="w-full my-64"
                disabled={!(form.from && form.to) || loading}
                variant="extended"
                color="primary"
                aria-label="add"
                onClick={handleSearch}
            >
                {loading ? (
                    <CircularProgress />
                ) : (
                    <span>
                        <Search /> Search
                    </span>
                )}
            </Fab>
        </div>
    );
}

export default Start;
