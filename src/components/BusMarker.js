import React from 'react';

const BusMarkerInfo = props => (
    <div className="marker-info">
        <p>{props.lineNumber}</p>
    </div>
);

class BusMarker extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.state = {
            showInfo: false
        };
    }

    render() {
        return (
            <div className="marker" 
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="bus-img"> {this.props.text} </div>
            </div>
        );
    }
    

    handleMouseEnter() {
        this.setState({showInfo: true});
    }

    handleMouseLeave() {
        this.setState({showInfo: false});
    }
}

export default BusMarker;