import NextApp from "next/app";
import React from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from '../helpers/graphql';

const theme = createMuiTheme({
    palette: {
        locations: '#312A2A',
        residents: '#073955',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 960,
            lg: 1200,
            xl: 1920,
        }
    }
});

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
