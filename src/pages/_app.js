import NextApp from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
global.fetch = require('node-fetch');

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
});

const theme = {
    primary: "green"
};

export default class App extends NextApp {
    // componentDidMount() {
    //     const jssStyles = document.querySelector("#jss-server-side");
    //     if (jssStyles && jssStyles.parentNode)
    //         jssStyles.parentNode.removeChild(jssStyles);
    // }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <ApolloProvider client={client}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </ThemeProvider>
        );
    }
}
