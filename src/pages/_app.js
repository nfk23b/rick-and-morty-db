import NextApp from "next/app";
import React from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
global.fetch = require('node-fetch');

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql"
});


const theme = createMuiTheme({
    palette: {
        locations: '#312A2A',
        residents: '#073955',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1200,
            xl: 1920,
        }
    }
});
console.log(theme)
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
