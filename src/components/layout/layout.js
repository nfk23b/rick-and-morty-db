import Header from "./header/header";
import bg from "../../images/galaxy.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    layoutStyle: {
        width: '100%',
        maxWidth: '100%',
        minHeight: '100vh',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${bg})`,
        backgroundColor: 'black',
    },
    wrapper: {
        display: 'flex',
        flexGrow: 1,
    }
});


export default function Layout(props) {
    const classes = useStyles();

    return (
        <div className={classes.layoutStyle}>
            <Header />
            <div className={classes.wrapper}>
                {props.children}
            </div>
        </div>
    );
}
