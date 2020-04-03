import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/layout/layout.js";
import { Container, Grid, Paper, Box } from "@material-ui/core";
import bg from "../images/galaxy.png";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import locationImage from "../helpers/location-helper";
import Link from 'next/link'
import Loader from '../components/loader/loader';

const useStyles = makeStyles({
    root: {
        width: "100%",
        backgroundImage: `url(${bg})`,
        flexGrow: 1,
        maxWidth: "100%"
    },
    gridItem: {
        display: "flex"
    },
    imgContainer: {
      width: '100%',
      maxWidth: '33%'
    },
    img: {
      display: 'block',
      width: '100%'
    }
});

const LOCATIONS = gql`
    {
        locations {
            results {
                id
                name
                type
                residents {
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
                      <Grid container spacing={3}>

                      {data.locations.results.map(
                          ({ id, name, type, residents }) => (
                              <Grid
                                  item
                                  xs={12}
                                  key={name}
                                  className={classes.gridItem}
                              >
                                  <Link href="/locations/[id]" as={`/locations/${id}`}>
                                      <a className={classes.imgContainer}>
                                          <img src={locationImage(type)} className={classes.img} />
                                      </a>
                                  </Link>
                                  <Box>
                                      <Paper>{name}</Paper>
                                      <Paper>{type}</Paper>
                                      <Box>
                                          {residents
                                              .slice(0, 3)
                                              .map(({ image }, i) => (
                                                  <Paper key={i}>
                                                      {image}
                                                  </Paper>
                                              ))}
                                      </Box>
                                  </Box>
                              </Grid>
                          )
                      )}
                      </Grid>
                    )}
            </Container>
        </Layout>
    );
};

export default Home;
