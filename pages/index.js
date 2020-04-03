import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Layout from '../components/layout/layout.js'

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
});

const Home = () => {
    const classes = useStyles();

    return (
      <Layout>
        <Container>
            
        </Container>

      </Layout>
    );
};

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
    padding: 2rem;
`;

export default Home;
