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
import { useHistory } from "react-router-dom";

function Start(props) {
    // axios config
    axios.defaults.baseURL =
        process.env.NODE_ENV === "production" ? "http://our-site-url.com" : "http://127.0.0.1:5000";
    axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

    const { setRoutes, setOption, userInput, setUserInput } = props;
    const [loading, setLoading] = React.useState(false);
    const history = useHistory();

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

    const handleSearch = useCallback(
        event => {
            setLoading(true);
            axios
                .get(`/api/getRoutes?from=${userInput.from}&to=${userInput.to}`)
                .then(resp => {
                    // console.log(resp);
                    setLoading(false);
                    setRoutes(resp.data.routes);
                    history.push("/mode");
                })
                .catch(err => {
                    setLoading(false);
                    console.log(err.message);
                });
        },
        [history, setRoutes, userInput.from, userInput.to]
    );

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                handleSearch();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [handleSearch]);

    return (
        <div className="p-12">
            <Header className="min-h-64" />
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
                        value={userInput.from}
                        className="w-full bg-white"
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

                <FormControl variant="outlined" className="w-full mt-16">
                    <InputLabel htmlFor="to-field" className="font-bold text-lg">
                        To
                    </InputLabel>
                    <OutlinedInput
                        id="to-field"
                        type="text"
                        value={userInput.to}
                        className="w-full bg-white"
                        onChange={handleChange("to")}
                        labelWidth={70}
                    />
                </FormControl>
            </div>
            <Fab
                className="w-full my-64"
                disabled={!(userInput.from && userInput.to) || loading}
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
