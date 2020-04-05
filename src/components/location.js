import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import locationImage from "../helpers/location-helper";
import backBtn from "../images/back.svg";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
    wrapper: {
        maxWidth: "960px",
        margin: "0 auto",
        position: 'relative'
    },
    dataContainer: {
        marginTop: theme.spacing(2.25),
    },
    backBtn: {
        position: 'absolute',
        left: theme.spacing(0.5)
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

const LOCATION = gql`
    query Location($id: ID!) {
        location(id: $id) {
            id
            name
            type
        }
    }
`;

const Location = () => {
    const router = useRouter();
    const classes = useStyles();
    const id = router.query.id;

    const { loading, data } = useQuery(LOCATION, {
        variables: { id }
    });

    return (
        <Box >
            {!loading ? (
                <Box className={classes.wrapper}>
                    <Link href="/" as={`/`} >
                        <a className={classes.backBtn}>
                            <img src={backBtn} />
                        </a>
                    </Link>
                    <img src={locationImage(data.location.type)} className={classes.mainImg}/>
                    <Box className={classes.dataContainer}>
                        <Typography variant="h3" className={classes.planetName}>
                            {data.location.name}
                        </Typography>
                        <Typography  className={classes.planetType}>
                            {data.location.type}
                        </Typography>
                    </Box>
                </Box>
            ) : null } 
        </Box>
    );
};

export default Location;