import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const Buttons = props => (
    <div id="buttons" className="hide">
        {props.buttons.map((b, index) => (<Button number={b.name} key={index} addFilter={props.addFilter} removeFilter={props.removeFilter}></Button>))}
    </div>
)

Buttons.propTypes = {
    buttons: PropTypes.array.isRequired,
    addFilter: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired
}

export default Buttons;