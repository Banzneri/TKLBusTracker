import React from 'react';
import GoogleMapReact from 'google-map-react';
import ajax from 'superagent';
import BusMarker from './BusMarker';
import PropTypes from 'prop-types';

const apikey = 'AIzaSyAwuo7LKUf9k0JGVy-BVzwQfy7ks0Cs3wE';
const vehicleActivityUrl = 'http://data.itsfactory.fi/journeys/api/1/vehicle-activity';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            busses: []
        };
    }

    static defaultProps = {
        center: {
            lat: 61.49911,
            lng: 23.78712
        },
        zoom: 12
    };

    componentWillMount() {
        this.updateBusses();
        setInterval(this.updateBusses.bind(this), 1000);
    }

    render() {
        return (
            <div id="map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: apikey}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                {this.state.busses.map((value, index) => this.renderBusses(value, index))}
                </GoogleMapReact>
            </div>
        );
    }

    renderBusses(bus, index) {
        return (
            <BusMarker key={index}
                lat={bus.monitoredVehicleJourney.vehicleLocation.latitude}
                lng={bus.monitoredVehicleJourney.vehicleLocation.longitude}
                text={bus.monitoredVehicleJourney.journeyPatternRef}
            />
        );
    }

    updateFilteredBusses(e) {
        
    }

    updateBusses() {
        ajax.get(vehicleActivityUrl)
            .end((error, response) => {
                if (!error && response) {
                    let keys = Object.keys(response.body);
                    let busarray = keys.map(val => response.body[val]);
                    if (!busarray[2]) {
                        return console.log('Cant fetch busses');
                    }
                    let filter = busarray[2].filter(val => this.props.filter.includes(val.monitoredVehicleJourney.journeyPatternRef));
                    this.setState({busses: filter});
                    console.log(this.props.filter);
                } else {
                    console.log('There was an error fetching data from github', error);
                }
            }
        );
    }
}

Map.propTypes = {
    zoom: PropTypes.number.isRequired,
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    }).isRequired,
    filter: PropTypes.array.isRequired
}

export default Map;