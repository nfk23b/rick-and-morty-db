import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/layout/layout.js";
import { Container } from "@material-ui/core";
import LocationsList from '../components/locations-list';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loader from '../components/loader/loader';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1,
        maxWidth: "100%",
        padding: theme.spacing(1.25, 1)
    }
}));

const LOCATIONS = gql`
    {
        locations {
            results {
                id
                name
                type
                residents {
                    id
                    image
                }
            }
        }
    }
`;

const Home = () => {
    const classes = useStyles();
    const { loading, data } = useQuery(LOCATIONS);

    return (
        <Layout>
            <Container className={classes.root}>
                    {loading ? (
                        <Loader />
                    ) : (
                        <LocationsList data={data}/>
                    )}
            </Container>
        </Layout>
    );
};

export default Home;
