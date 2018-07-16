import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    fullImage: {
        height: "75%",
        padding: "100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(https://cdn.cnn.com/cnnnext/dam/assets/170407220921-07-iconic-mountains-pitons-restricted.jpg)`
    }
  };

class CurrentView extends React.Component{
    
    
    render () {
        const { classes, url, row, anchor } = this.props;
        classes.backgroundImage = `url(require(${url}))`
        return (
            <section id={anchor} className={classes.fullImage} >
               ça marhce au moins ? {row}
            </section>
        )
    }
}

CurrentView.propTypes = {
    url:PropTypes.string.isRequired,
    row:PropTypes.number
}

export default withStyles(styles)(CurrentView);