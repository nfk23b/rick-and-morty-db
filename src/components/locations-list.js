import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import Link from 'next/link'
import locationImage from "../helpers/location-helper";
import Loader from '../components/loader/loader';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1,
        maxWidth: "100%",
        padding: theme.spacing(1.25, 1)
    },
    grid: {
        maxWidth: "960px",
        margin: '0 auto'
    },
    gridItem: {
        display: "flex",
        paddingLeft: 0,
        marginBottom: theme.spacing(0.625),
        [theme.breakpoints.up('md')]: {
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
      maxWidth: '37%'
    },
    img: {
      display: 'block',
      width: '100%'
    },
    description: {
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
        justifyContent: 'space-between',
        maxWidth: '76%',
        position: 'absolute',
        bottom: '12px'
    },
    residentImg: {
        maxWidth: '26%'
    }
}));

const LocationsList = ({ data }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.grid}>
            {data.locations.results.map(
                ({ id, name, type, residents }) => (
                    <Grid item xs={12} md={6} key={name} className={classes.gridItem} >
                        <Link href="/locations/[id]" as={`/locations/${id}`}>
                            <a className={classes.imgContainer}>
                                <img src={locationImage(type)} className={classes.img} />
                            </a>
                        </Link>
                        <Box className={classes.description}>
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
        </Grid>
    )
}

export default LocationsList;