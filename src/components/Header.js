import React from 'react';
import PropTypes from 'prop-types';
import DropDownButton from './DropDownButton';
import Buttons from './Buttons';

const Header = props => (
    <div id="button-bar">
        <h1>{props.title}</h1>
        <h2>by {props.author}</h2>
        <Buttons buttons={props.buttons} addFilter={props.addFilter} removeFilter={props.removeFilter}/>
        <DropDownButton></DropDownButton>
    </div>
)

Header.propTypes = {
    buttons: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    addFilter: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired
}

export default Header;