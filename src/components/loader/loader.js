import loading from '../../images/loading.gif'
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
    loadingContainer: {
        margin: '0 auto',
    },
    loading: {
        display: 'block',
        width: '100%'
    }
});

const Loader = () => {
    const classes = useStyles();

    return (
        <Box className={classes.loadingContainer}>
            <img src={loading} alt="Loading..." className={classes.loading} />
        </Box>
    );   
}

export default Loader;