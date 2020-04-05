import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout/layout.js';
import { Container, Box } from '@material-ui/core';
import LocationsList from '../components/locations/locations-list';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        flexGrow: 1,
        maxWidth: '100%',
        padding: theme.spacing(1.25, 1),
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            maxWidth: '960px',
        }
    },
    btn: {
        backgroundColor: 'red'
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.root}>
                <Box>
                    <LocationsList />
                </Box>
            </Container>
        </Layout>
    );
};

export default Home;
