import React from 'react';
import PropTypes from 'prop-types';

const defaultActiveLines = ['3', '3A', '3B', '5', '20'];

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: defaultActiveLines.includes(props.number) ? true : false
        }
        this.handleClick = this.handleClick.bind(this);
        this.init();
    }

    init() {
        this.state.active ? this.props.addFilter(this.props.number) : '';
    }

    handleClick() {
        if (this.state.active) {
            this.props.removeFilter(this.props.number);
            this.setState({active: false});
        } else {
            this.props.addFilter(this.props.number);
            this.setState({active: true});
        }
    }

    render() {
        return <button className={this.getClassNames()} onClick={this.handleClick}>{this.props.number}</button>
    }

    getClassNames() {
        return this.state.active ? "my-button active-button" : "my-button"; 
    }
}

Button.propTypes = {
    number: PropTypes.string.isRequired,
    addFilter: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired
}

export default Button;