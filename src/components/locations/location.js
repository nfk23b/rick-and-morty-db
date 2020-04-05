import { useState, useEffect  } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { LOCATION } from "../../helpers/graphql";
import locationImage from "../../helpers/location-image";
import backBtn from "../../images/back.svg";
import Link from "next/link";
import Loader from '../../components/loader/loader';

const useStyles = makeStyles(theme => ({
    wrapper: {
        maxWidth: '100%',
        margin: "0 auto",
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            maxWidth: "960px",
        }
    },
    dataContainer: {
        marginTop: theme.spacing(2.25),
    },
    backBtn: {
        position: 'absolute',
        left: theme.spacing(0.5),
        zIndex: 1
    },
    mainImg: {
        display: "block",
        width: "100%",
        maxWidth: '400px',
        margin: '0 auto',
    },
    img: {
        display: "block",
        width: "100%"
    },
    planetName: {
        color: theme.palette.common.white,
        fontSize: "1.5rem",
        lineHeight: "1.75rem",
        fontWeight: "bold",
        marginBottom: theme.spacing(1),
        letterSpacing: "0.1px",
        textDecoration: "none",
        paddingLeft: theme.spacing(0.625),
    },
    planetType: {
        color: theme.palette.common.white,
        fontSize: "1.125rem",
        lineHeight: "1.313rem",
        paddingLeft: theme.spacing(0.625),
    },
    }));

const Location = () => {
    const router = useRouter();
    const classes = useStyles();
    const id = router.query.id;
    
    const { loading, data } = useQuery(LOCATION, {
        variables: { id }
    });

    return (
        <Box >
            <Link href="/" as={`/`} >
                <a className={classes.backBtn}>
                    <img src={backBtn} />
                </a>
            </Link>
            {!loading ? (
                <Box className={classes.wrapper}>
                    <Box >
                        <img src={locationImage(data.location.type)} className={classes.mainImg} />
                    </Box>
                    <Box className={classes.dataContainer}>
                        <Typography variant="h3" className={classes.planetName}>
                            {data.location.name}
                        </Typography>
                        <Typography  className={classes.planetType}>
                            {data.location.type}
                        </Typography>
                    </Box>
                </Box>
            ) : <Loader /> } 
        </Box>
    );
};

export default Location;