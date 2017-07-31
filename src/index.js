import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createHistory from 'history/createBrowserHistory'
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware
} from 'react-router-redux';
import app from './reducers';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        app,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
