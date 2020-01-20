import React from 'react';
import { Link } from "@reach/router"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#fff',
    },
    menu: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: '#FFF'
    },
    centerAlign: {
        margin: '0 auto'
    },
    active:{
        color: "#4051b5",
        background: '#fff',
        borderRadius: 9,
        padding: '0 14px'
    }
}));
const Header = (props) => {
    const classes = useStyles();
    console.log(props);

    return (
        <React.Fragment>
          {/* <Link to="/overview">overview</Link> */}
            {props.children}
        </React.Fragment >
    )
}

export default Header;

