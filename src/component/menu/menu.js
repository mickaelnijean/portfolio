import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const onglets = [
    { key: "#presentation", linkName: "Présentation" },
    { key: "#interest", linkName: "Intérêt" },
    { key: "#whyme", linkName: "Pourquoi moi ?" },
    { key: "#portfolio", linkName: "Portfolio" },
    { key: "#blockchain", linkName: "Blockchain" },
    { key: "#chatbot", linkName: "Chatbot" },
    { key: "#contact", linkName: "Contact" }
]

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title :{
        textShadow: "#000000 1px 1px, #000000 -1px 1px, #000000 -1px -1px, #000000 1px -1px"
    }
  };

class Menu extends React.Component {
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const brand = <a href="#home">Mickael NIJEAN</a>
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar style={{ position: "fixed" }}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Mickael NIJEAN
                        </Typography>
                        <Tabs value={value} onChange={this.handleChange}>
                        {
                            onglets.map(({ key, linkName }) => (
                                <Tab className={classes.title} key={key} href={key} label={linkName}/>
                            ))
                        }
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

  export default withStyles(styles)(Menu);