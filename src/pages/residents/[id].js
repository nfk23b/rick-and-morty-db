import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { CHARACTER } from "../../helpers/graphql";
import Loader from "../../components/loader/loader";
import Resident from '../../components/residents/resident';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1,
        maxWidth: "100%",
        padding: theme.spacing(1.25, 1)
    }
}));

export default () => {
    const router = useRouter();
    const classes = useStyles();
    const [queryId, setId] = useState(null);
    
    const id = router.query.id;
// console.log(id)
    const { loading, data } = useQuery(CHARACTER, {
        variables: { id }
    });
    
    return (
        <Layout>
            <Container className={classes.root}>
                {!loading  && data !== undefined ? (
                    <Resident data={data} />
                ) : (
                    <Loader />
                )}
            </Container>
        </Layout>
    );
};
