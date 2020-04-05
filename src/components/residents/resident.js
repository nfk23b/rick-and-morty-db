import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  Box, Typography } from "@material-ui/core";
import backBtn from "../../images/back.svg";
import Link from "next/link";
import Loader from "../loader/loader";

const useStyles = makeStyles(theme => ({
    wrapper: {
        maxWidth: "100%",
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
    characterName: {
        color: theme.palette.common.white,
        fontSize: "1.5rem",
        lineHeight: "1.75rem",
        fontWeight: "bold",
        marginBottom: theme.spacing(1),
        letterSpacing: "0.1px",
        textDecoration: "none",
        paddingLeft: theme.spacing(0.625),
    },
    characterPlanet: {
        color: theme.palette.common.white,
        marginBottom: theme.spacing(1),
        fontSize: "1.125rem",
        lineHeight: "1.313rem",
        paddingLeft: theme.spacing(0.625),
    },
    characterSpecies: {
        color: theme.palette.common.white,
        marginBottom: theme.spacing(0.875),
        fontSize: "1.125rem",
        lineHeight: "1.313rem",
        paddingLeft: theme.spacing(0.5),
    },
    characterStatus: {
        color: theme.palette.common.white,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: '1.9rem',
        paddingLeft: theme.spacing(0.55),
    },
    characterOrigin: {
        color: theme.palette.common.white,
        marginTop: theme.spacing(0.5),
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: '1.9rem',
        paddingLeft: theme.spacing(0.55),
    }
}));

const Resident = ({ data }) => {
    const classes = useStyles();
    const [loadingImage, setLoadingImage] = useState(true);

    const imageLoaded = () => {
        setLoadingImage(false);
    }
    
    return (
        <Box className={classes.wrapper}>
            <Link href="/locations/[id]" as={`/locations/${data.character.location.id}`}>
                <a className={classes.backBtn}>
                    <img src={backBtn} />
                </a>
            </Link>
            <Box style={{minHeight: loadingImage ? '400px' : 'auto'}}>
                <img src={data.character.image} className={classes.mainImg}  onLoad={imageLoaded}/>
            </Box>
            <Box className={classes.dataContainer}>
                <Typography variant="h3" className={classes.characterName}>
                    {data.character.name}
                </Typography>
                <Link href="/locations/[id]" as={`/locations/${data.character.location.id}`}>
                    <Typography  className={classes.characterPlanet}>
                        <a>
                            {data.character.location.name}
                        </a>
                    </Typography>
                </Link>
                <Typography  className={classes.characterSpecies}>
                    {data.character.species}
                </Typography>
                <Typography  className={classes.characterStatus}>
                    Status:
                    <br />
                    {data.character.status}
                </Typography>
                <Typography  className={classes.characterOrigin}>
                    Home planet: 
                    <br />
                    {data.character.origin.name}
                </Typography>
            </Box>
        </Box>
    );
};

export default Resident;