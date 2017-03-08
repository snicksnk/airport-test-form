import React, { Component, PropTypes } from 'react';
import { Typeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';
import autobind from 'autobind-decorator';
import ClassNames from 'classnames';
import _ from 'lodash';

import styles from '../styles/airPortSelectHelper.css';

export default class AirportSelectHelper extends Component {
    constructor(props) {
        super(props);
        this.state = { airPortsItems: [] };
    }

    componentWillReceiveProps(nextProps) {
        const { airPortsItems } = nextProps;

        const preparedAirPortItems = _.chain(airPortsItems)
            .filter(item => item.airportName !== null)
            .sortBy(item => item.airportName)
            .map(item => ({
                id: item.searchesCount,
                iata: item.iata,
                isCity: false,
                city: item.name,
                name: item.airportName,
                cityIata: item.cityIata,
            }))
            .groupBy(item => item.city)
            .reduce((result, cityAirports, cityName) => {
                const iata = cityAirports[0].cityIata;
                return [
                    ...result,
                    { isCity: true, city: cityName, name: cityName, iata },
                    ...cityAirports
                ];
            }, [])
            .value();

        this.setState({ airPortsItems: preparedAirPortItems });
    }

    @autobind
    handleChange(query) {
        const { loadAirPorts } = this.props;
        loadAirPorts(query);
    }

    @autobind
    handleFocus(e) {
        const { loadAirPorts } = this.props;
        const query = e.target.value;
        loadAirPorts(query);
    }

    renderMenu(results, menuProps) {
        return (
            <Menu {...menuProps}>
                {results.map((result, index) => {
                    const key = index;
                    return (
                        <MenuItem
                          option={result.name}
                          position={index}
                          key={key}
                          className={ClassNames({
                              [styles.city]: result.isCity,
                              [styles.airPort]: !result.isCity
                          })}
                        >
                            {result.name} ({result.iata})
                        </MenuItem>);
                })}
            </Menu>
        );
    }

    render() {
        const { airPortsItems } = this.state;
        return (
            <Typeahead
              onInputChange={this.handleChange}
              options={airPortsItems}
              filterBy={() => true}
              onFocus={this.handleFocus}
              renderMenu={this.renderMenu}
            />
        );
    }
}

AirportSelectHelper.propTypes = {
    loadAirPorts: PropTypes.func.isRequired,
    airPortsItems: PropTypes.array
};

AirportSelectHelper.defaultProps = {
    airPortsItems: []
};
