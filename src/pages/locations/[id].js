import Layout from "../../components/layout/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import ResidentsList from "../../components/residents/residents-list";
import Location from "../../components/locations/location";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1,
        maxWidth: "100%",
        padding: theme.spacing(1.25, 1),
        margin: "0 auto",
        position: "relative",
        [theme.breakpoints.up('md')]: {
            maxWidth: "960px",
        }
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
