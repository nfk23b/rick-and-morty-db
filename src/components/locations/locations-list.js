import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import Link from 'next/link'
import locationImage from "../../helpers/location-image";
import Loader from '../loader/loader';
import { Waypoint } from 'react-waypoint';
import { useQuery } from '@apollo/react-hooks';
import { LOCATIONS } from '../../helpers/graphql';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1,
        maxWidth: "100%",
        padding: theme.spacing(1.25, 1)
    },
    gridItem: {
        display: "flex",
        paddingLeft: 0,
        marginBottom: theme.spacing(0.625),
        [theme.breakpoints.up('sm')]: {
            '&:nth-child(odd)': {
                paddingRight: '2.5px'
            },
            '&:nth-child(even)': {
                paddingLeft: '2.5px'
            },
          }
    },
    imgContainer: {
      width: '100%',
      maxWidth: '37%',
      minHeight: '140px'
    },
    img: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    descriptionContainer: {
        backgroundColor: theme.palette.locations,
        width: '100%',
        padding: theme.spacing(2, 2, 1.6),
        position: 'relative'
    },
    planetName: {
        color: theme.palette.common.white,
        fontSize: '1.5rem',
        lineHeight: '1.75rem',
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
        letterSpacing: '0.1px',
        textDecoration: 'none'
    },
    planetType: {
        color: theme.palette.common.white,
        fontSize: '1.125rem',
        lineHeight: '1.313rem',
        marginBottom: theme.spacing(1.5)
    },
    residentsContainer: {
        display: "flex",
        justifyContent: 'flex-start',
        maxWidth: '76%',
        position: 'absolute',
        bottom: '12px'
    },
    residentImg: {
        maxWidth: '26%',
        marginRight: '11%',
        '&:last-child': {
            marginRight: 0
        }
    }
}));

const LocationsList = () => {
    const classes = useStyles();

    const { data, fetchMore, networkStatus } = useQuery(LOCATIONS, {
        notifyOnNetworkStatusChange: true
    });

    return (
        <Grid container spacing={0}>
            {data !== undefined && data.locations.results
            .map(
                ({ id, name, type, residents }, i) => (
                    <Grid item xs={12} sm={6} key={id} className={classes.gridItem} >
                        {data.locations.info.next && i === data.locations.results.length - 2 &&
                            <Waypoint
                            onEnter={() =>
                              fetchMore({
                                variables: {
                                  page: data.locations.info.next
                                },
                                updateQuery: (pv, { fetchMoreResult }) => {
                                  if (!fetchMoreResult) {
                                    return pv;
                                  }
        
                                  return {
                                    locations: {
                                      __typename: "Locations",
                                      results: [
                                            ...pv.locations.results,
                                            ...fetchMoreResult.locations.results
                                      ],
                                      info: {
                                            __typename: "Info",
                                            next: fetchMoreResult.locations.info.next
                                      }
                                    }
                                  };
                                }
                              })
                            }
                          />
                        }
                        <Link href="/locations/[id]" as={`/locations/${id}`}>
                            <a className={classes.imgContainer}>
                                <img src={locationImage(type)} className={classes.img} />
                            </a>
                        </Link>
                        <Box className={classes.descriptionContainer}>
                            <Typography className={classes.planetName} component="h3">
                                <Link href="/locations/[id]" as={`/locations/${id}`}>
                                    <a className={classes.planetName}>{name}</a>
                                </Link>
                            </Typography>
                            <Typography className={classes.planetType}>{type}</Typography>
                            <Box className={classes.residentsContainer}>
                                {residents
                                    .slice(0, 3)
                                    .map(({ image, id }, i) => (
                                        <Link key={i} href="/residents/[id]" as={`/residents/${id}`}>
                                            <a  className={classes.residentImg} >
                                                <img src={image} className={classes.img}/>
                                            </a>
                                        </Link>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                )
                )}
            {(networkStatus === 3 || networkStatus === 1)&& <Loader />}
            </Grid>
    )
}

export default LocationsList;