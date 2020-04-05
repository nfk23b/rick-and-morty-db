import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
    },
    link: {
        outline: 'none',
        backgroundColor: theme.palette.common.black
    },
    img: {
        display: 'block',
        width: '100%'
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link href="/">
                <a className={classes.link}>
                    <img className={classes.img} src={require("../../../images/logo.svg")} />
                </a>
            </Link>
        </div>
    );
}
