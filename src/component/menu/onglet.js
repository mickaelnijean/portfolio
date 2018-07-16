import React from 'react';
import PropTypes from 'prop-types'

export const Onglet =({linked,linkName,classGroup}) =>(
    <li className={classGroup!=="nav-item"?`nav-item ${classGroup}`:classGroup} >
        <a className="nav-link" href={linked}>{linkName}</a>
    </li>
)

Onglet.defaultProps = {
    classGroup:"nav-item"
}

Onglet.propTypes = {
    linked:PropTypes.string.isRequired,
    linkName:PropTypes.string.isRequired,
    classGroup:PropTypes.oneOf([
        undefined,
        "active"
    ])
}

