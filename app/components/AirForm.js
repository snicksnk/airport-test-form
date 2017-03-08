import React, { Component, PropTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AirportSelect from './AirportSelectHelper';

import styles from '../styles/airForm.css';

export default class AirForm extends Component {
    render() {
        const { loadAirPorts, airPortsItems } = this.props;

        return (<form className={styles.form}>
            <label htmlFor="numberOfPassengers" className={styles.label}>Количество пассажиров</label>
            <input id="numberOfPassengers" type="number" />

            <label htmlFor="departureAirport" className={styles.label}>Аэропорт вылета</label>
            <AirportSelect id="departureAirport" loadAirPorts={loadAirPorts} airPortsItems={airPortsItems} />

            <label htmlFor="arrivalAirport" className={styles.label}>Аэропорт прибытия</label>
            <AirportSelect id="arrivalAirport" loadAirPorts={loadAirPorts} airPortsItems={airPortsItems} />
        </form>);
    }
}

AirForm.propTypes = {
    loadAirPorts: PropTypes.func.isRequired,
    airPortsItems: PropTypes.array.isRequired
};

