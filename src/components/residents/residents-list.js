import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { CHARACTERS } from "../../helpers/graphql";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
    gridItem: {
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
    description: {
        backgroundColor: theme.palette.residents,
        width: "60%",
        padding: theme.spacing(3.375, 2, 1.6),
        position: "relative"
    },
    imgContainer: {
        width: "40%",
        minHeight: '140px'
    },
    img: {
        display: "block",
        width: "100%",
        height: '100%',
        objectFit: 'cover'
    },
    residentName: {
        color: theme.palette.common.white,
        fontSize: "1.5rem",
        lineHeight: "1.75rem",
        fontWeight: "bold",
        marginBottom: theme.spacing(1),
        letterSpacing: "0.1px",
        textDecoration: "none"
    },
    residentSpecies: {
        color: theme.palette.common.white,
        fontSize: "1.125rem",
        lineHeight: "1.313rem",
        marginBottom: theme.spacing(0.875)
    },
    residents: {
        color: theme.palette.common.white,
        textAlign: "center",
        marginTop: theme.spacing(5.75),
        marginBottom: theme.spacing(1.25),
        fontSize: "1.5rem",
        fontWeight: "bold"
    },
}));

const ResidentsList = () => {
    const router = useRouter();
    const classes = useStyles();
    const id = router.query.id;
    
    const { loading, data } = useQuery(CHARACTERS, {
        variables: { id }
    });
    
    return (
        <Box>
            {!loading && data !== undefined && data.location.residents &&
                <Typography  className={classes.residents}>
                    Residents
                </Typography>
            }
            <Grid container spacing={0} >
                {!loading && data !== undefined && data.location.residents && data.location.residents.map(
                    ({ id, name, image, species, location }) => (
                        <Grid item xs={12} sm={6} key={id} className={classes.gridItem} >
                            <Link href="/residents/[id]" as={`/residents/${id}`}>
                                <a className={classes.imgContainer}>
                                    <img src={image} className={classes.img} />
                                </a>
                            </Link>
                            <Box className={classes.description}>
                                <Typography className={classes.residentName} component="h3">
                                    <Link href="/residents/[id]" as={`/residents/${id}`}>
                                        <a className={classes.residentName}>{name}</a>
                                    </Link>
                                </Typography>
                                <Typography className={classes.residentSpecies}>{species}</Typography>
                                <Typography className={classes.residentSpecies}>{location.name}</Typography>
                            </Box>
                        </Grid>
                    )
                )}
            </Grid>
        </Box>
    )
}

export default ResidentsList;