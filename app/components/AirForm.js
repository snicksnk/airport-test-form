import React, { Component, PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AirportSelect from './AirportSelectHelper';

export default class AirForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        const { loadAirPorts, airPortsItems } = this.props;

        return (<div>
            <input type="number" />
            <AirportSelect loadAirPorts={loadAirPorts} airPortsItems={airPortsItems} />
            <AirportSelect loadAirPorts={loadAirPorts} airPortsItems={airPortsItems} />
        </div>);
    }
}

AirForm.propTypes = {
    loadAirPorts: PropTypes.func.isRequired,
    airPortsItems: PropTypes.array.isRequired
};

