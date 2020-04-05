import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import locationImage from "../../helpers/location-helper";
import backBtn from "../../images/back.svg";
import Link from "next/link";
import Loader from "../../components/loader/loader";
import ResidentsList from "../../components/residents-list";
import Location from "../../components/location";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1,
        maxWidth: "100%",
        padding: theme.spacing(1.25, 1),
        maxWidth: "960px",
        margin: "0 auto",
        position: "relative"
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.root}>
                <Location />
                <ResidentsList />
            </Container>
        </Layout>
    );
};
