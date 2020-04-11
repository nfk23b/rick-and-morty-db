import React from "react";
import App from "next/app";
import Head from "next/head";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../helpers/graphql";
import useSSR from "use-ssr";

const theme = createMuiTheme({
    palette: {
        locations: "#312A2A",
        residents: "#073955",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 960,
            lg: 1200,
            xl: 1920,
        },
    },
});

export default class MyApp extends App {
    componentDidMount() {
        const jssStyles = document.querySelector("#jss-server-side");

        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        // const { isBrowser, isServer, isNative } = useSSR();
        // console.log("IS BROWSER: ", isBrowser ? "Yes" : "No");
        // console.log("IS SERVER: ", isServer ? "Yes" : "No");
        // console.log("IS NATIVE: ", isNative ? "Yes" : "No");

        return (
            <React.Fragment>
                <React.StrictMode>
                    <Head>
                        <title>Rick and Morty Database</title>
                    </Head>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ApolloProvider client={client}>
                            <Component {...pageProps} />
                        </ApolloProvider>
                    </ThemeProvider>
                </React.StrictMode>
            </React.Fragment>
        );
    }
}
