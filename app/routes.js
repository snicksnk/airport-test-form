import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AirForm from './containers/AirForm';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AirForm} />
        <Route path="/air-form" component={AirForm} />
    </Route>
);
