import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {  Grid, Box, Typography } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
    skeletonContainer: {
        width: "100%",
        maxWidth: "100%",
        padding: 0
    },
    sleletonGrid: {
        padding: 0
    },
    skeletonGridItem: {
        display: "flex",
        paddingLeft: 0,
        marginBottom: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            "&:nth-child(odd)": {
                paddingRight: "4px"
            },
            "&:nth-child(even)": {
                paddingLeft: "4px"
            }
        }
    },
    skeletonItem: {
        backgroundColor: theme.palette.locations,
    }
}));

const SkeletonGrid = () => {
    const classes = useStyles();
    const skeleton = Array(10).fill(undefined);

    return (
        <Box className={classes.skeletonContainer}>
            <Grid container spacing={0} className={classes.sleletonGrid}>
                {skeleton.map(
                    (i, idx) => (
                        <Grid item xs={12} sm={6} key={idx} className={classes.skeletonGridItem}>
                            <Skeleton variant="rect" height={'180px'} width={'100%'} className={classes.skeletonItem} />
                        </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default SkeletonGrid;