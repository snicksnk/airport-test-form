import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as airActions from '../actions/air';
import AirForm from '../components/AirForm';

export const AirFormContainer = ({ airPortsItems, airActions }) => (
    <div>
        <AirForm airPortsItems={airPortsItems} loadAirPorts={airActions.loadAirPorts} />
    </div>
);

AirFormContainer.propTypes = {
    airActions: PropTypes.object.isRequired,
    airPortsItems: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    airPortsItems: state.get('airPorts').get('items').toJS(),
});

const mapDispatchToProps = (dispatch) => ({
    airActions: bindActionCreators(airActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AirFormContainer);
