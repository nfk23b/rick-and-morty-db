import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import locationImage from "../../helpers/location-helper";
import backBtn from "../../images/back.svg";
import Link from "next/link";
import Loader from "../../components/loader/loader";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        flexGrow: 1,
        maxWidth: "100%",
        padding: theme.spacing(1.25, 1)
    },
    wrapper: {
        maxWidth: "960px",
        margin: "0 auto",
        position: 'relative'
    },
    gridItem: {
        display: "flex",
        paddingLeft: 0,
        marginBottom: theme.spacing(1),
        [theme.breakpoints.up("md")]: {
            "&:nth-child(odd)": {
                paddingRight: "4px"
            },
            "&:nth-child(even)": {
                paddingLeft: "4px"
            }
        }
    },
    dataContainer: {
        marginTop: theme.spacing(2.25),
    },
    description: {
        backgroundColor: theme.palette.residents,
        width: '60%',
        padding: theme.spacing(3.375, 2, 1.6),
        position: 'relative'
    },
    backBtn: {
        position: 'absolute',
        left: theme.spacing(0.5)
    },
    imgContainer: {
        width: '40%'
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

const CHARACTER = gql`
    query Character($id: ID!) {
        character(id: $id) {
            name
            species
            status
            image
            location {
                id
                name
            }
            origin {
                name
            }
        }
    }
`;

export default () => {
    const router = useRouter();
    const classes = useStyles();
    const id = router.query.id;

    const { loading, data } = useQuery(CHARACTER, {
        variables: { id }
    });
    
    return (
        <Layout>
            <Container className={classes.root}>
                {loading ? (
                    <Loader />
                ) : (
                    <Box className={classes.wrapper}>
                        <Link href="/locations/[id]" as={`/locations/${data.character.location.id}`}>
                            <a className={classes.backBtn}>
                                <img src={backBtn} />
                            </a>
                        </Link>
                        <img src={data.character.image} className={classes.mainImg}/>
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
                )}
            </Container>
        </Layout>
    );
};
